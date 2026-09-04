"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { GalleryItem } from "@/types";
import { GalleryLightbox } from "./GalleryLightbox";

interface GallerySectionProps {
  galleryItems: GalleryItem[];
}

export function GallerySection({ galleryItems }: GallerySectionProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-14 sm:py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="section-tag">Sanctuary of Healing</div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-primary-dark mb-3 sm:mb-4">
            Clinic Gallery
          </h2>
          <p className="text-sm sm:text-base text-text-muted">
            Explore our calm, modern healing environment, private consultation space, and pure homeopathic remedy dispensary in Diva East.
          </p>
        </div>

        {/* 6 Photo Grid with Hover Overlay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-subtle hover:shadow-floating cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
            >
              <Image
                src={item.imageUrl}
                alt={item.altText}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Hover Dark Green Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-serif font-bold text-base text-white">
                    {item.title}
                  </h4>
                  <ZoomIn className="w-5 h-5 text-[#a3d9b1]" />
                </div>
                <span className="text-xs text-white/80">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <GalleryLightbox
        selectedItem={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
