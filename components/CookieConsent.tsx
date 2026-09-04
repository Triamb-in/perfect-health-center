"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, X } from "lucide-react";

const CONSENT_STORAGE_KEY = "phc_cookie_consent";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already made a decision
    try {
      const savedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (!savedConsent) {
        // Small delay to prevent layout interference and allow page to paint LCP first
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // If localStorage is blocked, do nothing silently
    }
  }, []);

  const handleConsent = (choice: "accepted" | "rejected") => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, choice);
      // Also set a lightweight cookie with 1-year expiry
      document.cookie = `${CONSENT_STORAGE_KEY}=${choice}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {
      // Ignore storage errors
    }
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      aria-label="Cookie and privacy preferences"
      role="region"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-5 sm:max-w-md z-[80] animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-auto"
    >
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-primary-subtle shadow-card text-text-dark">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary-subtle text-primary-dark flex items-center justify-center flex-shrink-0 mt-0.5">
            <Cookie className="w-5 h-5 text-primary-main" />
          </div>

          <div className="flex-1 pr-2">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="font-serif font-bold text-sm text-primary-dark">
                Cookie &amp; Privacy Notice
              </span>
              <span className="inline-flex items-center gap-0.5 text-[10px] uppercase font-semibold tracking-wider text-primary-main bg-primary-subtle/60 px-1.5 py-0.5 rounded">
                <ShieldCheck className="w-3 h-3" />
                <span>DPDP 2023</span>
              </span>
            </div>
            <p className="text-xs text-text-body leading-relaxed">
              We use essential cookies to maintain secure site functionality and manage appointment requests. We do not use third-party advertising or cross-site tracking cookies. Read our{" "}
              <Link
                href="/cookie-policy"
                className="text-primary-main font-semibold underline hover:text-primary-dark transition-colors"
              >
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy-policy"
                className="text-primary-main font-semibold underline hover:text-primary-dark transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <button
            onClick={() => handleConsent("rejected")}
            className="text-text-muted hover:text-primary-dark p-1 rounded-lg hover:bg-primary-subtle/50 transition-colors flex-shrink-0"
            aria-label="Close and reject non-essential cookies"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-4 pt-3 border-t border-primary-subtle/60 flex items-center justify-end gap-2.5">
          <button
            onClick={() => handleConsent("rejected")}
            type="button"
            className="px-3.5 py-2 rounded-xl text-xs font-semibold text-text-muted hover:text-primary-dark bg-[#fafaf7] hover:bg-primary-subtle/40 border border-primary-subtle transition-all"
          >
            Reject non-essential
          </button>
          <button
            onClick={() => handleConsent("accepted")}
            type="button"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-primary-dark hover:bg-primary-hover shadow-subtle transition-all"
          >
            Accept
          </button>
        </div>
      </div>
    </aside>
  );
}
