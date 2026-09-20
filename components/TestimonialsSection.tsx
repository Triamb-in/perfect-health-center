"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote, CheckCircle2, HeartHandshake } from "lucide-react";
import { TestimonialItem } from "@/types";

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-28 bg-[#fafaf7] relative overflow-hidden">
      {/* Decorative background subtle glows */}
      <div
        className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary-subtle/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="section-tag mb-3">Patient Voices &amp; Recovery</div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4 tracking-tight">
            Authentic Patient Experiences &amp; Clinical Recoveries
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto">
            Genuine stories of healing from individuals and families treated under
            Dr. Pragati Khobragade&apos;s personalized constitutional homeopathic care in Diva East.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => {
            const initials = item.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-subtle hover:shadow-floating transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Top Row: Stars & Verified Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1" aria-label={`${item.rating || 5} out of 5 stars`}>
                      {Array.from({ length: item.rating || 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Verified Recovery
                    </span>
                  </div>

                  {/* Video Testimonial Player (If uploaded) */}
                  {item.videoUrl && (
                    <div className="mb-4 rounded-2xl overflow-hidden bg-black/5 aspect-video relative border border-stone-200/80">
                      <video
                        src={item.videoUrl}
                        controls
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Quote Icon & Content */}
                  <Quote className="w-8 h-8 text-emerald-100 group-hover:text-emerald-200 transition-colors mb-2" />
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed italic mb-6">
                    &ldquo;{item.comment}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-stone-100 flex items-center gap-3.5">
                  {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover border border-stone-200 flex-shrink-0"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-primary-subtle text-primary-dark font-bold text-sm flex items-center justify-center flex-shrink-0">
                      {initials || "P"}
                    </div>
                  )}

                  <div className="min-w-0">
                    <h3 className="font-serif font-bold text-base text-primary-dark truncate">
                      {item.name}
                    </h3>
                    {item.condition && (
                      <p className="text-xs text-emerald-700 font-medium truncate">
                        {item.condition}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-stone-200 shadow-xs text-xs sm:text-sm text-text-muted">
            <HeartHandshake className="w-4 h-4 text-emerald-600" />
            <span>
              100% Genuine Patient Feedback &amp; Clinical Documentation from Diva East
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
