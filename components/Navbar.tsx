"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Menu, X } from "lucide-react";
import { ClinicData } from "@/types";

interface NavbarProps {
  clinicData: ClinicData;
  onOpenBooking: () => void;
}

export function Navbar({ clinicData, onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const pathname = usePathname();

  // Scroll detection for navbar background & section spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy when on homepage
      if (pathname === "/") {
        const sections = [
          "home",
          "about",
          "specialties",
          "credentials",
          "videos",
          "gallery",
          "patient-info",
          "contact",
        ];

        const scrollPosition = window.scrollY + 180;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Determine active state for each nav item
  const isItemActive = (path: string, sectionId: string) => {
    if (pathname === path && path !== "/") return true;
    if (pathname === "/" && activeSection === sectionId) return true;
    return false;
  };

  const navItems = [
    { label: "Home", href: "/", sectionId: "home" },
    { label: "About Us", href: "/about", sectionId: "about" },
    { label: "Specialties", href: "/services", sectionId: "specialties" },
    { label: "Gallery", href: "/#gallery", sectionId: "gallery" },
    { label: "Patient Info", href: "/#patient-info", sectionId: "patient-info" },
    { label: "Contact Us", href: "/contact", sectionId: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-card border-b border-primary-subtle py-2.5"
          : "bg-white/85 backdrop-blur-sm py-3 sm:py-3.5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-subtle border border-primary-light/20 flex items-center justify-center transition-transform group-hover:scale-105 flex-shrink-0">
            <svg
              viewBox="0 0 36 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-6 sm:h-6"
            >
              <path
                d="M18 2C9 12 3 22 18 38C33 22 27 12 18 2Z"
                stroke="#134633"
                strokeWidth="2.2"
                fill="none"
              />
              <path
                d="M18 9V32"
                stroke="#134633"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M18 16C13 13 8 16 7 21"
                stroke="#134633"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M18 23C23 20 28 23 29 28"
                stroke="#134633"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-serif font-bold text-sm sm:text-base md:text-lg lg:text-xl text-primary-dark tracking-tight leading-tight truncate">
              {clinicData.clinicName}
            </span>
            <span className="text-[8px] sm:text-[10px] md:text-xs font-semibold tracking-wider text-text-muted uppercase truncate">
              Homeopathy &amp; General Practice
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Menu (Active at lg/xl with whitespace-nowrap and fluid padding) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-primary-subtle/40 p-1.5 rounded-full border border-primary-subtle/60 backdrop-blur-sm flex-shrink-0">
          {navItems.map((item) => {
            const active = isItemActive(item.href, item.sectionId);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-2.5 xl:px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap ${
                  active
                    ? "bg-primary-dark text-white shadow-button transform scale-100"
                    : "text-text-body hover:text-primary-dark hover:bg-white/70"
                }`}
              >
                {active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a3d9b1] inline-block animate-pulse" />
                )}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Header CTA & Mobile/Tablet Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Mobile & Desktop Book Appointment Button in Header */}
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 bg-primary-dark hover:bg-primary-hover text-white px-2.5 sm:px-4 xl:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold shadow-button hover:shadow-button-hover transition-all duration-200 transform hover:-translate-y-0.5 flex-shrink-0"
            aria-label="Book an Appointment"
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="hidden sm:inline whitespace-nowrap">Book Appointment</span>
            <span className="inline sm:hidden whitespace-nowrap">Book</span>
          </button>

          {/* Mobile/Tablet Hamburger Button (Visible below lg / 1024px) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-md text-text-dark hover:text-primary-main hover:bg-primary-subtle focus:outline-none flex-shrink-0"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer (Full-width clean drawer for < lg) */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-primary-subtle px-4 pt-3 pb-5 shadow-floating animate-fadeIn max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex flex-col gap-1.5 max-w-lg mx-auto">
            {navItems.map((item) => {
              const active = isItemActive(item.href, item.sectionId);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm sm:text-base font-semibold flex items-center justify-between transition-all ${
                    active
                      ? "bg-primary-dark text-white shadow-subtle"
                      : "text-text-dark hover:bg-primary-subtle/60"
                  }`}
                >
                  <span>{item.label}</span>
                  {active && (
                    <span className="w-2 h-2 rounded-full bg-[#a3d9b1]" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
