"use client";

import React, { useEffect, useState } from "react";

export function MediaProtectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const showNotice = (msg: string) => {
      setToastMessage(msg);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setToastMessage(null);
      }, 2400);
    };

    // 1. Prevent context menu on protected images, videos, and certificates
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isProtected =
        target.tagName === "IMG" ||
        target.tagName === "VIDEO" ||
        target.closest(".protected-media") !== null ||
        target.closest("[data-protected-media]") !== null ||
        target.closest("#credentials") !== null;

      if (isProtected) {
        e.preventDefault();
        showNotice("🔒 Protected Media — Copying is disabled to protect clinical records");
      }
    };

    // 2. Prevent image & media dragging
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (
        target.tagName === "IMG" ||
        target.tagName === "VIDEO" ||
        target.closest(".protected-media") !== null
      ) {
        e.preventDefault();
      }
    };

    // 3. Prevent Ctrl+S / Cmd+S save shortcuts when on site
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        const activeCert = document.querySelector("[data-certificate-lightbox]");
        if (activeCert) {
          e.preventDefault();
          showNotice("🔒 Direct saving of official medical credentials is restricted");
        }
      }
    };

    document.addEventListener("contextmenu", handleContextMenu, { capture: true });
    document.addEventListener("dragstart", handleDragStart, { capture: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, { capture: true });
      document.removeEventListener("dragstart", handleDragStart, { capture: true });
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {children}

      {/* Floating Notice Toast */}
      {toastMessage && (
        <div
          role="alert"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] bg-[#134633]/95 backdrop-blur-md text-white px-4 py-2.5 rounded-full shadow-floating border border-white/20 text-xs font-semibold flex items-center gap-2 animate-fadeIn transition-all"
        >
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
}
