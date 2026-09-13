"use client";

import React, { useState, useEffect } from "react";

interface ObfuscatedEmailProps {
  user: string;
  domain: string;
  className?: string;
  title?: string;
  showArrow?: boolean;
}

export function ObfuscatedEmail({
  user,
  domain,
  className = "",
  title = "Email clinic doctor",
  showArrow = false,
}: ObfuscatedEmailProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${user}@${domain}`;
  };

  // On static SSR (what crawlers and spam harvesters inspect), don't output the @ symbol
  if (!isClient) {
    return (
      <span className={className} title={title}>
        <span>{user}</span>
        <span className="sr-only"> at </span>
        <span aria-hidden="true">&#64;</span>
        <span>{domain}</span>
        {showArrow && <span className="text-[11px] opacity-70"> ↗</span>}
      </span>
    );
  }

  const fullEmail = `${user}@${domain}`;

  return (
    <a
      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${fullEmail}`}
      onClick={handleMailClick}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title={title}
    >
      <span>{fullEmail}</span>
      {showArrow && <span className="text-[11px] opacity-70"> ↗</span>}
    </a>
  );
}
