"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Hard initial load timing
const INITIAL_MIN_VISIBLE_MS = 350; // Ensures clean paint baseline before exit animation
const INITIAL_MAX_TIMEOUT_MS = 1500; // Emergency failsafe timeout (never hang indefinitely)

// Client-side navigation timing (per spec: ~600-900ms duration)
const ROUTE_CHANGE_VISIBLE_MS = 650;

// Exit animation timing (matches CSS transitions in globals.css: 700ms)
const EXIT_ANIMATION_DURATION_MS = 700;

export function PageLoader() {
  const pathname = usePathname();
  const [status, setStatus] = useState<"loading" | "exiting" | "destroyed">("loading");

  // Track initial mount and active route
  const isFirstMount = useRef(true);
  const currentPathname = useRef(pathname);

  // Scoped timer references to prevent cross-cancellation
  const exitTimerRef = useRef<NodeJS.Timeout | null>(null);
  const routeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const initialTimersRef = useRef<{
    min: NodeJS.Timeout | null;
    max: NodeJS.Timeout | null;
  }>({
    min: null,
    max: null,
  });

  const runExit = () => {
    setStatus("exiting");
    if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    exitTimerRef.current = setTimeout(() => {
      setStatus("destroyed");
      exitTimerRef.current = null;
    }, EXIT_ANIMATION_DURATION_MS);
  };

  // 1. Initial Hard Load / Refresh Handler (runs ONCE on mount)
  useEffect(() => {
    let finished = false;
    const startTime = Date.now();

    const onComplete = () => {
      if (finished) return;
      finished = true;

      const elapsed = Date.now() - startTime;
      const delay = Math.max(0, INITIAL_MIN_VISIBLE_MS - elapsed);

      initialTimersRef.current.min = setTimeout(() => {
        runExit();
        isFirstMount.current = false;
      }, delay);
    };

    if (document.readyState === "complete") {
      onComplete();
    } else {
      window.addEventListener("load", onComplete, { once: true });
      document.addEventListener("DOMContentLoaded", onComplete, { once: true });
      initialTimersRef.current.max = setTimeout(onComplete, INITIAL_MAX_TIMEOUT_MS);
    }

    return () => {
      window.removeEventListener("load", onComplete);
      document.removeEventListener("DOMContentLoaded", onComplete);
      if (initialTimersRef.current.min) clearTimeout(initialTimersRef.current.min);
      if (initialTimersRef.current.max) clearTimeout(initialTimersRef.current.max);
    };
  }, []);

  // 2. Client-Side Navigation Handler (Route Changes)
  useEffect(() => {
    // Synchronize initial pathname
    if (isFirstMount.current) {
      currentPathname.current = pathname;
      return;
    }

    // Ignore if pathname is identical
    if (pathname === currentPathname.current) {
      return;
    }

    currentPathname.current = pathname;

    // Reset client-side route timers and show loader immediately
    if (routeTimerRef.current) clearTimeout(routeTimerRef.current);
    if (exitTimerRef.current) clearTimeout(exitTimerRef.current);

    setStatus("loading");

    routeTimerRef.current = setTimeout(() => {
      runExit();
      routeTimerRef.current = null;
    }, ROUTE_CHANGE_VISIBLE_MS);

    return () => {
      if (routeTimerRef.current) clearTimeout(routeTimerRef.current);
    };
  }, [pathname]);

  if (pathname?.startsWith("/studio") || status === "destroyed") {
    return null;
  }

  const isExiting = status === "exiting";

  return (
    <div
      className={`page-loader-overlay fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center select-none ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
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
