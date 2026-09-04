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
 */
export function verifyMediaToken(
  relativePath: string,
  token: string,
  exp: number
): { valid: boolean; reason?: string } {
  if (!token || !exp || isNaN(exp)) {
    return { valid: false, reason: "Missing or invalid token parameters" };
  }

  const currentSeconds = Math.floor(Date.now() / 1000);
  if (currentSeconds > exp) {
    return { valid: false, reason: "Media access link has expired" };
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
 * Helper to build an expiring signed URL for any protected asset
 */
export function getSignedMediaUrl(
  internalPath: string,
  options: { expiresInSeconds?: number } = {}
): string {
  const { expiresInSeconds = 3600 } = options; // Default 1-hour session validity
  const cleanPath = internalPath.replace(/^\/+/, "");
  const exp = Math.floor(Date.now() / 1000) + expiresInSeconds;
  const token = createMediaToken(cleanPath, exp);

  return `/api/media/${cleanPath}?token=${token}&exp=${exp}`;
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
