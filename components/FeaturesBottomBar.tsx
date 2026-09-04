import React from "react";
import { Leaf, ShieldCheck, Users, HeartHandshake } from "lucide-react";
import { PillarItem } from "@/types";

interface FeaturesBottomBarProps {
  pillars: PillarItem[];
}

export function FeaturesBottomBar({ pillars }: FeaturesBottomBarProps) {
  const renderIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Leaf className="w-6 h-6 text-white" />;
      case 1:
        return <ShieldCheck className="w-6 h-6 text-white" />;
      case 2:
        return <Users className="w-6 h-6 text-white" />;
      default:
        return <HeartHandshake className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="bg-primary-dark text-white py-8 sm:py-10 lg:py-12 border-t border-primary-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white border border-white/15">
                {renderIcon(idx)}
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-white mb-1">
                  {pillar.title}
                </h4>
                <p className="text-xs text-white/75 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
