import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import sharp from "sharp";
import { verifyMediaToken } from "@/lib/mediaSecurity";

const MEDIA_VAULT_ROOT = path.join(process.cwd(), "server-storage", "media");

function generateCertificateWatermarkSvg(width: number, height: number): string {
  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="wm-pattern" width="420" height="200" patternUnits="userSpaceOnUse" patternTransform="rotate(-26)">
          <text x="10" y="50" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="14" font-weight="700" fill="rgba(19, 70, 51, 0.18)" letter-spacing="1">
            OFFICIAL VERIFICATION COPY
          </text>
          <text x="20" y="80" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12" font-weight="600" fill="rgba(36, 87, 66, 0.15)">
            PERFECT HEALTH CENTER • DR. PRAGATI
          </text>
          <text x="30" y="110" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="11" font-weight="500" fill="rgba(19, 70, 51, 0.12)">
            FOR CLINICAL AUTHENTICATION ONLY
          </text>
        </pattern>
      </defs>

      <!-- Diagonal Security Watermark Repeating Mesh -->
      <rect width="100%" height="100%" fill="url(#wm-pattern)" />

      <!-- Official Security Footer Banner -->
      <rect x="0" y="${height - 38}" width="${width}" height="38" fill="rgba(19, 70, 51, 0.88)" />
      <text x="${width / 2}" y="${height - 14}" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">
        🔒 OFFICIAL MEDICAL CREDENTIAL • PERFECT HEALTH CENTER • DR. PRAGATI KHOBRAGADE
      </text>
    </svg>
  `;
}

function generateDoctorWatermarkSvg(width: number, height: number): string {
  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <!-- Subtle Brand Seal at Bottom Right -->
      <g transform="translate(${width - 240}, ${height - 36})">
        <rect width="230" height="28" rx="6" fill="rgba(19, 70, 51, 0.75)" />
        <text x="115" y="18" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="11" font-weight="600" fill="#ffffff" text-anchor="middle">
          © Perfect Health Center • Dr. Pragati
        </text>
      </g>
    </svg>
  `;
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path: pathSegments } = await context.params;
    if (!pathSegments || pathSegments.length === 0) {
      return NextResponse.json({ error: "Invalid media path" }, { status: 400 });
    }

    const relativePath = pathSegments.join("/");
    const searchParams = request.nextUrl.searchParams;
    const token = searchParams.get("token") || "";
    const exp = parseInt(searchParams.get("exp") || "0", 10);

    // Verify cryptographic signature and expiration
    const verification = verifyMediaToken(relativePath, token, exp);
    if (!verification.valid) {
      return NextResponse.json(
        { error: verification.reason || "Access denied: Invalid or expired media link" },
        { status: 403 }
      );
    }

    // Resolve physical file path safely
    const resolvedPath = path.resolve(MEDIA_VAULT_ROOT, ...pathSegments);
    if (!resolvedPath.startsWith(MEDIA_VAULT_ROOT)) {
      return NextResponse.json({ error: "Path traversal forbidden" }, { status: 403 });
    }

    // Check file existence
    try {
      await fs.access(resolvedPath);
    } catch {
      return NextResponse.json({ error: "Media file not found" }, { status: 404 });
    }

    const fileBuffer = await fs.readFile(resolvedPath);
    let imagePipeline = sharp(fileBuffer);
    const metadata = await imagePipeline.metadata();

    const imgWidth = metadata.width || 800;
    const imgHeight = metadata.height || 600;

    // Apply security watermarks to valuable media
    if (relativePath.startsWith("certificates/")) {
      const watermarkSvg = Buffer.from(
        generateCertificateWatermarkSvg(imgWidth, imgHeight)
      );
      imagePipeline = imagePipeline.composite([
        {
          input: watermarkSvg,
          top: 0,
          left: 0,
        },
      ]);
    } else if (relativePath.startsWith("doctor/about_doctor")) {
      const watermarkSvg = Buffer.from(
        generateDoctorWatermarkSvg(imgWidth, imgHeight)
      );
      imagePipeline = imagePipeline.composite([
        {
          input: watermarkSvg,
          top: 0,
          left: 0,
        },
      ]);
    }

    // Convert to optimized WebP format
    const outputBuffer = await imagePipeline
      .webp({ quality: 85, effort: 4 })
      .toBuffer();

    return new NextResponse(outputBuffer, {
      status: 200,
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "private, no-transform, max-age=3600",
        "Content-Disposition": `inline; filename="preview.webp"`,
        "X-Content-Type-Options": "nosniff",
        "X-Media-Protection": "Protected by Perfect Health Center Vault",
      },
    });
  } catch (error: any) {
    console.error("Error serving protected media:", error);
    return NextResponse.json(
      { error: "Internal server error while preparing media" },
      { status: 500 }
    );
  }
}
