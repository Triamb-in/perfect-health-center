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
    <div className="pt-24 sm:pt-28 pb-6 sm:pb-8 lg:pb-10 bg-[#fafaf7] overflow-x-clip">
      <GalleryPageContent galleryItems={clinicData.gallery} />
    </div>
  );
}
