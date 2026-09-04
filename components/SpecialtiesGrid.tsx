import React from "react";
import { Specialty } from "@/types";
import { SpecialtyCard } from "./SpecialtyCard";

interface SpecialtiesGridProps {
  specialties: Specialty[];
}

export function SpecialtiesGrid({ specialties }: SpecialtiesGridProps) {
  return (
    <section id="specialties" className="py-14 sm:py-20 lg:py-28 bg-[#fafaf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section matching reference with decorative arrows */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="section-tag">Clinical Expertise</div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-3 sm:mb-4 flex items-center justify-center gap-2 sm:gap-3">
            <span className="text-primary-light font-sans opacity-60">→</span>
            <span>Our Specialties</span>
            <span className="text-primary-light font-sans opacity-60">←</span>
          </h2>
          <p className="text-sm sm:text-base text-text-muted">
            Holistic, personalized healthcare protocols tailored for chronic ailments, pediatric wellness, and primary family medicine.
          </p>
        </div>

        {/* 6 Grid Cards - Responsive Layout (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {specialties.map((specialty) => (
            <SpecialtyCard key={specialty.id} specialty={specialty} />
          ))}
        </div>

      </div>
    </section>
  );
}
