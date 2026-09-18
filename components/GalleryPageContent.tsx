"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Sparkles,
  Building2,
  LayoutGrid,
  ArrowLeft,
} from "lucide-react";
import { GalleryItem } from "@/types";
import { GalleryLightbox } from "./GalleryLightbox";
import { DriftWall, DriftWallItem } from "./DriftWall";

interface GalleryPageContentProps {
  galleryItems: GalleryItem[];
}

export function GalleryPageContent({ galleryItems }: GalleryPageContentProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeTab, setActiveTab] = useState<
    "All" | "Clinical Results" | "Clinic Facilities"
  >("All");

  const filteredItems = useMemo(() => {
    if (activeTab === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeTab);
  }, [galleryItems, activeTab]);

  const driftItems: DriftWallItem[] = useMemo(() => {
    return filteredItems.map((item) => ({
      id: item.id,
      image: item.imageUrl,
      title: item.title,
      subtitle: item.subtitle,
      category: item.category,
      rawItem: item,
    }));
  }, [filteredItems]);

  const clinicalCount = useMemo(
    () => galleryItems.filter((i) => i.category === "Clinical Results").length,
    [galleryItems]
  );
  const facilitiesCount = useMemo(
    () => galleryItems.filter((i) => i.category === "Clinic Facilities").length,
    [galleryItems]
  );

  const handleTileClick = (tile: DriftWallItem) => {
    if (tile.rawItem) {
      setSelectedItem(tile.rawItem);
    } else {
      const found = galleryItems.find(
        (g) => g.id === tile.id || g.imageUrl === tile.image
      );
      if (found) setSelectedItem(found);
    }
  };

  return (
    <div className="w-full relative">
      {/* Contained Header & Filter Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/#gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-dark hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="section-tag">Sanctuary of Healing &amp; Results</div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
            Clinic Gallery
          </h1>
          <p className="text-sm sm:text-base text-text-muted">
            Explore our calm healing environment, modern natural dispensary, and
            documented clinical improvements under Dr. Pragati&apos;s holistic
            homeopathic care in Diva East.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <button
            type="button"
            onClick={() => setActiveTab("All")}
            className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark focus-visible:ring-offset-2 cursor-pointer ${
              activeTab === "All"
                ? "bg-primary-dark text-white border border-primary-dark shadow-md shadow-primary-dark/25 scale-105"
                : "bg-white text-primary-dark border border-stone-200/90 shadow-sm hover:bg-emerald-50/70 hover:border-emerald-300 hover:text-primary-dark hover:shadow-md"
            }`}
          >
            <LayoutGrid className={`w-3.5 h-3.5 flex-shrink-0 ${activeTab === "All" ? "text-white" : "text-primary-main"}`} />
            <span>All</span>
            <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-full ${activeTab === "All" ? "bg-white/20 text-white" : "bg-primary-subtle/80 text-primary-dark"}`}>
              {galleryItems.length}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("Clinical Results")}
            className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark focus-visible:ring-offset-2 cursor-pointer ${
              activeTab === "Clinical Results"
                ? "bg-primary-dark text-white border border-primary-dark shadow-md shadow-primary-dark/25 scale-105"
                : "bg-white text-primary-dark border border-stone-200/90 shadow-sm hover:bg-emerald-50/70 hover:border-emerald-300 hover:text-primary-dark hover:shadow-md"
            }`}
          >
            <Sparkles className={`w-3.5 h-3.5 flex-shrink-0 ${activeTab === "Clinical Results" ? "text-amber-300" : "text-amber-600"}`} />
            <span>Clinical Results</span>
            <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-full ${activeTab === "Clinical Results" ? "bg-white/20 text-white" : "bg-primary-subtle/80 text-primary-dark"}`}>
              {clinicalCount}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("Clinic Facilities")}
            className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark focus-visible:ring-offset-2 cursor-pointer ${
              activeTab === "Clinic Facilities"
                ? "bg-primary-dark text-white border border-primary-dark shadow-md shadow-primary-dark/25 scale-105"
                : "bg-white text-primary-dark border border-stone-200/90 shadow-sm hover:bg-emerald-50/70 hover:border-emerald-300 hover:text-primary-dark hover:shadow-md"
            }`}
          >
            <Building2 className={`w-3.5 h-3.5 flex-shrink-0 ${activeTab === "Clinic Facilities" ? "text-white" : "text-primary-main"}`} />
            <span>Clinic Facilities</span>
            <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-full ${activeTab === "Clinic Facilities" ? "bg-white/20 text-white" : "bg-primary-subtle/80 text-primary-dark"}`}>
              {facilitiesCount}
            </span>
          </button>
        </div>
      </div>

      {/* 3D Drift Wall Gallery - Full Bleed */}
      <div className="gallery-bleed-wrapper relative w-full overflow-x-clip my-0">
        {/* Soft Top Gradient Fade Overlay */}
        <div
          className="absolute top-0 left-0 right-0 h-28 sm:h-36 lg:h-44 bg-gradient-to-b from-[#fafaf7] via-[#fafaf7]/80 to-transparent pointer-events-none z-10"
          aria-hidden="true"
        />

        <div className="relative w-full h-[520px] sm:h-[580px] md:h-[630px] lg:h-[680px] xl:h-[720px]">
          <DriftWall
            items={driftItems}
            pauseOnHover={true}
            tilt={11}
            turn={-9}
            depth={100}
            perspective={1200}
            overlayColor="#134633"
            dim={0.86}
            lift={64}
            fade={0.2}
            onTileClick={handleTileClick}
          />
        </div>
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-20 text-text-muted">
          <p className="text-lg font-medium">No photos in this category yet.</p>
        </div>
      )}

      {/* Lightbox for zooming photos */}
      <GalleryLightbox
        selectedItem={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
