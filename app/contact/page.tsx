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
};

export default async function ContactPage() {
  const clinicData = await getClinicData();

  return (
    <div className="pt-24 bg-white">
      <ContactSection clinicData={clinicData} isPage={true} />
    </div>
  );
}
