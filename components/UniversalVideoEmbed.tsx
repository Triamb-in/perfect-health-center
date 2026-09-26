"use client";

import React, { useState } from "react";
import { Play, ExternalLink, Video as VideoIcon } from "lucide-react";

interface UniversalVideoEmbedProps {
  url: string;
  title?: string;
  poster?: string;
  className?: string;
}

// Instagram SVG Icon
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

// Facebook SVG Icon
function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

// YouTube SVG Icon
function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export function UniversalVideoEmbed({
  url,
  title = "Video",
  poster,
  className = "",
}: UniversalVideoEmbedProps) {
  const [loadIframe, setLoadIframe] = useState(false);

  if (!url) return null;
  let cleanUrl = url.trim();

  // If user pasted a full <iframe ... src="..." ...> embed code, extract the src URL
  const iframeSrcMatch = cleanUrl.match(/<iframe[^>]*\s+src=["']([^"']+)["']/i);
  if (iframeSrcMatch && iframeSrcMatch[1]) {
    cleanUrl = iframeSrcMatch[1];
  }

  // 1. YouTube Match
  const youtubeMatch = cleanUrl.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (youtubeMatch && youtubeMatch[1]) {
    const videoId = youtubeMatch[1];
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-black border border-stone-200/80 aspect-video shadow-xs ${className}`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-0"
        />
      </div>
    );
  }

  // 2. Instagram Match (Reels, Posts, TV)
  const instagramMatch = cleanUrl.match(
    /(?:instagram\.com|instagr\.am)\/(?:reel|reels|p|tv)\/([a-zA-Z0-9_-]+)/
  );
  if (instagramMatch && instagramMatch[1]) {
    const igCode = instagramMatch[1];
    const isReel = /(?:reel|reels)/i.test(cleanUrl);
    const embedUrl = isReel
      ? `https://www.instagram.com/reel/${igCode}/embed/`
      : `https://www.instagram.com/p/${igCode}/embed/`;
    const watchUrl = isReel
      ? `https://www.instagram.com/reel/${igCode}/`
      : `https://www.instagram.com/p/${igCode}/`;

    return (
      <div className={`relative flex flex-col rounded-2xl overflow-hidden bg-stone-900 border border-stone-200/80 shadow-xs ${className}`}>
        {/* Top Instagram Branded Bar */}
        <div className="flex items-center justify-between px-3.5 py-1.5 bg-gradient-to-r from-[#833ab4]/90 via-[#fd1d1d]/90 to-[#fcb045]/90 text-white text-xs font-semibold">
          <div className="flex items-center gap-1.5">
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>{isReel ? "Instagram Reel" : "Instagram Post"}</span>
          </div>
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:underline text-[11px] bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded-full transition-colors"
          >
            <span>Open in App</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>

        {/* Instagram Embed Frame (16:9 Landscape) */}
        <div className="relative w-full aspect-video bg-stone-900 flex items-center justify-center overflow-hidden">
          <iframe
            src={embedUrl}
            title={title || "Instagram Testimonial"}
            className="w-full h-full border-0"
            allowFullScreen
            scrolling="no"
          />
        </div>
      </div>
    );
  }

  // 3. Facebook Video Match (fb.watch or facebook.com)
  const isFacebook = /(?:facebook\.com|fb\.watch)/i.test(cleanUrl);
  if (isFacebook) {
    let watchUrl = cleanUrl;
    let videoHref = cleanUrl;

    if (cleanUrl.includes("facebook.com/plugins/video.php")) {
      const hrefParam = cleanUrl.match(/[?&]href=([^&]+)/);
      if (hrefParam && hrefParam[1]) {
        try {
          videoHref = decodeURIComponent(hrefParam[1]);
          watchUrl = videoHref;
        } catch {
          videoHref = cleanUrl;
        }
      }
    }

    const fbEmbedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoHref)}&show_text=0`;

    return (
      <div className={`relative flex flex-col rounded-2xl overflow-hidden bg-black border border-stone-200/80 shadow-xs ${className}`}>
        {/* Facebook Header */}
        <div className="flex items-center justify-between px-3.5 py-1.5 bg-[#1877F2] text-white text-xs font-semibold">
          <div className="flex items-center gap-1.5">
            <FacebookIcon className="w-3.5 h-3.5" />
            <span>Facebook Video</span>
          </div>
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:underline text-[11px] bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded-full transition-colors"
          >
            <span>Watch on FB</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>

        {/* Facebook Embed Frame (Standard 16:9 Landscape) */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
          <iframe
            src={fbEmbedUrl}
            title={title || "Facebook Video"}
            className="w-full h-full border-0"
            allowFullScreen
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </div>
    );
  }

  // 4. Direct Video file (MP4, WebM, MOV, Sanity asset CDN)
  const isDirectVideo =
    /\.(mp4|webm|mov|m4v|ogg)(\?.*)?$/i.test(cleanUrl) ||
    cleanUrl.includes("cdn.sanity.io/files") ||
    cleanUrl.startsWith("blob:");

  if (isDirectVideo) {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-black aspect-video border border-stone-200/80 shadow-xs ${className}`}>
        <video
          src={cleanUrl}
          poster={poster}
          controls
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // 5. Generic iframe embed if user passed an embed iframe or URL
  if (url.includes("<iframe") || cleanUrl.includes("/embed/")) {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-black border border-stone-200/80 aspect-video shadow-xs ${className}`}>
        <iframe
          src={cleanUrl}
          title={title}
          allowFullScreen
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    );
  }

  // 6. Generic / External Video Link Card
  return (
    <div className={`relative rounded-2xl overflow-hidden bg-stone-50 border border-stone-200 p-4 shadow-xs ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary-dark flex items-center justify-center flex-shrink-0">
            <VideoIcon className="w-5 h-5 text-primary-dark" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-primary-dark line-clamp-1">
              {title || "Watch Video Testimonial"}
            </h4>
            <p className="text-[11px] text-text-muted truncate max-w-[200px] sm:max-w-xs">
              {cleanUrl}
            </p>
          </div>
        </div>

        <a
          href={cleanUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-dark hover:bg-primary text-white text-xs font-semibold transition-colors flex-shrink-0 shadow-xs"
        >
          <Play className="w-3 h-3 fill-white" />
          <span>Watch</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>
    </div>
  );
}
