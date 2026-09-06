import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { ClinicData } from "@/types";

interface HeroProps {
  clinicData: ClinicData;
  onOpenBooking?: () => void;
}

export function Hero({ clinicData, onOpenBooking }: HeroProps) {
  return (
    <section
      id="home"
      className="hero-section relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 pb-6 sm:pb-8 lg:pb-0 overflow-hidden bg-[#f4f4ee] lg:min-h-[580px] xl:min-h-[640px] lg:flex lg:items-center"
      style={{ overflowX: "hidden" }}
    >
      {/* Top-Left Green Leaves Overlay - Only on wide desktop (xl+) */}
      <div className="hero-leaves-decor hidden xl:block absolute -top-16 left-0 pointer-events-none z-10 w-64 max-w-[20vw] h-auto overflow-hidden">
        <Image
          src="/images/hero_left_leaves.png"
          alt="Natural Herb Leaves Decor"
          width={400}
          height={650}
          priority
          className="hero-left-leaves-img w-full h-auto object-contain object-left-top mix-blend-multiply opacity-100 select-none pointer-events-none"
          draggable={false}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-20 w-full">
        {/* Unified Responsive Grid (Zero Markup Duplication) */}
        <div className="grid grid-cols-12 gap-2.5 sm:gap-4 md:gap-6 xl:gap-6 items-end">
          
          {/* ============================================================
              1. LEFT COLUMN: Tagline, Doctor Name (Single H1), Badges, CTA
              ============================================================ */}
          <div className="col-span-6 sm:col-span-6 md:col-span-7 xl:col-span-4 flex flex-col items-start z-20 pt-1 sm:pt-2 pl-1 sm:pl-3 pb-1 xl:py-4 xl:pl-0 min-w-0 xl:self-center">
            {/* Tagline */}
            <div className="inline-flex items-center gap-1 xl:gap-1.5 text-[10px] sm:text-xs md:text-sm xl:text-base font-semibold text-[#134633] mb-1 xl:mb-3">
              <span>{clinicData.tagline || "Compassionate Care, Naturally"}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#134633"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 xl:w-4 xl:h-4"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>

            {/* Single Semantic H1 for the entire page */}
            <h1 className="font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[3.2rem] font-bold text-[#134633] leading-[1.12] xl:leading-[1.08] mb-1 xl:mb-2 tracking-tight">
              {clinicData.doctorName}
            </h1>

            {/* Sub-heading */}
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium text-[#556b60] mb-2 sm:mb-2.5 xl:mb-6 leading-snug">
              {clinicData.doctorTitle || "Skin Care & Asthma Specialist | Homeopathy"}
            </p>

            {/* Feature Highlights Badges */}
            <div className="w-full space-y-1.5 sm:space-y-2 xl:space-y-3.5 mb-3 sm:mb-3.5 xl:mb-8">
              {/* Highlight 1 */}
              <div className="flex items-center gap-1.5 sm:gap-2 xl:gap-3 min-w-0">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-10 xl:h-10 rounded-full bg-[#dce7d9] border border-[#c3d6bf] flex items-center justify-center flex-shrink-0 text-[#134633]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#134633" strokeWidth="2" className="w-3 h-3 sm:w-3.5 sm:h-3.5 xl:w-5 xl:h-5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="text-[9.5px] sm:text-xs md:text-sm xl:text-base font-semibold text-[#1a3328] leading-tight truncate">
                  {clinicData.doctorExperienceYears} Years of Experience
                </span>
              </div>

              {/* Highlight 2 */}
              <div className="flex items-center gap-1.5 sm:gap-2 xl:gap-3 min-w-0">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-10 xl:h-10 rounded-full bg-[#dce7d9] border border-[#c3d6bf] flex items-center justify-center flex-shrink-0 text-[#134633]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#134633" strokeWidth="2" className="w-3 h-3 sm:w-3.5 sm:h-3.5 xl:w-5 xl:h-5">
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0 5.4 5.4 0 0 0 0 7.65l.77.78L12 20.67l7.65-7.66.77-.78a5.4 5.4 0 0 0 0-7.65z" />
                  </svg>
                </div>
                <span className="text-[9.5px] sm:text-xs md:text-sm xl:text-base font-semibold text-[#1a3328] leading-tight truncate">
                  Personalized &amp; Holistic Treatment
                </span>
              </div>

              {/* Highlight 3 */}
              <div className="flex items-center gap-1.5 sm:gap-2 xl:gap-3 min-w-0">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-10 xl:h-10 rounded-full bg-[#dce7d9] border border-[#c3d6bf] flex items-center justify-center flex-shrink-0 text-[#134633]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#134633" strokeWidth="2" className="w-3 h-3 sm:w-3.5 sm:h-3.5 xl:w-5 xl:h-5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span className="text-[9.5px] sm:text-xs md:text-sm xl:text-base font-semibold text-[#1a3328] leading-tight truncate">
                  Patient-Centered Care
                </span>
              </div>
            </div>

            {/* Single Primary CTA Button */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 xl:gap-2 bg-[#134633] hover:bg-[#0b2e21] text-white px-3.5 sm:px-4 xl:px-8 py-2 sm:py-2.5 xl:py-4 rounded-lg xl:rounded-xl text-[11px] sm:text-xs md:text-sm xl:text-base font-semibold shadow-button hover:shadow-button-hover transition-all duration-200 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 xl:w-5 xl:h-5 flex-shrink-0" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* ============================================================
              2. DOCTOR PORTRAIT: Centered on Desktop, Right Side on Mobile
              ============================================================ */}
          <div className="col-span-6 sm:col-span-6 md:col-span-5 xl:col-span-4 flex justify-center sm:justify-end xl:justify-center items-end relative self-end min-w-0">
            {/* Sage Backdrop Circle */}
            <div className="absolute w-[170px] h-[170px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] xl:w-[380px] xl:h-[380px] rounded-full bg-[#dbe5d4] left-1/2 -translate-x-1/2 bottom-0 sm:bottom-1 xl:bottom-0 z-0 pointer-events-none" />

            {/* Doctor Portrait Image */}
            <div className="relative z-10 w-full max-w-[210px] sm:max-w-[280px] md:max-w-[340px] xl:max-w-[420px] text-center -mb-2.5 sm:-mb-4 md:-mb-5 xl:mb-0 flex justify-center protected-media select-none">
              <Image
                src="/images/hero_doctor.jpg"
                alt="Dr. Pragati Khobragade - Perfect Health Center"
                width={480}
                height={580}
                priority
                className="w-full h-auto object-cover object-top mix-blend-multiply origin-bottom transform scale-[1.12] sm:scale-[1.14] md:scale-[1.16] xl:scale-[1.30] pointer-events-none select-none"
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 340px, 580px"
                draggable={false}
              />
              <div className="absolute inset-0 z-20 pointer-events-auto bg-transparent select-none" aria-hidden="true" />
            </div>

            {/* Matrix Dot Grid Accent */}
            <div className="absolute bottom-2 -right-1 sm:right-0 xl:bottom-4 xl:right-2 grid grid-cols-4 xl:grid-cols-6 gap-1 xl:gap-2.5 opacity-50 xl:opacity-55 z-0 pointer-events-none">
              {Array.from({ length: 24 }).map((_, i) => (
                <span
                  key={i}
                  className="w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] xl:w-[5px] xl:h-[5px] rounded-full bg-[#8ba380] inline-block"
                />
              ))}
            </div>
          </div>

          {/* ============================================================
              3. QUOTE & REMEDIES: Bottom Row Card on Mobile, 3rd Col on Desktop
              ============================================================ */}
          <div className="col-span-12 xl:col-span-4 bg-[#ebf2e8] xl:bg-transparent rounded-2xl sm:rounded-3xl xl:rounded-none p-3.5 sm:p-5 md:p-6 lg:p-7 xl:p-0 xl:pl-6 border border-[#d5e3d1] xl:border-0 flex xl:flex-col items-center xl:items-start justify-between xl:justify-start gap-3 sm:gap-6 md:gap-8 xl:gap-0 shadow-subtle xl:shadow-none relative z-20 overflow-hidden xl:overflow-visible xl:h-full xl:min-h-[520px] xl:self-end">
            {/* Quote */}
            <div className="flex-1 xl:flex-initial min-w-0 pr-2 sm:pr-4 xl:pr-0 xl:max-w-xs xl:pt-4 xl:z-10">
              <div className="font-serif text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-[#557945] leading-none mb-1">
                &ldquo;
              </div>
              <p className="font-sans text-[11px] sm:text-sm md:text-base lg:text-lg font-medium text-[#1a3328] leading-snug max-w-lg">
                Healing the body, mind and soul with care you can trust.
              </p>
            </div>

            {/* Remedies Illustration */}
            <div className="w-20 sm:w-40 md:w-56 lg:w-64 xl:w-[480px] xl:absolute xl:bottom-0 xl:right-0 xl:translate-x-[15%] flex-shrink-0 pointer-events-none z-0">
              <Image
                src="/images/remedies_right_side.png"
                alt="Homeopathic Remedies & Natural Herbs - Perfect Health Center"
                width={800}
                height={800}
                className="w-full h-auto object-contain mix-blend-multiply select-none pointer-events-none"
                sizes="(max-width: 640px) 90px, (max-width: 1024px) 240px, 480px"
                draggable={false}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
