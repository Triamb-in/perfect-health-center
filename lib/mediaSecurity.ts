import crypto from "crypto";

const SIGNING_SECRET =
  process.env.MEDIA_SIGNING_SECRET ||
  "perfect-health-center-media-vault-secret-key-2026";

/**
 * Generate HMAC-SHA256 signature for a media path and expiration timestamp
 */
export function createMediaToken(relativePath: string, exp: number): string {
  const cleanPath = relativePath.replace(/^\/+/, "");
  return crypto
    .createHmac("sha256", SIGNING_SECRET)
    .update(`${cleanPath}:${exp}`)
    .digest("hex");
}

/**
 * Verify HMAC token and expiration timestamp
 * When exp === 0, the token is treated as a non-expiring permanent signature
 * (used for public-facing assets like doctor portraits and verified certificates).
 */
export function verifyMediaToken(
  relativePath: string,
  token: string,
  exp: number
): { valid: boolean; reason?: string } {
  if (!token || exp === undefined || isNaN(exp) || exp < 0) {
    return { valid: false, reason: "Missing or invalid token parameters" };
  }

  // Only check expiration if exp is non-zero (exp > 0)
  if (exp > 0) {
    const currentSeconds = Math.floor(Date.now() / 1000);
    if (currentSeconds > exp) {
      return { valid: false, reason: "Media access link has expired" };
    }
  }

  const cleanPath = relativePath.replace(/^\/+/, "");
  const expectedToken = createMediaToken(cleanPath, exp);

  try {
    const tokenBuffer = Buffer.from(token, "hex");
    const expectedBuffer = Buffer.from(expectedToken, "hex");

    if (
      tokenBuffer.length !== expectedBuffer.length ||
      !crypto.timingSafeEqual(tokenBuffer, expectedBuffer)
    ) {
      return { valid: false, reason: "Invalid signature" };
    }
  } catch {
    return { valid: false, reason: "Malformed token" };
  }

  return { valid: true };
}

/**
 * Helper to build a signed URL for protected clinic media.
 * Pass expiresInSeconds: 0 (default for public media) for a permanent signature.
 */
export function getSignedMediaUrl(
  internalPath: string,
  options: { expiresInSeconds?: number } = {}
): string {
  const { expiresInSeconds = 0 } = options; // Default to non-expiring for public media
  const cleanPath = internalPath.replace(/^\/+/, "");
  const exp = expiresInSeconds > 0 ? Math.floor(Date.now() / 1000) + expiresInSeconds : 0;
  const token = createMediaToken(cleanPath, exp);

  return `/api/media/${cleanPath}?token=${token}&exp=${exp}`;
}

/**
 * Convenience helper for non-expiring public media assets
 */
export function getPermanentMediaUrl(internalPath: string): string {
  return getSignedMediaUrl(internalPath, { expiresInSeconds: 0 });
}

/**
 * Helper to build an expiring signed URL for HLS video streaming
 */
export function getSignedVideoUrl(
  videoId: string,
  file: string,
  options: { expiresInSeconds?: number } = {}
): string {
  const { expiresInSeconds = 7200 } = options; // Default 2-hour streaming window
  const cleanPath = `video/${videoId}/${file}`.replace(/^\/+/, "");
  const exp = Math.floor(Date.now() / 1000) + expiresInSeconds;
  const token = createMediaToken(cleanPath, exp);

  return `/api/video/${videoId}/${file}?token=${token}&exp=${exp}`;
}
