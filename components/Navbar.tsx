"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Calendar, Menu, X } from "lucide-react";

interface NavbarProps {
  clinicData: {
    clinicName: string;
  };
  onOpenBooking: () => void;
}

interface NavItem {
  label: string;
  href: string;
  sectionId: "home" | "about" | "specialties" | "gallery" | "patient-info" | "contact" | "articles";
}

export function Navbar({ clinicData, onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const pathname = usePathname();

  const isManualScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // High-performance RAF throttled scroll detection
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));

          if (pathname === "/" && !isManualScrollRef.current) {
            const primarySections = [
              "home",
              "about",
              "specialties",
              "gallery",
              "articles",
              "patient-info",
              "contact",
            ];

            const scrollPosition = window.scrollY + 140;
            let currentSection = "";

            if (
              window.innerHeight + window.scrollY >=
              document.documentElement.scrollHeight - 60
            ) {
              currentSection = "contact";
            } else if (window.scrollY < 200) {
              currentSection = "home";
            } else {
              for (const id of primarySections) {
                const el = document.getElementById(id);
                if (el) {
                  const top = el.offsetTop - 90;
                  const bottom = top + el.offsetHeight;
                  if (scrollPosition >= top && scrollPosition < bottom) {
                    currentSection = id;
                    break;
                  }
                }
              }
            }

            // Only trigger state update if the section actually changed
            setActiveSection((prev) =>
              prev !== currentSection ? currentSection : prev
            );
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [pathname]);

  // Primary navigation clean page routes for SEO, with smooth-scroll section interception on homepage
  const navItems: NavItem[] = [
    { label: "Home", href: "/", sectionId: "home" },
    { label: "About Us", href: "/about", sectionId: "about" },
    { label: "Specialties", href: "/services", sectionId: "specialties" },
    { label: "Gallery", href: "/gallery", sectionId: "gallery" },
    { label: "Health Guides", href: "/articles", sectionId: "articles" },
    { label: "Contact Us", href: "/contact", sectionId: "contact" },
  ];

  // Determine active state for each nav item
  const isItemActive = (item: NavItem) => {
    if (pathname === "/gallery") return item.sectionId === "gallery";
    if (pathname === "/about") return item.sectionId === "about";
    if (pathname === "/services") return item.sectionId === "specialties";
    if (pathname === "/contact") return item.sectionId === "contact";
    if (pathname === "/articles" || pathname.startsWith("/articles/")) {
      return item.sectionId === "articles";
    }
    if (pathname === "/") {
      return activeSection === item.sectionId;
    }
    return false;
  };

  // Smooth, jitter-free in-page scrolling with exact header offset compensation
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    if (pathname === "/") {
      if (item.sectionId === "home") {
        e.preventDefault();
        isManualScrollRef.current = true;
        setActiveSection("home");
        window.scrollTo({ top: 0, behavior: "smooth" });

        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          isManualScrollRef.current = false;
        }, 750);
      } else {
        const el = document.getElementById(item.sectionId);
        if (el) {
          e.preventDefault();
          isManualScrollRef.current = true;
          setActiveSection(item.sectionId);

          const headerOffset = window.innerWidth >= 640 ? 80 : 64;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
          scrollTimeoutRef.current = setTimeout(() => {
            isManualScrollRef.current = false;
          }, 750);
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 h-16 sm:h-20 flex items-center transition-[background-color,border-color,box-shadow] duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-card border-b border-primary-subtle"
          : "bg-white/90 backdrop-blur-sm border-b border-primary-subtle/30"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              isManualScrollRef.current = true;
              setActiveSection("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
              if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
              scrollTimeoutRef.current = setTimeout(() => {
                isManualScrollRef.current = false;
              }, 750);
            }
          }}
          className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0 min-w-0"
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Perfect Health Center Logo"
              width={40}
              height={40}
              priority
              sizes="40px"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-serif font-bold text-sm sm:text-base md:text-lg lg:text-xl text-primary-dark tracking-tight leading-tight whitespace-nowrap">
              {clinicData.clinicName}
            </span>
            <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-wider text-text-muted uppercase whitespace-nowrap">
              Homeopathy &amp; General Practice
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Menu (Zero layout shift, buttery-smooth transition) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-primary-subtle/40 p-1.5 rounded-full border border-primary-subtle/60 backdrop-blur-sm flex-shrink-0">
          {navItems.map((item) => {
            const active = isItemActive(item);

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative px-3.5 xl:px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-[background-color,color,box-shadow] duration-200 ease-out flex items-center whitespace-nowrap cursor-pointer ${
                  active
                    ? "bg-primary-dark text-white shadow-button"
                    : "text-text-body hover:text-primary-dark hover:bg-white/70"
                }`}
              >
                {/* Fixed-slot indicator dot to eliminate any horizontal layout shifting */}
                <span
                  aria-hidden="true"
                  className={`w-1.5 h-1.5 rounded-full bg-[#a3d9b1] flex-shrink-0 transition-opacity duration-150 ${
                    active ? "opacity-100 mr-1.5" : "opacity-0 w-0 mr-0"
                  }`}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Header CTA & Mobile/Tablet Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Header Book Appointment Button */}
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 bg-primary-dark hover:bg-primary-hover text-white px-3 sm:px-4 xl:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-button hover:shadow-button-hover transition-[background-color,box-shadow,transform] duration-200 transform hover:-translate-y-0.5 flex-shrink-0 cursor-pointer"
            aria-label="Book an Appointment"
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="hidden sm:inline whitespace-nowrap">Book Appointment</span>
            <span className="inline sm:hidden whitespace-nowrap">Book</span>
          </button>

          {/* Mobile/Tablet Hamburger Button (Visible below lg / 1024px) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg text-primary-dark hover:text-primary-hover hover:bg-primary-subtle/70 focus:outline-none flex-shrink-0 cursor-pointer transition-colors duration-150"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer (Full-width clean drawer for < lg) */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-16 sm:top-20 left-0 right-0 bg-white border-b border-primary-subtle px-4 pt-3 pb-6 shadow-floating animate-fadeIn max-h-[calc(100vh-4rem)] overflow-y-auto z-50">
          <nav className="flex flex-col gap-1.5 max-w-lg mx-auto">
            {navItems.map((item) => {
              const active = isItemActive(item);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item);
                    setMobileOpen(false);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm sm:text-base font-semibold flex items-center justify-between transition-[background-color,color,box-shadow] duration-200 cursor-pointer ${
                    active
                      ? "bg-primary-dark text-white shadow-subtle"
                      : "text-text-dark hover:bg-primary-subtle/60"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    aria-hidden="true"
                    className={`w-2 h-2 rounded-full bg-[#a3d9b1] transition-opacity duration-150 ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Prominent Book Appointment CTA in Mobile Menu Drawer */}
            <div className="pt-3 mt-2 border-t border-stone-100">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenBooking();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary-dark hover:bg-primary-hover text-white py-3 rounded-xl text-sm font-semibold shadow-button transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
