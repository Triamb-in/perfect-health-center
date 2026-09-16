import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

interface SpecialtiesBannerProps {
  className?: string;
}

const HIGHLIGHTED_CONDITIONS = [
  "Renal Stones",
  "Asthma",
  "Fungal Skin Infections & Ringworm",
  "Piles",
  "Fissure & Fistula",
  "Migraine",
  "Hair Fall",
  "All Types of Skin Conditions",
];

export function SpecialtiesBanner({ className = "" }: SpecialtiesBannerProps) {
  return (
    <section
      aria-label="Clinical Specializations and Key Conditions"
      className={`relative z-20 bg-[#103b2b] text-white border-y border-[#1c553f] shadow-md py-4 sm:py-5 overflow-hidden ${className}`}
    >
      {/* Subtle background ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#a3d9b1] via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
          
          {/* Primary Specialization Label */}
          <div className="flex items-center gap-2.5 flex-shrink-0 bg-white/10 hover:bg-white/15 transition-colors border border-white/20 px-3.5 py-1.5 rounded-full shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#8ae0a8] animate-pulse" aria-hidden="true" />
            <Sparkles className="w-4 h-4 text-[#a3d9b1] flex-shrink-0" />
            <span className="text-xs sm:text-sm font-bold tracking-wide text-white uppercase sm:normal-case sm:font-semibold">
              Specialized in All Types of Skin Conditions
            </span>
          </div>

          {/* Condition Tags - Responsive Wrapping & Interactive Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-1.5 sm:gap-2">
            {HIGHLIGHTED_CONDITIONS.map((condition, idx) => (
              <Link
                key={idx}
                href="#specialties"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-white/90 bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#8ae0a8]/60 px-2.5 sm:px-3 py-1 rounded-lg transition-all duration-200 hover:text-white"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#8ae0a8] opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                <span>{condition}</span>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
