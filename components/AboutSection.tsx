import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { ClinicData } from "@/types";
import { getSignedMediaUrl } from "@/lib/mediaSecurity";

interface AboutSectionProps {
  clinicData: ClinicData;
}

export function AboutSection({ clinicData }: AboutSectionProps) {
  const doctorImageUrl = getSignedMediaUrl("doctor/about_doctor.png");

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 xl:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column: Image with Experience Badge */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-floating border-4 border-primary-subtle protected-media select-none">
              <Image
                src={doctorImageUrl}
                alt="Dr. Pragati Khobragade at Perfect Health Center"
                fill
                className="object-cover pointer-events-none select-none"
                sizes="(max-width: 768px) 100vw, 420px"
                draggable={false}
              />
              {/* Protective Overlay Shield */}
              <div
                className="absolute inset-0 z-10 pointer-events-auto bg-transparent select-none"
                aria-hidden="true"
              />
            </div>

            {/* Experience Floating Badge - Bounded securely inside card container */}
            <div className="absolute -bottom-4 sm:-bottom-6 right-2 sm:right-6 bg-primary-dark text-white p-3.5 sm:p-5 rounded-2xl shadow-floating border-2 border-white flex items-center gap-2.5 sm:gap-3.5 z-20">
              <span className="font-serif text-2xl sm:text-4xl font-bold text-[#a3d9b1]">
                {clinicData.doctorExperienceYears}
              </span>
              <span className="text-[11px] sm:text-sm font-medium leading-snug">
                Years of Healing
                <br />
                Excellence
              </span>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Values */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="section-tag">About Perfect Health Center</div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-dark mb-6 leading-tight">
              Dedicated to Gentle, Safe &amp; Root-Cause Healthcare
            </h2>

            <p className="text-base sm:text-lg text-text-body mb-6 leading-relaxed">
              At <strong>{clinicData.clinicName}</strong>, we believe true healing addresses the individual as a whole—mind, body, and vitality. Guided by {clinicData.doctorName}&apos;s extensive clinical expertise of over 20 years, our clinic in Diva East, Thane provides individualized homeopathic care combined with primary general healthcare oversight.
            </p>

            {/* Core Philosophy Card */}
            <div className="w-full bg-cream-100 p-6 sm:p-7 rounded-2xl border-l-4 border-primary-dark mb-8 shadow-subtle">
              <div className="font-serif font-bold text-lg text-primary-dark mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary-main" />
                <span>Our Core Philosophy</span>
              </div>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                We treat the patient, not just the isolated symptoms. Every remedy is selected following thorough constitutional case taking, considering physical constitution, emotional stressors, and lifestyle factors to support sustainable, natural recovery.
              </p>
            </div>

            {/* Two Value Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-primary-subtle/50 border border-primary-subtle">
                <ShieldCheck className="w-6 h-6 text-primary-main flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base text-primary-dark mb-1">
                    Gentle Formulations
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    Ultra-diluted natural remedies selected to support immune recovery with minimal risk of adverse side effects.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-primary-subtle/50 border border-primary-subtle">
                <CheckCircle2 className="w-6 h-6 text-primary-main flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base text-primary-dark mb-1">
                    Root-Cause Focus
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    Focusing on constitutional vitality and long-term moderation rather than temporary symptom suppression.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
