import React from "react";
import { ClinicData } from "@/types";

interface SchemaMarkupProps {
  clinicData: ClinicData;
  pageUrl?: string;
  pageName?: string;
}

export function SchemaMarkup({
  clinicData,
  pageUrl = "https://perfecthealthcenter.in",
  pageName = "Home",
}: SchemaMarkupProps) {
  // MedicalBusiness / LocalBusiness / Physician Schema
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Physician", "LocalBusiness"],
    "@id": `${pageUrl}#medicalbusiness`,
    name: clinicData.clinicName,
    alternateName: "Dr. Pragati Homeopathy & General Practice",
    description:
      "Perfect Health Center offers gentle, personalized constitutional homeopathic treatment and family general healthcare by Dr. Pragati Khobragade with over 20 years of clinical experience in Diva East, Thane.",
    url: pageUrl,
    telephone: clinicData.contact.phoneFormatted,
    email: clinicData.contact.email,
    priceRange: "₹₹",
    image: `${pageUrl}/images/hero_doctor.jpg`,
    medicalSpecialty: [
      "Homeopathic",
      "GeneralPractice",
      "Pediatric",
      "Dermatology",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: clinicData.address.street,
      addressLocality: clinicData.address.locality,
      addressRegion: clinicData.address.state,
      postalCode: clinicData.address.pincode,
      addressCountry: clinicData.address.country,
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
    sameAs: clinicData.contact.youtubeChannelUrl
      ? [clinicData.contact.youtubeChannelUrl]
      : [],
    employee: {
      "@type": "Person",
      name: clinicData.doctorName,
      jobTitle: "Consulting Homeopath & General Physician",
      description: clinicData.doctorBio,
      worksFor: {
        "@type": "MedicalBusiness",
        name: clinicData.clinicName,
      },
    },
  };

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: clinicData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://perfecthealthcenter.in",
      },
      ...(pageName !== "Home"
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: pageName,
              item: pageUrl,
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
