import { Metadata } from "next";
import { getClinicData } from "@/lib/sanity/getContent";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Perfect Health Center | Diva East, Thane",
  },
  description:
    "Book an appointment or visit Dr. Pragati Khobragade & Dr. Vijay Uplekar at Perfect Health Center in Mumra Devi Colony, Diva East, Thane. Call +91 92734 31261 or WhatsApp.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Perfect Health Center | Diva East, Thane",
    description:
      "Book an appointment or visit Dr. Pragati Khobragade & Dr. Vijay Uplekar at Perfect Health Center in Mumra Devi Colony, Diva East, Thane. Call +91 92734 31261 or WhatsApp.",
    url: "https://perfecthealthcenter.in/contact",
    siteName: "Perfect Health Center",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Perfect Health Center Diva East",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Perfect Health Center | Diva East, Thane",
    description:
      "Book an appointment or visit Dr. Pragati Khobragade & Dr. Vijay Uplekar in Diva East, Thane.",
    images: ["/images/og-image.jpg"],
  },
};

export default async function ContactPage() {
  const clinicData = await getClinicData();

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Perfect Health Center",
    description:
      "Clinic appointment scheduling, contact phone numbers, clinic address, and Google Maps directions for Perfect Health Center in Diva East, Thane.",
    url: "https://perfecthealthcenter.in/contact",
    mainEntity: {
      "@type": "MedicalBusiness",
      name: clinicData.clinicName,
      telephone: clinicData.contact.phoneFormatted,
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
    },
  };

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
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: "https://perfecthealthcenter.in/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="pt-24 bg-white">
        <ContactSection clinicData={clinicData} isPage={true} />
      </div>
    </>
  );
}
