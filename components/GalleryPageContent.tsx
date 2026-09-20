"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Building2,
  LayoutGrid,
  ArrowLeft,
  ZoomIn,
  Calendar,
  MessageCircle,
  Play,
} from "lucide-react";
import { GalleryItem } from "@/types";
import { GalleryLightbox } from "./GalleryLightbox";

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

  const clinicalCount = useMemo(
    () => galleryItems.filter((i) => i.category === "Clinical Results").length,
    [galleryItems]
  );
  const facilitiesCount = useMemo(
    () => galleryItems.filter((i) => i.category === "Clinic Facilities").length,
    [galleryItems]
  );

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/#gallery"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-xs sm:text-sm font-medium text-primary-dark hover:text-primary hover:border-emerald-300 hover:bg-emerald-50/50 shadow-xs transition-all duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="section-tag mb-2">Sanctuary of Healing &amp; Results</div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4 tracking-tight">
            Clinic Gallery &amp; Clinical Outcomes
          </h1>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto">
            Browse our serene healing space, modern homeopathic dispensary, and
            authentic documented clinical transformations under Dr. Pragati&apos;s
            individualized care in Diva East, Thane.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-10 sm:mb-12">
          <button
            type="button"
            onClick={() => setActiveTab("All")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark focus-visible:ring-offset-2 cursor-pointer ${
              activeTab === "All"
                ? "bg-primary-dark text-white border border-primary-dark shadow-md shadow-primary-dark/20 scale-105"
                : "bg-white text-primary-dark border border-stone-200 shadow-xs hover:bg-emerald-50/70 hover:border-emerald-300 hover:shadow-sm"
            }`}
          >
            <LayoutGrid
              className={`w-4 h-4 flex-shrink-0 ${
                activeTab === "All" ? "text-white" : "text-primary"
              }`}
            />
            <span>All Photos</span>
            <span
              className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                activeTab === "All"
                  ? "bg-white/20 text-white"
                  : "bg-primary-subtle text-primary-dark"
              }`}
            >
              {galleryItems.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("Clinical Results")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark focus-visible:ring-offset-2 cursor-pointer ${
              activeTab === "Clinical Results"
                ? "bg-primary-dark text-white border border-primary-dark shadow-md shadow-primary-dark/20 scale-105"
                : "bg-white text-primary-dark border border-stone-200 shadow-xs hover:bg-emerald-50/70 hover:border-emerald-300 hover:shadow-sm"
            }`}
          >
            <Sparkles
              className={`w-4 h-4 flex-shrink-0 ${
                activeTab === "Clinical Results"
                  ? "text-amber-300"
                  : "text-amber-600"
              }`}
            />
            <span>Clinical Results</span>
            <span
              className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                activeTab === "Clinical Results"
                  ? "bg-white/20 text-white"
                  : "bg-primary-subtle text-primary-dark"
              }`}
            >
              {clinicalCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("Clinic Facilities")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark focus-visible:ring-offset-2 cursor-pointer ${
              activeTab === "Clinic Facilities"
                ? "bg-primary-dark text-white border border-primary-dark shadow-md shadow-primary-dark/20 scale-105"
                : "bg-white text-primary-dark border border-stone-200 shadow-xs hover:bg-emerald-50/70 hover:border-emerald-300 hover:shadow-sm"
            }`}
          >
            <Building2
              className={`w-4 h-4 flex-shrink-0 ${
                activeTab === "Clinic Facilities"
                  ? "text-white"
                  : "text-primary"
              }`}
            />
            <span>Clinic Facilities</span>
            <span
              className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                activeTab === "Clinic Facilities"
                  ? "bg-white/20 text-white"
                  : "bg-primary-subtle text-primary-dark"
              }`}
            >
              {facilitiesCount}
            </span>
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {filteredItems.map((item) => {
            const isClinical = item.category === "Clinical Results";
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative flex flex-col bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/90 shadow-subtle hover:shadow-floating transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Image Container with 4:3 Aspect Ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100 protected-media select-none">
                  <Image
                    src={item.imageUrl}
                    alt={item.altText || item.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 select-none"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                  />

                  {/* Category & Video Pill Tags */}
                  <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 pointer-events-none">
                    {isClinical ? (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-950/85 backdrop-blur-md text-emerald-300 border border-emerald-400/30 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Clinical Result
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-primary-dark border border-stone-200/70 shadow-xs">
                        <Building2 className="w-3 h-3 text-primary" />
                        Clinic Space
                      </span>
                    )}

                    {item.videoUrl && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-full bg-rose-600/90 text-white backdrop-blur-md shadow-xs">
                        <Play className="w-2.5 h-2.5 fill-white" />
                        Video
                      </span>
                    )}
                  </div>

                  {/* Zoom Badge Button */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:bg-primary-dark group-hover:scale-110 transition-all duration-300 shadow-xs">
                      <ZoomIn className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Subtle Gradient Shade on bottom edge of image */}
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Card Content Below Image */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white border-t border-stone-100">
                  <div>
                    <h2 className="font-serif font-bold text-lg sm:text-xl text-primary-dark group-hover:text-primary transition-colors line-clamp-1 mb-2">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed line-clamp-2">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-stone-100 flex items-center justify-between text-xs text-primary font-medium">
                    <span className="inline-flex items-center gap-1.5 group-hover:underline">
                      {item.videoUrl ? (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current text-primary" />
                          Watch video &amp; view photo
                        </>
                      ) : (
                        <>
                          <ZoomIn className="w-3.5 h-3.5 text-primary" />
                          Click to view full photo
                        </>
                      )}
                    </span>
                    <span className="text-[11px] text-text-muted">
                      {isClinical ? "Documented Case" : "Diva East"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-stone-200 my-8">
            <p className="text-lg font-medium text-primary-dark mb-1">
              No photos in this category yet.
            </p>
            <p className="text-sm text-text-muted mb-4">
              Please check back soon or browse all photos.
            </p>
            <button
              onClick={() => setActiveTab("All")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-dark text-white hover:bg-primary text-xs sm:text-sm font-semibold transition-colors"
            >
              View All Photos
            </button>
          </div>
        )}

        {/* Quick Consultation CTA Banner */}
        <div className="bg-primary-dark rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-card mt-14 sm:mt-20">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#a3d9b1] font-semibold block mb-1">
              Need Direct Guidance?
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Ready to schedule your appointment?
            </h2>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed">
              Meet Dr. Pragati Khobragade at Perfect Health Center Diva East or book an online homeopathic consultation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary-dark hover:bg-[#ebf4ef] px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-colors shadow-subtle"
            >
              <Calendar className="w-4 h-4 text-primary-main" />
              <span>Book Appointment</span>
            </Link>
            <a
              href="https://wa.me/919321774438?text=Hello%20Dr.%20Pragati,%20I%20saw%20your%20clinic%20gallery%20and%20would%20like%20to%20consult%20regarding%20treatment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-colors shadow-subtle"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox for viewing photos with full details */}
      <GalleryLightbox
        selectedItem={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
