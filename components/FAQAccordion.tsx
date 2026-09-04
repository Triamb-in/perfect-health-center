"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/types";

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full space-y-4">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-primary-subtle/30 border-primary-light/40 shadow-subtle"
                : "bg-white border-primary-subtle hover:border-primary-light/30"
            }`}
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-semibold text-primary-dark text-base sm:text-lg focus:outline-none"
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-primary-main flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-primary-dark" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-text-body leading-relaxed border-t border-primary-subtle/50">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
