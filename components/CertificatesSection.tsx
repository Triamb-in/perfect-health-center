"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, ShieldCheck, ZoomIn, CheckCircle2 } from "lucide-react";
import { CertificateItem } from "@/types";
import { CertificateLightbox } from "./CertificateLightbox";

interface CertificatesSectionProps {
  certificates: CertificateItem[];
}

export function CertificatesSection({ certificates }: CertificatesSectionProps) {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  if (!certificates || certificates.length === 0) return null;

  return (
    <section id="credentials" className="py-14 sm:py-20 lg:py-28 bg-[#fafaf7] relative border-t border-primary-subtle/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="section-tag">
            <Award className="w-4 h-4 text-primary-main" />
            <span>Credentials &amp; Accreditations</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-3 sm:mb-4">
            Certificates of Excellence
          </h2>
          <p className="text-sm sm:text-base text-text-muted">
            Authorized state clinical registrations and advanced postgraduate certifications underpinning Dr. Pragati Khobragade&apos;s two decades of homeopathic healthcare.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group bg-white rounded-3xl overflow-hidden border border-primary-subtle shadow-subtle hover:shadow-floating cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Certificate Preview Image Box */}
                <div className="relative w-full aspect-[16/11] bg-[#f2f6f1] overflow-hidden border-b border-primary-subtle p-3 flex items-center justify-center protected-media select-none">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-white shadow-sm border border-[#e1eade] flex items-center justify-center">
                    <Image
                      src={cert.imageUrl}
                      alt={cert.altText}
                      fill
                      className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-105 pointer-events-none select-none"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      draggable={false}
                    />
                  </div>

                  {/* Verified Badge Pill */}
                  <div className="absolute top-4 left-4 z-10 bg-primary-dark/95 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-subtle border border-white/20">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#a3d9b1]" />
                    <span>{cert.year || "Verified"}</span>
                  </div>

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 z-20 bg-primary-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white gap-2 text-xs font-bold uppercase tracking-wider">
                    <ZoomIn className="w-5 h-5 text-[#a3d9b1]" />
                    <span>View Certificate</span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary-main block mb-1.5">
                    {cert.issuingAuthority}
                  </span>

                  <h3 className="font-serif font-bold text-lg text-primary-dark mb-2 group-hover:text-primary-main transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="px-6 pb-6 pt-2">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-primary-main group-hover:text-primary-dark">
                  <span>Inspect Official Credential</span>
                  <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <CertificateLightbox
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
