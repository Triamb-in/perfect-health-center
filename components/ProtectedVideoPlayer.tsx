"use client";

import React, { useEffect, useRef } from "react";

interface ProtectedVideoPlayerProps {
  src?: string; // HLS playlist URL e.g. /api/video/sample/playlist.m3u8
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
}

export function ProtectedVideoPlayer({
  src,
  poster,
  className = "",
  autoPlay = false,
  muted = false,
  controls = true,
}: ProtectedVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    // Check for native HLS support (Safari, iOS, and modern browsers)
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    } else {
      // Direct stream fallback
      video.src = src;
    }
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-black protected-media select-none ${className}`}
      onContextMenu={(e) => e.preventDefault()}
    >
      <video
        ref={videoRef}
        poster={poster}
        controls={controls}
        autoPlay={autoPlay}
        muted={muted}
        playsInline
        disablePictureInPicture
        controlsList="nodownload noplaybackrate"
        className="w-full h-full object-contain pointer-events-auto"
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      />

      {/* Transparent Protective Shield (prevents direct right-click or drag on the video frame) */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        aria-hidden="true"
      />
    </div>
  );
}
