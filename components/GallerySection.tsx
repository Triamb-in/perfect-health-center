"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ZoomIn, Sparkles, Building2, LayoutGrid, Images } from "lucide-react";
import { GalleryItem } from "@/types";
import { GalleryLightbox } from "./GalleryLightbox";

interface GallerySectionProps {
  galleryItems: GalleryItem[];
}

const INITIAL_VISIBLE = 6;

export function GallerySection({ galleryItems }: GallerySectionProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeTab, setActiveTab] = useState<"All" | "Clinical Results" | "Clinic Facilities">("All");

  const filteredItems = activeTab === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeTab);

  const visibleItems = filteredItems.slice(0, INITIAL_VISIBLE);
  const hiddenCount = galleryItems.length - INITIAL_VISIBLE;

  const handleTabChange = (tab: "All" | "Clinical Results" | "Clinic Facilities") => {
    setActiveTab(tab);
  };

  return (
    <section id="gallery" className="py-14 sm:py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="section-tag">Sanctuary of Healing &amp; Results</div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-primary-dark mb-3 sm:mb-4">
            Clinic Gallery &amp; Treatment Outcomes
          </h2>
          <p className="text-sm sm:text-base text-text-muted">
            Explore our calm healing environment, modern natural dispensary, and documented clinical improvements under Dr. Pragati's holistic homeopathic care in Diva East.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          <button
            onClick={() => handleTabChange("All")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === "All"
                ? "bg-primary-dark text-white shadow-md shadow-primary-dark/20 scale-105"
                : "bg-stone-100 text-text-muted hover:bg-stone-200 hover:text-primary-dark"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            All ({galleryItems.length})
          </button>
          <button
            onClick={() => handleTabChange("Clinical Results")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === "Clinical Results"
                ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                : "bg-stone-100 text-text-muted hover:bg-stone-200 hover:text-primary-dark"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Clinical Results ({galleryItems.filter((i) => i.category === "Clinical Results").length})
          </button>
          <button
            onClick={() => handleTabChange("Clinic Facilities")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === "Clinic Facilities"
                ? "bg-primary-dark text-white shadow-md shadow-primary-dark/20 scale-105"
                : "bg-stone-100 text-text-muted hover:bg-stone-200 hover:text-primary-dark"
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            Clinic Facilities ({galleryItems.filter((i) => i.category === "Clinic Facilities").length})
          </button>
        </div>

        {/* Photo Grid with 3:2 Aspect Ratio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {visibleItems.map((item) => {
            const isClinical = item.category === "Clinical Results";
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative aspect-[3/2] rounded-2xl overflow-hidden shadow-subtle hover:shadow-floating cursor-pointer transition-all duration-300 transform hover:-translate-y-1 bg-stone-100 border border-stone-200/70"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.altText}
                  width={720}
                  height={480}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 95vw, (max-width: 1024px) 48vw, 390px"
                />

                {/* Subtle Category Pill Badge */}
                <div className="absolute top-3 left-3 z-10 pointer-events-none">
                  {isClinical ? (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-primary-dark/90 backdrop-blur-md text-emerald-300 border border-emerald-400/30 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Clinical Result
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-primary-dark border border-black/5 shadow-sm">
                      Clinic Space
                    </span>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-serif font-bold text-base text-white">
                      {item.title}
                    </p>
                    <ZoomIn className="w-5 h-5 text-emerald-300 flex-shrink-0 ml-2" />
                  </div>
                  <span className="text-xs text-white/85 line-clamp-2">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Gallery Button */}
        {galleryItems.length > INITIAL_VISIBLE && (
          <div className="mt-10 sm:mt-14 flex flex-col items-center gap-3">
            <p className="text-sm text-text-muted">
              Showing <span className="font-semibold text-primary-dark">{INITIAL_VISIBLE}</span> of <span className="font-semibold text-primary-dark">{galleryItems.length}</span> photos
            </p>
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2.5 bg-primary-dark hover:bg-primary-hover text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold shadow-button hover:shadow-button-hover transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Images className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
              View Full Gallery
              <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 text-xs font-bold">
                +{hiddenCount}
              </span>
            </Link>
          </div>
        )}

      </div>

      <GalleryLightbox
        selectedItem={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
