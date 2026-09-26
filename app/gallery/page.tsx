import type { Metadata } from "next";
import { getClinicData } from "@/lib/sanity/getContent";
import { GalleryPageContent } from "@/components/GalleryPageContent";

export const metadata: Metadata = {
  title: {
    absolute: "Clinic Gallery | Perfect Health Center – Diva East, Thane",
  },
  description:
    "Browse the full gallery of Perfect Health Center — our calm healing environment, modern dispensary, and documented clinical treatment outcomes under Dr. Pragati's homeopathic care in Diva East.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Clinic Gallery | Perfect Health Center – Diva East, Thane",
    description:
      "Browse the full gallery of Perfect Health Center — our calm healing environment, modern dispensary, and documented clinical treatment outcomes under Dr. Pragati's homeopathic care in Diva East.",
    url: "https://perfecthealthcenter.in/gallery",
    siteName: "Perfect Health Center",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clinic Gallery - Perfect Health Center Diva East",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinic Gallery | Perfect Health Center Diva East",
    description:
      "Healing environment, dispensary, and treatment outcomes at Perfect Health Center.",
    images: ["/images/og-image.jpg"],
  },
};

export const revalidate = 0;

export default async function GalleryPage() {
  const clinicData = await getClinicData();

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": ["CollectionPage", "ImageGallery"],
    name: "Clinic Gallery & Clinical Outcomes | Perfect Health Center",
    description:
      "Browse the gallery of Perfect Health Center in Diva East, Thane: clinical outcomes, modern homeopathic dispensary, and healing environment.",
    url: "https://perfecthealthcenter.in/gallery",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: clinicData.gallery.map((item, idx) => ({
        "@type": "ImageObject",
        position: idx + 1,
        name: item.title,
        description: item.subtitle,
        contentUrl: item.imageUrl,
      })),
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
        name: "Clinic Gallery",
        item: "https://perfecthealthcenter.in/gallery",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-32 bg-[#fafaf7] min-h-screen">
        <GalleryPageContent galleryItems={clinicData.gallery} />
      </div>
    </>
  );
}
