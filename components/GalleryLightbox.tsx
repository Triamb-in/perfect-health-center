"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { GalleryItem } from "@/types";

interface GalleryLightboxProps {
  selectedItem: GalleryItem | null;
  onClose: () => void;
}

export function GalleryLightbox({ selectedItem, onClose }: GalleryLightboxProps) {
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

        <div className="relative w-full aspect-[16/10] max-h-[65vh] flex-shrink-0 protected-media select-none">
          <Image
            src={selectedItem.imageUrl}
            alt={selectedItem.altText}
            fill
            className="object-cover pointer-events-none select-none"
            sizes="(max-width: 1024px) 100vw, 900px"
            draggable={false}
          />
          {/* Transparent Security Overlay Shield */}
          <div
            className="absolute inset-0 z-10 bg-transparent select-none"
            onContextMenu={(e) => e.preventDefault()}
            aria-hidden="true"
          />
        </div>

        <div className="p-4 sm:p-5 overflow-y-auto bg-white border-t border-primary-subtle">
          <h4 className="font-serif font-bold text-lg text-primary-dark">
            {selectedItem.title}
          </h4>
          <p className="text-xs sm:text-sm text-text-muted">
            {selectedItem.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
