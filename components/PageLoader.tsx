"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Minimum time the loader is visible so the exit animation has something to fade from.
// Without this, if readyState === 'complete' on mount (cached pages), the transition
// fires before the first paint, making the loader appear "stuck" at opacity-0.
const MIN_VISIBLE_MS = 300;
const MAX_FALLBACK_TIMEOUT_MS = 4000;
const EXIT_ANIMATION_DURATION_MS = 750;

export function PageLoader() {
  const [status, setStatus] = useState<"loading" | "exiting" | "destroyed">("loading");

  useEffect(() => {
    let isDone = false;
    let minVisibleTimer: NodeJS.Timeout | null = null;
    let fallbackTimer: NodeJS.Timeout | null = null;
    let exitTimer: NodeJS.Timeout | null = null;

    const startExit = () => {
      if (isDone) return;
      isDone = true;
      if (fallbackTimer) clearTimeout(fallbackTimer);
      if (minVisibleTimer) clearTimeout(minVisibleTimer);

      setStatus("exiting");
      exitTimer = setTimeout(() => {
        setStatus("destroyed");
      }, EXIT_ANIMATION_DURATION_MS);
    };

    // Ensure the loader is visible for at least MIN_VISIBLE_MS before exiting,
    // so the CSS transition has a painted baseline to animate from.
    const scheduleExit = () => {
      minVisibleTimer = setTimeout(startExit, MIN_VISIBLE_MS);
    };

    // Resource readiness check: listen for window 'load' (images, fonts, stylesheets).
    // On cached/fast pages readyState is already 'complete' on mount — schedule exit
    // after the minimum visible time so the animation plays correctly.
    if (document.readyState === "complete") {
      scheduleExit();
    } else {
      window.addEventListener("load", scheduleExit, { once: true });
      fallbackTimer = setTimeout(scheduleExit, MAX_FALLBACK_TIMEOUT_MS);
    }

    return () => {
      window.removeEventListener("load", scheduleExit);
      if (minVisibleTimer) clearTimeout(minVisibleTimer);
      if (fallbackTimer) clearTimeout(fallbackTimer);
      if (exitTimer) clearTimeout(exitTimer);
    };
  }, []);

  if (status === "destroyed") {
    return null;
  }

  const isExiting = status === "exiting";

  return (
    <div
      className={`page-loader-overlay fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center pointer-events-auto select-none ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={isExiting}
    >
      {/* Centered Circular Logo Wrapper with Upward Slide Exit Animation */}
      <div
        className={`page-loader-circle relative flex flex-col items-center justify-center will-change-transform ${
          isExiting ? "-translate-y-[120vh] scale-95 opacity-90" : "translate-y-0 scale-100 opacity-100"
        }`}
      >
        {/* Circular Logo Area with Rotating Subtle Arc */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
          {/* Rotating Subtle Arc (Pure CSS Animation, Decorative) */}
          <svg
            className="absolute inset-0 w-full h-full animate-loader-spin"
            viewBox="0 0 120 120"
            aria-hidden="true"
          >
            {/* Soft background guide ring */}
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="#e8f0e6"
              strokeWidth="2.5"
            />
            {/* Active primary pulsing arc */}
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="#245742"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="80 240"
            />
          </svg>

          {/* Central Logo Container */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white shadow-subtle p-2">
            <Image
              src="/logo.png"
              alt="Perfect Health Center Logo"
              width={80}
              height={80}
              priority
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Small Uppercase Tracked-Out Gray Loading Text */}
        <p
          role="status"
          aria-live="polite"
          className={`page-loader-text mt-6 text-[11px] sm:text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase transition-all duration-200 ${
            isExiting ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          }`}
        >
          LOADING...
        </p>
      </div>
    </div>
  );
}
