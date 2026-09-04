import React from "react";
import Link from "next/link";
import { Specialty } from "@/types";

interface SpecialtyCardProps {
  specialty: Specialty;
}

export function SpecialtyCard({ specialty }: SpecialtyCardProps) {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Pill":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
            <path d="M9 3h6v3H9z" />
            <path d="M6 7h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7z" />
            <path d="M12 11c-2 2-2 4 0 5s2-3 0-5z" fill="currentColor" opacity="0.2" />
            <path d="M12 10v6" />
            <path d="M10 13h4" />
          </svg>
        );
      case "Stethoscope":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
            <path d="M4.8 2h2.4v4a4.8 4.8 0 0 1-9.6 0V2h2.4" transform="translate(7 1)" />
            <path d="M12 11.8v3.2" />
            <circle cx="12" cy="17.5" r="2.5" />
          </svg>
        );
      case "HeartPulse":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
            <path d="M12 4C9 4 7 6.5 7 10c0 4.5 5 8.5 5 8.5s5-4 5-8.5c0-3.5-2-6-5-6z" />
            <path d="M12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
          </svg>
        );
      case "Baby":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
            <circle cx="12" cy="12" r="7" />
            <circle cx="9.5" cy="10.5" r="1" fill="currentColor" />
            <circle cx="14.5" cy="10.5" r="1" fill="currentColor" />
            <path d="M9.5 14c1 1.5 4 1.5 5 0" />
            <path d="M7 6c1-2 3-2 5-2s4 0 5 2" />
          </svg>
        );
      case "Activity":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
            <rect x="5" y="4" width="14" height="17" rx="2" />
            <path d="M9 2h6v4H9z" />
            <path d="M9 11h6" />
            <path d="M9 15h4" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
            <path d="M12 3c-3 4-7 8-7 12a7 7 0 0 0 14 0c0-4-4-8-7-12z" />
            <path d="M12 9c-1.5 2.5-3 4.5-3 6.5" />
          </svg>
        );
    }
  };

  return (
    <div className="group bg-white rounded-2xl p-5 sm:p-6 lg:p-7 border border-primary-subtle shadow-subtle hover:shadow-floating transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between">
      <div>
        <div className="w-16 h-16 rounded-2xl bg-primary-subtle text-primary-dark flex items-center justify-center mb-5 group-hover:bg-primary-dark group-hover:text-white transition-colors duration-300">
          {renderIcon(specialty.iconName)}
        </div>

        <h3 className="font-serif text-xl font-bold text-primary-dark mb-2.5">
          {specialty.title}
        </h3>

        <p className="text-sm text-text-muted leading-relaxed mb-4">
          {specialty.shortDesc}
        </p>

        {specialty.conditions && specialty.conditions.length > 0 && (
          <div className="space-y-1.5 mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary-main">
              Key Focus Areas:
            </span>
            <ul className="text-xs text-text-body space-y-1">
              {specialty.conditions.slice(0, 3).map((cond, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                  <span>{cond}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-primary-subtle/50">
        <Link
          href={`/services#${specialty.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-main hover:text-primary-dark group-hover:translate-x-1 transition-transform"
        >
          <span>Learn More &amp; Conditions</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
