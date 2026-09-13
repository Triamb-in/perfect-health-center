import { Metadata } from "next";
import { getClinicData } from "@/lib/sanity/getContent";
import { ContactSection } from "@/components/ContactSection";
import { SchemaMarkup } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Contact & Appointments",
  description:
    "Book an appointment or visit Dr. Pragati Khobragade & Dr. Vijay Uplekar at Perfect Health Center, Diva East, Thane. Call +91 92734 31261 or WhatsApp.",
  alternates: {
    canonical: "/contact",
  },
};

export default async function ContactPage() {
  const clinicData = await getClinicData();

  return (
    <div className="pt-24 bg-white">
      <ContactSection clinicData={clinicData} isPage={true} />
    </div>
  );
}
