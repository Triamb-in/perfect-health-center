import React from "react";
import { ClinicData, FAQItem } from "@/types";

interface SchemaMarkupProps {
  clinicData: ClinicData;
  pageUrl?: string;
  pageName?: string;
  includeFaq?: boolean;
}

export function SchemaMarkup({
  clinicData,
  pageUrl = "https://perfecthealthcenter.in",
  pageName = "Home",
  includeFaq = false,
}: SchemaMarkupProps) {
  const canonicalBase = "https://perfecthealthcenter.in";

  // Primary MedicalBusiness & LocalBusiness entity schema
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Physician", "LocalBusiness"],
    "@id": `${canonicalBase}/#medicalbusiness`,
    name: clinicData.clinicName,
    alternateName: "Dr. Pragati Homeopathy & General Practice",
    description:
      "Perfect Health Center provides individualized constitutional homeopathy and family general healthcare by Dr. Pragati Khobragade and Dr. Vijay Uplekar in Diva East, Thane, Maharashtra.",
    url: canonicalBase,
    telephone: clinicData.contact.phoneFormatted,
    priceRange: "₹₹",
    image: `${canonicalBase}/images/hero_doctor.png`,
    medicalSpecialty: [
      "Homeopathic",
      "GeneralPractice",
      "Pediatric",
      "Dermatology",
      "Respiratory",
      "Gastroenterology",
      "Urology",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: clinicData.address.street,
      addressLocality: clinicData.address.locality,
      addressRegion: clinicData.address.state,
      postalCode: clinicData.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.186461",
      longitude: "73.045805",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:30",
        closes: "22:00",
      },
    ],
    sameAs: [
      clinicData.contact.youtubeChannelUrl,
      clinicData.developerCredit?.url,
    ].filter(Boolean),
    employee: [
      {
        "@type": "Person",
        name: clinicData.doctorName,
        jobTitle: "Consulting Homeopath & General Physician",
        description: clinicData.doctorBio,
        worksFor: {
          "@type": "MedicalBusiness",
          name: clinicData.clinicName,
        },
      },
      {
        "@type": "Person",
        name: clinicData.contact.secondaryContactName || "Dr. Vijay Uplekar",
        jobTitle: "Consulting Physician",
        worksFor: {
          "@type": "MedicalBusiness",
          name: clinicData.clinicName,
        },
      },
    ],
  };

  // FAQPage Schema — ONLY emitted when includeFaq is true and FAQs exist
  const faqSchema =
    includeFaq && clinicData.faqs && clinicData.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: clinicData.faqs.map((faq: FAQItem) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  // BreadcrumbList Schema
  const breadcrumbSchema =
    pageName !== "Home"
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: canonicalBase,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: pageName,
              item: pageUrl,
            },
          ],
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalBusinessSchema),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      )}
    </>
  );
}
