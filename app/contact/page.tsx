import { Metadata } from "next";
import { getClinicData } from "@/lib/sanity/getContent";
import { ContactSection } from "@/components/ContactSection";
import { SchemaMarkup } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Contact & Location — Perfect Health Center Diva East",
  description:
    "Book an appointment or visit Perfect Health Center in Mumra Devi Colony, Diva East, Thane. Phone: +91 92734 31261. Hours: Mon-Sat 10:30 AM - 10:00 PM.",
  alternates: {
    canonical: "/contact",
  },
};

export default async function ContactPage() {
  const clinicData = await getClinicData();

  return (
    <div className="pt-24 bg-white">
      <SchemaMarkup
        clinicData={clinicData}
        pageUrl="https://perfecthealthcenter.in/contact"
        pageName="Contact Us"
      />
      <ContactSection clinicData={clinicData} />
    </div>
  );
}
