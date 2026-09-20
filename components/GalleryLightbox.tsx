"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, Play, Image as ImageIcon } from "lucide-react";
import { GalleryItem } from "@/types";
import { UniversalVideoEmbed } from "./UniversalVideoEmbed";

interface GalleryLightboxProps {
  selectedItem: GalleryItem | null;
  onClose: () => void;
}

export function GalleryLightbox({ selectedItem, onClose }: GalleryLightboxProps) {
  const [viewMode, setViewMode] = useState<"image" | "video">("image");

  useEffect(() => {
    if (selectedItem?.videoUrl && !selectedItem?.imageUrl) {
      setViewMode("video");
    } else {
      setViewMode("image");
    }
  }, [selectedItem]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (selectedItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem, onClose]);

  if (!selectedItem) return null;

  const hasVideo = Boolean(selectedItem.videoUrl);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[94vh] flex flex-col bg-white rounded-2xl overflow-hidden shadow-floating border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Optional View Switcher if item has both photo and video */}
        {hasVideo && selectedItem.imageUrl && (
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/20">
            <button
              type="button"
              onClick={() => setViewMode("image")}
              className={`inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                viewMode === "image"
                  ? "bg-white text-primary-dark shadow-xs"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Photo</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("video")}
              className={`inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                viewMode === "video"
                  ? "bg-white text-primary-dark shadow-xs"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Video</span>
            </button>
          </div>
        )}

        {/* Media Container: Photo or Universal Video */}
        {viewMode === "video" && selectedItem.videoUrl ? (
          <div className="relative w-full max-h-[65vh] p-4 sm:p-6 bg-black flex items-center justify-center overflow-y-auto">
            <div className="w-full max-w-2xl">
              <UniversalVideoEmbed
                url={selectedItem.videoUrl}
                title={selectedItem.title}
                poster={selectedItem.imageUrl}
              />
            </div>
          </div>
        ) : (
          <div className="relative w-full flex-shrink-0 protected-media select-none">
            <Image
              src={selectedItem.imageUrl}
              alt={selectedItem.altText || selectedItem.title}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[65vh] object-contain pointer-events-none select-none"
              style={{ display: "block" }}
              draggable={false}
              priority
            />
            {/* Transparent Security Overlay Shield */}
            <div
              className="absolute inset-0 z-10 bg-transparent select-none"
              onContextMenu={(e) => e.preventDefault()}
              aria-hidden="true"
            />
          </div>
        )}

        <div className="p-4 sm:p-5 overflow-y-auto bg-white border-t border-primary-subtle">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
            <h4 className="font-serif font-bold text-lg text-primary-dark">
              {selectedItem.title}
            </h4>
            {selectedItem.category && (
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                selectedItem.category === "Clinical Results"
                  ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                  : "bg-primary-subtle text-primary-dark"
              }`}>
                {selectedItem.category}
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-text-muted">
            {selectedItem.subtitle}
          </p>
          {selectedItem.category === "Clinical Results" && (
            <p className="mt-2 text-[11px] text-text-muted/80 italic">
              * Note: Individual clinical outcomes depend on personal constitution, medical history, and adherence to homeopathic treatment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
