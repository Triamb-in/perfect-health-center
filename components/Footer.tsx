import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Youtube, MapPin, Phone, Mail, Sparkles, Instagram } from "lucide-react";
import { ClinicData } from "@/types";

interface FooterProps {
  clinicData: ClinicData;
}

export function Footer({ clinicData }: FooterProps) {
  return (
    <footer className="bg-primary-dark text-white pt-12 sm:pt-16 pb-8 border-t border-primary-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-10 sm:mb-12">
          
          {/* Brand & Description */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Perfect Health Center Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-white">
                  {clinicData.clinicName}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#a3d9b1] font-semibold">
                  Homeopathy &amp; General Practice
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6">
              Providing compassionate, evidence-guided homeopathic remedies and general medical oversight to restore vitality and long-term wellbeing in Diva East, Thane.
            </p>

            {clinicData.contact.youtubeChannelUrl && (
              <a
                href={clinicData.contact.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#a3d9b1] hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4 text-red-400" />
                <span>YouTube: {clinicData.contact.youtubeChannelName}</span>
              </a>
            )}
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-bold text-base text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/75">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Dr. Pragati
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Specialties &amp; Care
                </Link>
              </li>
              <li>
                <Link href="/#credentials" className="hover:text-white transition-colors">
                  Certificates
                </Link>
              </li>
              <li>
                <Link href="/#videos" className="hover:text-white transition-colors">
                  Health Videos
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-white transition-colors">
                  Clinic Gallery
                </Link>
              </li>
              <li>
                <Link href="/#patient-info" className="hover:text-white transition-colors">
                  Patient Info &amp; FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialties */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-base text-white mb-4">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/75">
              <li>
                <Link href="/services#homeopathy" className="hover:text-white transition-colors">
                  Classical Homeopathy
                </Link>
              </li>
              <li>
                <Link href="/services#general-practice" className="hover:text-white transition-colors">
                  General Practice &amp; Primary Care
                </Link>
              </li>
              <li>
                <Link href="/services#womens-health" className="hover:text-white transition-colors">
                  Women&apos;s Health &amp; Hormonal Balance
                </Link>
              </li>
              <li>
                <Link href="/services#childrens-health" className="hover:text-white transition-colors">
                  Pediatric Homeopathy
                </Link>
              </li>
              <li>
                <Link href="/services#chronic-disease" className="hover:text-white transition-colors">
                  Chronic Disease Support
                </Link>
              </li>
              <li>
                <Link href="/services#lifestyle-disorders" className="hover:text-white transition-colors">
                  Lifestyle &amp; Stress Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinic Address & Hours */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-base text-white mb-4">
              Clinic Location
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#a3d9b1] flex-shrink-0 mt-0.5" />
                <span>{clinicData.address.fullFormatted}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#a3d9b1] flex-shrink-0" />
                <a href={`tel:${clinicData.contact.phone}`} className="hover:text-white">
                  {clinicData.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#a3d9b1] flex-shrink-0" />
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${clinicData.contact.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                  title="Compose email in Gmail"
                >
                  <span>{clinicData.contact.email}</span>
                  <span className="text-[10px] text-[#a3d9b1]">↗</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Engaging Triamb Badge, & Legal Links */}
        <div className="pt-8 mt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            &copy; {new Date().getFullYear()} {clinicData.clinicName}. All Rights Reserved.
          </p>

          {/* A digital experience by @triamb.in */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-white/50">{clinicData.developerCredit.text}</span>
            <a
              href={clinicData.developerCredit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#a3d9b1] hover:text-white bg-white/5 hover:bg-white/15 px-3 py-1 rounded-full border border-white/15 hover:border-[#a3d9b1]/40 shadow-subtle transition-all duration-200 group"
              title="Visit Triamb on Instagram (@triamb.in)"
            >
              <Instagram className="w-3.5 h-3.5 text-[#a3d9b1] group-hover:scale-110 transition-transform duration-200" />
              <span className="tracking-wide">{clinicData.developerCredit.handle}</span>
              <span className="text-[10px] opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>
          </div>

          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
