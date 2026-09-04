import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Check if Upstash Redis environment variables are defined
const hasUpstashConfig =
  Boolean(process.env.UPSTASH_REDIS_REST_URL) &&
  Boolean(process.env.UPSTASH_REDIS_REST_TOKEN);

let ratelimitInstance: Ratelimit | null = null;

if (hasUpstashConfig) {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });

  // 5 requests per 10 minutes sliding window per IP
  ratelimitInstance = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(5, "10 m"),
    analytics: true,
    prefix: "phc_clinic_ratelimit",
  });
} else {
  console.warn(
    "[ratelimit] WARNING: UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN not set. " +
      "Falling back to in-memory rate limiting — NOT suitable for production."
  );
}

// Fallback in-memory map for local development when env vars aren't configured yet
const memoryStore = new Map<string, { count: number; resetTime: number }>();

export async function checkRateLimit(identifier: string): Promise<{
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}> {
  if (ratelimitInstance) {
    const result = await ratelimitInstance.limit(identifier);
    return {
      success: result.success,
      limit: result.limit,
      remaining: result.remaining,
      reset: result.reset,
    };
  }

  // Graceful local memory limiter fallback (only used in dev when UPSTASH envs are absent)
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const limit = 5;

  const record = memoryStore.get(identifier);

  if (!record || now > record.resetTime) {
    memoryStore.set(identifier, { count: 1, resetTime: now + windowMs });
    return {
      success: true,
      limit,
      remaining: limit - 1,
      reset: now + windowMs,
    };
  }

  if (record.count >= limit) {
    return {
      success: false,
      limit,
      remaining: 0,
      reset: record.resetTime,
    };
  }

  record.count += 1;
  return {
    success: true,
    limit,
    remaining: limit - record.count,
    reset: record.resetTime,
  };
}

/**
 * Returns which rate-limit backend is active.
 * Useful for health checks or diagnostics.
 */
export function getRateLimitBackend(): "upstash-redis" | "in-memory-fallback" {
  return ratelimitInstance ? "upstash-redis" : "in-memory-fallback";
}
