import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Specialty } from "@/types";
import { SpecialtyCard } from "./SpecialtyCard";

interface SpecialtiesGridProps {
  specialties: Specialty[];
}

export function SpecialtiesGrid({ specialties }: SpecialtiesGridProps) {
  if (!specialties || specialties.length === 0) return null;

  // Show only top 3 specialties on the homepage as requested
  const topSpecialties = specialties.slice(0, 3);

  return (
    <section id="specialties" className="py-14 sm:py-20 lg:py-28 bg-[#fafaf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section matching reference with decorative arrows */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="section-tag">Clinical Expertise</div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-3 sm:mb-4 flex items-center justify-center gap-2 sm:gap-3">
            <span className="text-primary-light font-sans opacity-60" aria-hidden="true">→</span>
            <span>Our Specialties</span>
            <span className="text-primary-light font-sans opacity-60" aria-hidden="true">←</span>
          </h2>
          <p className="text-sm sm:text-base text-text-muted">
            Specialized in All Types of Skin Conditions — offering proven constitutional care for Renal Stones, Asthma, Fungal Skin Infections &amp; Ringworm, Piles, Fissure &amp; Fistula, Migraine, and Hair Fall.
          </p>
        </div>

        {/* Top 3 Grid Cards - Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {topSpecialties.map((specialty) => (
            <SpecialtyCard key={specialty.id} specialty={specialty} />
          ))}
        </div>

        {/* CTA to view full services list on /services */}
        <div className="mt-10 sm:mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 bg-primary-dark hover:bg-primary-hover text-white px-8 py-3.5 rounded-xl font-semibold text-sm shadow-button transition-all duration-200 group"
          >
            <span>View All Clinical Specialties &amp; Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-xs text-text-muted mt-2.5">
            Key Focus: Renal Stones • Asthma • Fungal Skin Infections &amp; Ringworm • Piles • Fissure &amp; Fistula • Migraine • Hair Fall • All Types of Skin Conditions
          </p>
        </div>

      </div>
    </section>
  );
}
