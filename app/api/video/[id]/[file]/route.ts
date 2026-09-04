import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { verifyMediaToken } from "@/lib/mediaSecurity";

const VIDEO_VAULT_ROOT = path.join(process.cwd(), "server-storage", "media", "videos");

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string; file: string }> }
) {
  try {
    const { id: videoId, file: fileName } = await context.params;
    const searchParams = request.nextUrl.searchParams;
    const token = searchParams.get("token") || "";
    const exp = parseInt(searchParams.get("exp") || "0", 10);

    const relativePath = `video/${videoId}/${fileName}`;
    const verification = verifyMediaToken(relativePath, token, exp);

    if (!verification.valid) {
      return NextResponse.json(
        { error: verification.reason || "Unauthorized or expired video stream" },
        { status: 403 }
      );
    }

    // Serve HLS Playlist Manifest (.m3u8)
    if (fileName === "playlist.m3u8" || fileName.endsWith(".m3u8")) {
      const playlistContent = `#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:6
#EXT-X-MEDIA-SEQUENCE:0
#EXTINF:6.000,
/api/video/${videoId}/segment-0.ts?token=${token}&exp=${exp}
#EXTINF:6.000,
/api/video/${videoId}/segment-1.ts?token=${token}&exp=${exp}
#EXT-X-ENDLIST`;

      return new NextResponse(playlistContent, {
        status: 200,
        headers: {
          "Content-Type": "application/vnd.apple.mpegurl",
          "Cache-Control": "private, no-cache, no-store",
          "Content-Disposition": "inline",
          "X-Content-Type-Options": "nosniff",
        },
      });
    }

    // Serve HLS Video Segments (.ts) or chunk streams
    const targetFilePath = path.join(VIDEO_VAULT_ROOT, videoId, fileName);
    try {
      await fs.access(targetFilePath);
      const fileBuffer = await fs.readFile(targetFilePath);

      return new NextResponse(fileBuffer, {
        status: 200,
        headers: {
          "Content-Type": "video/MP2T",
          "Cache-Control": "private, no-transform, max-age=3600",
          "Content-Disposition": "inline",
          "X-Content-Type-Options": "nosniff",
        },
      });
    } catch {
      // If segment file doesn't exist on disk yet (mock stream), return simulated stream segment
      return new NextResponse(Buffer.alloc(0), {
        status: 200,
        headers: {
          "Content-Type": "video/MP2T",
          "Cache-Control": "private, no-cache",
        },
      });
    }
  } catch (error) {
    console.error("Error streaming video:", error);
    return NextResponse.json(
      { error: "Internal server error during video stream" },
      { status: 500 }
    );
  }
}
