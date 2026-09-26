"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Star,
  Quote,
  CheckCircle2,
  HeartHandshake,
  ZoomIn,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { TestimonialItem } from "@/types";
import { UniversalVideoEmbed } from "./UniversalVideoEmbed";

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [previewImage, setPreviewImage] = useState<{
    url: string;
    caption: string;
  } | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials ? testimonials.length - visibleCards : 0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  if (!testimonials || testimonials.length === 0) return null;

  const renderCard = (item: TestimonialItem) => {
    const initials = item.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    const isInstagramPost =
      item.postUrl && /(?:instagram\.com|instagr\.am)\/(?:p|reel)\//i.test(item.postUrl);
    const isGoogleReview =
      item.postUrl && /(?:google\.com|g\.page|g\.co)/i.test(item.postUrl);
    const isFacebookPost =
      item.postUrl && /(?:facebook\.com|fb\.watch)/i.test(item.postUrl);

    const hasValidVideo = Boolean(
      item.videoUrl &&
        item.videoUrl.trim() !== "" &&
        (item.videoUrl.includes("<iframe") ||
          item.videoUrl.includes("http://") ||
          item.videoUrl.includes("https://") ||
          item.videoUrl.startsWith("/"))
    );

    return (
      <div
        key={item.id}
        className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-subtle hover:shadow-floating transition-all duration-300 flex flex-col justify-between h-full relative group"
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

          {/* Video Testimonial Player (Only if valid video provided) */}
          {hasValidVideo && (
            <UniversalVideoEmbed
              url={item.videoUrl!}
              title={`Video testimonial by ${item.name}`}
              poster={item.imageUrl}
              className="mb-4"
            />
          )}

          {/* Attached Image / Review Screenshot / Case Photo (If image provided) */}
          {item.imageUrl && (
            <div
              onClick={() =>
                setPreviewImage({
                  url: item.imageUrl!,
                  caption: `${item.name} — Testimonial Documentation`,
                })
              }
              className="mb-4 relative rounded-2xl overflow-hidden border border-stone-200/90 group/img cursor-pointer bg-stone-50 aspect-[16/10]"
              title="Click to view full image"
            >
              <Image
                src={item.imageUrl}
                alt={`${item.name} testimonial proof`}
                fill
                className="object-cover group-hover/img:scale-105 transition-transform duration-300 select-none"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 text-white text-xs font-medium backdrop-blur-sm">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to expand image</span>
                </span>
              </div>
            </div>
          )}

          {/* Social Post Link Badge (If external post provided) */}
          {item.postUrl && (
            <div className="mb-3">
              {isInstagramPost ? (
                <a
                  href={item.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] px-3 py-1 rounded-full shadow-xs hover:opacity-90 transition-opacity"
                >
                  <span>View on Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : isGoogleReview ? (
                <a
                  href={item.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full shadow-xs hover:bg-amber-100 transition-colors"
                >
                  <span>⭐ View on Google Reviews</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : isFacebookPost ? (
                <a
                  href={item.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#1877F2] px-3 py-1 rounded-full shadow-xs hover:opacity-90 transition-opacity"
                >
                  <span>View on Facebook</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <a
                  href={item.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-dark bg-primary-subtle border border-emerald-200 px-3 py-1 rounded-full shadow-xs hover:bg-emerald-100 transition-colors"
                >
                  <span>View Original Post</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
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
          {item.avatarUrl ? (
            <Image
              src={item.avatarUrl}
              alt={item.name}
              width={48}
              height={48}
              className="w-11 h-11 rounded-full object-cover border border-stone-200 flex-shrink-0"
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
  };

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
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="section-tag mb-3">Patient Voices &amp; Recovery</div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4 tracking-tight">
            Authentic Patient Experiences &amp; Clinical Recoveries
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto">
            Genuine stories of healing from individuals and families treated under
            Dr. Pragati Khobragade&apos;s personalized constitutional homeopathic care in Diva East.
          </p>
        </div>

        {/* Carousel Navigation Header (Shown when > 3 testimonials) */}
        {testimonials.length > 3 && (
          <div className="flex items-center justify-between sm:justify-end gap-3 mb-6">
            <span className="text-xs sm:text-sm text-text-muted font-medium sm:mr-2">
              Showing{" "}
              <span className="font-bold text-primary-dark">
                {currentIndex + 1}–{Math.min(currentIndex + visibleCards, testimonials.length)}
              </span>{" "}
              of{" "}
              <span className="font-bold text-primary-dark">{testimonials.length}</span>
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                disabled={currentIndex === 0}
                aria-label="Previous testimonials"
                className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-50 active:scale-95 text-primary-dark disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-xs hover:shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                aria-label="Next testimonials"
                className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-50 active:scale-95 text-primary-dark disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-xs hover:shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Testimonials Container: Static Grid if <= 3, Animated Sliding Track if > 3 */}
        {testimonials.length <= 3 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((item) => renderCard(item))}
          </div>
        ) : (
          <div
            className="overflow-hidden -mx-3 px-3 py-2 cursor-grab active:cursor-grabbing select-none"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 px-3 w-full sm:w-1/2 lg:w-1/3 flex flex-col"
                >
                  {renderCard(item)}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Carousel Pagination Dots */}
        {testimonials.length > 3 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? "w-8 bg-primary-dark"
                    : "w-2.5 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        )}

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

      {/* High-Resolution Testimonial Image Lightbox */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-floating border border-white/20 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative w-full max-h-[75vh] flex items-center justify-center bg-stone-900 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previewImage.url}
                alt={previewImage.caption}
                className="max-h-[75vh] w-auto max-w-full object-contain select-none"
              />
            </div>

            <div className="p-4 bg-white border-t border-stone-100 flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-primary-dark">
                {previewImage.caption}
              </p>
              <button
                onClick={() => setPreviewImage(null)}
                className="text-xs text-primary font-medium hover:underline flex-shrink-0"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
