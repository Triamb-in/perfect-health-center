"use client";

import React, { useState } from "react";
import { ClinicData } from "@/types";

interface WhatsAppButtonProps {
  clinicData: ClinicData;
}

export function WhatsAppButton({ clinicData }: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Clean phone number for WhatsApp wa.me link
  const rawPhone = clinicData.contact.phone.replace(/[^0-9]/g, "");
  // Formatted greeting for Dr. Pragati
  const defaultMessage = encodeURIComponent(
    "Hello Dr. Pragati, I would like to inquire about a consultation / appointment at Perfect Health Center."
  );
  const whatsappUrl = `https://wa.me/${rawPhone}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 pointer-events-none">
      <div className="relative flex items-center justify-end">
        {/* Floating Tooltip Pill - Appears ONLY when specifically hovering over the circular WhatsApp icon */}
        <div
          className={`hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md text-text-dark px-4 py-2 rounded-full shadow-floating border border-primary-subtle transition-all duration-300 pointer-events-none absolute right-14 sm:right-16 top-1/2 -translate-y-1/2 whitespace-nowrap ${
            isHovered
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-3 scale-95"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold text-[#134633]">
            Chat with Dr. Pragati
          </span>
        </div>

        {/* Pulsing Floating Action Button - ONLY this element captures pointer events and hover */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Dr. Pragati on WhatsApp"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          className="pointer-events-auto group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
        >
          {/* Soft pulse glow behind button */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

          {/* WhatsApp SVG Icon */}
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 relative z-10 transition-transform duration-200 group-hover:rotate-6"
          >
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.676.15-.2.301-.777.98-1.028 1.256-.251.275-.477.301-.777.15-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.175.2-.301.3-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.235-.245-.589-.494-.509-.676-.519-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.11.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.23 1.377.198 1.896.12.578-.088 1.78-.727 2.031-1.429.251-.702.251-1.304.175-1.43-.075-.125-.276-.2-.577-.35z" />
            <path d="M12.004 2c-5.523 0-10 4.477-10 10 0 1.83.493 3.548 1.353 5.029L2 22l5.12-1.317A9.957 9.957 0 0 0 12.004 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.25c-1.61 0-3.116-.458-4.406-1.253l-.316-.194-3.267.841.874-3.18-.212-.328A8.207 8.207 0 0 1 3.754 12c0-4.549 3.701-8.25 8.25-8.25 4.549 0 8.25 3.701 8.25 8.25 0 4.549-3.701 8.25-8.25 8.25z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
