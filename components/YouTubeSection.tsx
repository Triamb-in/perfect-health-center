"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Youtube, Play, ExternalLink, Volume2, CheckCircle2 } from "lucide-react";
import { YouTubeVideoItem } from "@/types";

interface YouTubeSectionProps {
  videos: YouTubeVideoItem[];
  channelUrl: string;
  channelName: string;
}

function extractYouTubeId(raw: string): string {
  if (!raw) return "";
  const match = raw.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/|watch\?.+&v=))([\w-]{11})/
  );
  return match ? match[1] : raw.trim();
}

export function YouTubeSection({
  videos,
  channelUrl,
  channelName,
}: YouTubeSectionProps) {
  const normalizedVideos = (videos || []).map((v) => {
    const cleanId = extractYouTubeId(v.youtubeId);
    return {
      ...v,
      youtubeId: cleanId,
      thumbnailUrl: v.thumbnailUrl || `https://i.ytimg.com/vi/${cleanId}/hqdefault.jpg`,
    };
  });

  const [activeVideoId, setActiveVideoId] = useState<string>(
    normalizedVideos[0]?.youtubeId || ""
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);

  if (!normalizedVideos || normalizedVideos.length === 0) return null;

  const currentVideo =
    normalizedVideos.find((v) => v.youtubeId === activeVideoId) || normalizedVideos[0];

  const handleSelectVideo = (youtubeId: string) => {
    setActiveVideoId(youtubeId);
    setIsPlaying(true);

    // If on mobile/tablet view, smoothly scroll up to the player
    if (typeof window !== "undefined" && window.innerWidth < 1024 && playerRef.current) {
      playerRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="videos" className="py-20 lg:py-28 bg-[#fafaf7] relative border-t border-primary-subtle">
      {/* VideoObject Schema for SEO / Google Video Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            normalizedVideos.map((vid) => ({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: vid.title,
              description: vid.description,
              thumbnailUrl: vid.thumbnailUrl,
              uploadDate: vid.uploadDate || "2024-01-01",
              embedUrl: `https://www.youtube-nocookie.com/embed/${vid.youtubeId}`,
            }))
          ),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="section-tag">
              <Youtube className="w-4 h-4 text-red-600" />
              <span>Educational Video Library</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-primary-dark">
              Health &amp; Homeopathy Insights
            </h2>
            <p className="text-sm sm:text-base text-text-muted mt-2 max-w-xl">
              Watch Dr. Pragati Khobragade explain natural approaches to chronic diseases, pain management, and holistic wellness.
            </p>
          </div>

          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#ff0000] hover:bg-[#cc0000] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-button transition-all duration-200 flex-shrink-0 self-start md:self-auto transform hover:-translate-y-0.5"
          >
            <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Visit @{channelName.replace(/^@/, '')}</span>
            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-75" />
          </a>
        </div>

        {/* 2-Column Showcase: Main Featured Player + Video Playlist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Main Featured Player (Left 7 Cols) */}
          <div
            ref={playerRef}
            id="main-video-player"
            className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 border border-primary-subtle shadow-card"
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-subtle mb-5">
              {activeVideoId ? (
                <iframe
                  key={activeVideoId}
                  src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=${
                    isPlaying ? 1 : 0
                  }&rel=0&modestbranding=1`}
                  title={currentVideo?.title || "Dr. Pragati Health Insights Video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-sm">
                  Select a video to play
                </div>
              )}
            </div>

            {/* Current Video Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-primary-main uppercase tracking-wider">
                <Volume2 className="w-3.5 h-3.5 text-primary-light" />
                <span>Featured Episode</span>
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-primary-dark leading-snug">
                {currentVideo?.title}
              </h3>
              <p className="text-xs sm:text-sm text-text-body leading-relaxed pt-1">
                {currentVideo?.description}
              </p>
            </div>
          </div>

          {/* Video Playlist Grid (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            <div className="flex items-center justify-between pb-1">
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-primary-main">
                Featured Episodes ({normalizedVideos.length})
              </h4>
              <span className="text-xs text-text-muted">Click episode to play</span>
            </div>

            <div className="space-y-3 max-h-[560px] overflow-y-auto pr-1.5">
              {normalizedVideos.map((vid, idx) => {
                const isSelected = activeVideoId === vid.youtubeId;

                return (
                  <button
                    type="button"
                    key={vid.id || vid.youtubeId || idx}
                    onClick={() => handleSelectVideo(vid.youtubeId)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex gap-3.5 sm:gap-4 items-center group relative ${
                      isSelected
                        ? "bg-primary-subtle/80 border-primary-main shadow-card ring-2 ring-primary-main/20"
                        : "bg-white border-primary-subtle hover:border-primary-light/60 hover:bg-cream-50/50 shadow-subtle hover:shadow-card"
                    }`}
                  >
                    {/* Video Thumbnail with Play Badge */}
                    <div className="relative w-28 sm:w-32 aspect-video rounded-xl overflow-hidden flex-shrink-0 bg-black border border-primary-subtle/40">
                      <Image
                        src={vid.thumbnailUrl}
                        alt={vid.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="130px"
                      />
                      <div
                        className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                          isSelected
                            ? "bg-primary-dark/40 opacity-100"
                            : "bg-black/30 opacity-90 group-hover:opacity-100"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                            isSelected
                              ? "bg-white text-primary-dark scale-110 shadow-floating"
                              : "bg-white/90 text-primary-dark group-hover:scale-110"
                          }`}
                        >
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Video Meta Info */}
                    <div className="flex-1 min-w-0 pr-1">
                      <div className="flex items-center gap-1.5 mb-1">
                        {isSelected ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Now Playing</span>
                          </span>
                        ) : (
                          <span className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">
                            Episode {idx + 1}
                          </span>
                        )}
                      </div>

                      <h5
                        className={`font-serif font-bold text-sm line-clamp-2 leading-snug transition-colors ${
                          isSelected
                            ? "text-primary-dark"
                            : "text-text-dark group-hover:text-primary-dark"
                        }`}
                      >
                        {vid.title}
                      </h5>

                      <p className="text-[11px] text-text-muted line-clamp-1 mt-1">
                        {vid.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
