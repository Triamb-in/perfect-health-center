"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ClinicData } from "@/types";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BookingModal } from "./BookingModal";
import { WhatsAppButton } from "./WhatsAppButton";
import { CookieConsent } from "./CookieConsent";
import { MediaProtectionProvider } from "./MediaProtectionProvider";

interface ClientAppShellProps {
  clinicData: ClinicData;
  children: React.ReactNode;
}

export function ClientAppShell({ clinicData, children }: ClientAppShellProps) {
  const pathname = usePathname();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // If inside Sanity Studio, render a dedicated clean full-screen canvas
  // without website navigation, footer, WhatsApp floating button, or right-click interception
  if (pathname?.startsWith("/studio")) {
    return (
      <div className="h-screen w-screen overflow-hidden m-0 p-0 fixed inset-0 z-[9999] bg-[#101112]">
        {children}
      </div>
    );
  }

  return (
    <MediaProtectionProvider>
      <Navbar
        clinicData={clinicData}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
      <main className="min-h-screen">{children}</main>
      <Footer clinicData={clinicData} />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
      <WhatsAppButton clinicData={clinicData} />
      <CookieConsent />
    </MediaProtectionProvider>
  );
}
