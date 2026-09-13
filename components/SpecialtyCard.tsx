import React from "react";
import Link from "next/link";
import { Specialty } from "@/types";
import {
  Sparkles,
  Brain,
  ShieldCheck,
  Layers,
  HeartPulse,
  Droplets,
  Wind,
  Pill,
  Stethoscope,
  Baby,
  Activity,
  LucideIcon,
} from "lucide-react";

interface SpecialtyCardProps {
  specialty: Specialty;
}

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Brain,
  ShieldCheck,
  Layers,
  HeartPulse,
  Droplets,
  Wind,
  Pill,
  Stethoscope,
  Baby,
  Activity,
};

export function SpecialtyCard({ specialty }: SpecialtyCardProps) {
  const IconComponent = iconMap[specialty.iconName] || Sparkles;

  return (
    <div className="group bg-white rounded-2xl p-5 sm:p-6 lg:p-7 border border-primary-subtle shadow-subtle hover:shadow-floating transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between">
      <div>
        <div className="w-16 h-16 rounded-2xl bg-primary-subtle text-primary-dark flex items-center justify-center mb-5 group-hover:bg-primary-dark group-hover:text-white transition-colors duration-300">
          <IconComponent className="w-8 h-8" strokeWidth={1.8} />
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
          aria-label={`Explore ${specialty.title} treatments and conditions`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-main hover:text-primary-dark group-hover:translate-x-1 transition-transform"
        >
          <span>Explore {specialty.title}</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
