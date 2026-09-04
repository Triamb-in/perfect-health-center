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
      style={{ overflowX: 'hidden' }}
    >
      {/* Top-Left Green Leaves Overlay - Only on desktop (xl+) where there is wide side margin */}
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

        {/* ============================================================
            MOBILE & TABLET VIEW (< xl / < 1280px): 
            Top 2-Col Side-by-Side (Text + Doctor) + Bottom Full-Width Card
            ============================================================ */}
        <div className="xl:hidden flex flex-col gap-2.5 sm:gap-4 md:gap-5">

          {/* Top 2-Column Row: Left Copy & Right Doctor Portrait */}
          <div className="grid grid-cols-12 gap-2 sm:gap-4 md:gap-6 items-end relative">

            {/* Left Column: Tagline, Name, Highlights, CTA */}
            <div className="col-span-6 sm:col-span-6 md:col-span-7 flex flex-col items-start z-20 pt-1 sm:pt-2 pl-1 sm:pl-3 pb-1 min-w-0">
              {/* Tagline */}
              <div className="inline-flex items-center gap-1 text-[10px] sm:text-xs md:text-sm font-semibold text-[#134633] mb-1">
                <span>Compassionate Care, Naturally</span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#134633"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>

              {/* Doctor Name - Fluid responsive heading */}
              <h1 className="font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#134633] leading-[1.12] mb-1 tracking-tight">
                {clinicData.doctorName}
              </h1>

              {/* Sub-heading */}
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base font-medium text-[#556b60] mb-2 sm:mb-2.5 leading-snug">
                Skin Care &amp; Asthma Specialist | Homeopathy
              </p>

              {/* Feature Highlights Badges */}
              <div className="w-full space-y-1.5 sm:space-y-2 mb-3 sm:mb-3.5">
                {/* Highlight 1 */}
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-[#dce7d9] border border-[#c3d6bf] flex items-center justify-center flex-shrink-0 text-[#134633]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#134633" strokeWidth="2" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <span className="text-[9.5px] sm:text-xs md:text-sm font-semibold text-[#1a3328] leading-tight truncate">
                    {clinicData.doctorExperienceYears} Years of Experience
                  </span>
                </div>

                {/* Highlight 2 */}
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-[#dce7d9] border border-[#c3d6bf] flex items-center justify-center flex-shrink-0 text-[#134633]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#134633" strokeWidth="2" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0 5.4 5.4 0 0 0 0 7.65l.77.78L12 20.67l7.65-7.66.77-.78a5.4 5.4 0 0 0 0-7.65z" />
                    </svg>
                  </div>
                  <span className="text-[9.5px] sm:text-xs md:text-sm font-semibold text-[#1a3328] leading-tight truncate">
                    Personalized Holistic Treatment
                  </span>
                </div>

                {/* Highlight 3 */}
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-[#dce7d9] border border-[#c3d6bf] flex items-center justify-center flex-shrink-0 text-[#134633]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#134633" strokeWidth="2" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <span className="text-[9.5px] sm:text-xs md:text-sm font-semibold text-[#1a3328] leading-tight truncate">
                    Patient-Centered Care
                  </span>
                </div>
              </div>

              {/* Book Appointment CTA Button */}
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 bg-[#134633] hover:bg-[#0b2e21] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-[11px] sm:text-xs md:text-sm font-semibold shadow-button hover:shadow-button-hover transition-all duration-200 whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Right Column: Doctor Portrait + Sage Backdrop Circle */}
            <div className="col-span-6 sm:col-span-6 md:col-span-5 flex justify-center sm:justify-end items-end relative self-end min-w-0">
              {/* Sage Backdrop Circle - Centered behind doctor */}
              <div className="absolute w-[170px] h-[170px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] rounded-full bg-[#dbe5d4] left-1/2 -translate-x-1/2 bottom-0 sm:bottom-1 z-0 pointer-events-none" />

              {/* Doctor Portrait Image - Flush to bottom card with NO gap */}
              <div className="relative z-10 w-full max-w-[210px] sm:max-w-[280px] md:max-w-[340px] text-center -mb-2.5 sm:-mb-4 md:-mb-5 flex justify-center protected-media select-none">
                <Image
                  src="/images/hero_doctor.jpg"
                  alt="Dr. Pragati Khobragade - Perfect Health Center"
                  width={480}
                  height={580}
                  priority
                  className="w-full h-auto object-cover object-top mix-blend-multiply origin-bottom transform scale-[1.12] sm:scale-[1.14] md:scale-[1.16] pointer-events-none select-none"
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 340px, 480px"
                  draggable={false}
                />
                <div className="absolute inset-0 z-20 pointer-events-auto bg-transparent select-none" aria-hidden="true" />
              </div>

              {/* Matrix Dot Grid Decor Accent */}
              <div className="absolute bottom-2 -right-1 sm:right-0 grid grid-cols-4 gap-1 opacity-50 z-0 pointer-events-none">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] rounded-full bg-[#8ba380] inline-block"
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Row Card: Quote & Remedies Illustration inside curved Card */}
          <div className="w-full bg-[#ebf2e8] rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 md:p-6 lg:p-7 border border-[#d5e3d1] flex items-center justify-between gap-3 sm:gap-6 md:gap-8 shadow-subtle relative z-20 overflow-hidden">
            {/* Quote Left */}
            <div className="flex-1 min-w-0 pr-2 sm:pr-4">
              <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#557945] leading-none mb-1">
                &ldquo;
              </div>
              <p className="font-sans text-[11px] sm:text-sm md:text-base lg:text-lg font-medium text-[#1a3328] leading-snug max-w-lg">
                Healing the body, mind and soul with care you can trust.
              </p>
            </div>

            {/* Remedies Right Image - Generously sized across phones and tablets */}
            <div className="w-20 sm:w-40 md:w-56 lg:w-64 flex-shrink-0 pointer-events-none">
              <Image
                src="/images/remedies_right_side.png"
                alt="Homeopathic Remedies & Natural Herbs - Perfect Health Center"
                width={500}
                height={500}
                className="w-full h-auto object-contain mix-blend-multiply select-none pointer-events-none"
                sizes="(max-width: 640px) 90px, (max-width: 1024px) 240px, 280px"
                draggable={false}
              />
            </div>
          </div>

        </div>

        {/* ============================================================
            DESKTOP VIEW (xl:grid / 1280px+): 
            Balanced 3-Column Layout (Text / Doctor / Quote + Remedies)
            ============================================================ */}
        <div className="hidden xl:grid grid-cols-12 gap-6 items-end">

          {/* LEFT COLUMN: Tagline, Heading, Highlights, CTA */}
          <div className="col-span-4 flex flex-col items-start z-20 min-w-0 self-center py-4">
            <div className="inline-flex items-center gap-1.5 text-base font-semibold text-[#134633] mb-3">
              <span>Compassionate Care, Naturally</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#134633"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 w-4 h-4"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>

            {/* Fluid heading that never collides with column width */}
            <h1 className="font-serif text-[3.2rem] font-bold text-[#134633] leading-[1.08] mb-2 tracking-tight">
              {clinicData.doctorName}
            </h1>

            <p className="text-lg font-medium text-[#556b60] mb-6">
              Skin Care &amp; Asthma Specialist | Homeopathy
            </p>

            <div className="w-full space-y-3.5 mb-8">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-[#dce7d9] border border-[#c3d6bf] flex items-center justify-center flex-shrink-0 text-[#134633]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#134633" strokeWidth="2" className="w-5 h-5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="text-base font-semibold text-[#1a3328] truncate">
                  {clinicData.doctorExperienceYears} Years of Experience
                </span>
              </div>

              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-[#dce7d9] border border-[#c3d6bf] flex items-center justify-center flex-shrink-0 text-[#134633]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#134633" strokeWidth="2" className="w-5 h-5">
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0 5.4 5.4 0 0 0 0 7.65l.77.78L12 20.67l7.65-7.66.77-.78a5.4 5.4 0 0 0 0-7.65z" />
                  </svg>
                </div>
                <span className="text-base font-semibold text-[#1a3328] truncate">
                  Personalized &amp; Holistic Treatment
                </span>
              </div>

              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-[#dce7d9] border border-[#c3d6bf] flex items-center justify-center flex-shrink-0 text-[#134633]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#134633" strokeWidth="2" className="w-5 h-5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span className="text-base font-semibold text-[#1a3328] truncate">
                  Patient-Centered Care
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[#134633] hover:bg-[#0b2e21] text-white px-6 py-3.5 rounded-lg text-base font-semibold shadow-button hover:shadow-button-hover transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <Calendar className="w-5 h-5 flex-shrink-0" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>

          {/* CENTER COLUMN: Sage Backdrop Circle + Doctor Portrait */}
          <div className="col-span-4 flex justify-center items-end relative self-end">
            <div className="absolute w-[400px] h-[400px] rounded-full bg-[#dbe5d4] bottom-6 left-1/2 -translate-x-1/2 z-0 pointer-events-none" />

            <div className="relative z-10 w-full max-w-[450px] mx-auto text-center protected-media select-none">
              <Image
                src="/images/hero_doctor.jpg"
                alt="Dr. Pragati Khobragade - Perfect Health Center"
                width={480}
                height={580}
                priority
                className="w-full h-auto object-cover object-top mix-blend-multiply origin-bottom transform scale-[1.18] pointer-events-none select-none block"
                sizes="(max-width: 1280px) 400px, 450px"
                draggable={false}
              />
              <div className="absolute inset-0 z-20 pointer-events-auto bg-transparent select-none" aria-hidden="true" />
            </div>

            <div className="absolute bottom-4 right-2 z-0 grid grid-cols-6 gap-2.5 opacity-55 pointer-events-none">
              {Array.from({ length: 24 }).map((_, i) => (
                <span
                  key={i}
                  className="w-[5px] h-[5px] rounded-full bg-[#8ba380] inline-block"
                />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Quote & Remedies Illustration */}
          <div className="col-span-4 relative flex flex-col justify-start h-full min-h-[520px] z-20 pl-6 self-end">
            {/* Quote sits at the top */}
            <div className="relative text-left max-w-xs pt-4 z-10">
              <div className="font-serif text-5xl text-[#557945] leading-none mb-1">&ldquo;</div>
              <p className="font-sans text-lg text-[#1a3328] font-medium leading-snug">
                Healing the body, mind and soul with care you can trust.
              </p>
            </div>

            {/* Large remedies image anchored to the bottom-right and shifted right by 15% */}
            <div className="absolute bottom-0 right-0 translate-x-[15%] w-[480px] pointer-events-none z-0">
              <Image
                src="/images/remedies_right_side.png"
                alt="Homeopathic Remedies & Natural Herbs - Perfect Health Center"
                width={800}
                height={800}
                className="w-full h-auto object-contain mix-blend-multiply select-none pointer-events-none"
                sizes="(max-width: 1280px) 420px, 480px"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
