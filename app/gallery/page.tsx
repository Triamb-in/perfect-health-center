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
};

export const revalidate = 0;

export default async function GalleryPage() {
  const clinicData = await getClinicData();

  return (
    <div className="pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-32 bg-[#fafaf7] min-h-screen">
      <GalleryPageContent galleryItems={clinicData.gallery} />
    </div>
  );
}
