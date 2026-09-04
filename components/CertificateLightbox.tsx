"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Award, ShieldCheck } from "lucide-react";
import { CertificateItem } from "@/types";

interface CertificateLightboxProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export function CertificateLightbox({
  certificate,
  onClose,
}: CertificateLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (certificate) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-4 animate-fadeIn select-none"
      onClick={onClose}
      data-certificate-lightbox="true"
    >
      <div
        className="relative max-w-3xl w-full max-h-[94vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-floating border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors shadow-subtle"
          aria-label="Close Certificate View"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="relative w-full h-[36vh] sm:h-[50vh] max-h-[480px] flex-shrink-0 bg-[#f2f6f1] p-2 sm:p-4 flex items-center justify-center protected-media">
          <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-sm border border-[#e1eade] flex items-center justify-center">
            <Image
              src={certificate.imageUrl}
              alt={certificate.altText}
              fill
              className="object-contain p-2 sm:p-3 pointer-events-none select-none"
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
              draggable={false}
            />

            {/* Transparent Security Overlay Shield */}
            <div
              className="absolute inset-0 z-20 bg-transparent select-none"
              onContextMenu={(e) => e.preventDefault()}
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto bg-white border-t border-primary-subtle">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2 text-primary-main text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-primary-dark" />
              <span>{certificate.issuingAuthority}</span>
              {certificate.year && (
                <span className="bg-primary-subtle text-primary-dark px-2.5 py-0.5 rounded-full text-[10px]">
                  {certificate.year}
                </span>
              )}
            </div>

            {/* Security watermark badge */}
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#245742] bg-[#eef5ed] px-2.5 py-1 rounded-md border border-[#cbe1ca]">
              🔒 Watermarked Verification Copy
            </span>
          </div>

          <h3 className="font-serif font-bold text-xl sm:text-2xl text-primary-dark mb-2">
            {certificate.title}
          </h3>

          <p className="text-xs sm:text-sm text-text-body leading-relaxed">
            {certificate.description}
          </p>
        </div>
      </div>
    </div>
  );
}
