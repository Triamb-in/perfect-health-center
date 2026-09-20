import type { Metadata } from "next";
import { getClinicData } from "@/lib/sanity/getContent";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { SpecialtiesGrid } from "@/components/SpecialtiesGrid";
import { FeaturesBottomBar } from "@/components/FeaturesBottomBar";
import { CertificatesSection } from "@/components/CertificatesSection";
import { YouTubeSection } from "@/components/YouTubeSection";
import { GallerySection } from "@/components/GallerySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PatientInfo } from "@/components/PatientInfo";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: {
    absolute: "Homeopathy Clinic in Diva East | Perfect Health Center",
  },
  description:
    "Dr. Pragati Khobragade & Dr. Vijay Uplekar offer gentle constitutional homeopathy and primary healthcare in Diva East, Thane. Over 20 years clinical experience.",
  alternates: {
    canonical: "/",
  },
};

export const revalidate = 0;

export default async function HomePage() {
  const clinicData = await getClinicData();

  return (
    <>
      {/* 1. Hero Section */}
      <Hero clinicData={clinicData} />

      {/* 2. About Us Section */}
      <AboutSection clinicData={clinicData} />

      {/* 3. Specialties Section */}
      <SpecialtiesGrid specialties={clinicData.specialties} />

      {/* 4. 4-Pillar Features Bottom Bar */}
      <FeaturesBottomBar pillars={clinicData.pillars} />

      {/* 5. Certificates & Clinical Credentials Section */}
      <CertificatesSection certificates={clinicData.certificates} />

      {/* 6. Official YouTube Insights Section */}
      <YouTubeSection
        videos={clinicData.youtubeVideos}
        channelUrl={clinicData.contact.youtubeChannelUrl}
        channelName={clinicData.contact.youtubeChannelName}
      />

      {/* 7. Clinic Sanctuary Gallery */}
      <GallerySection galleryItems={clinicData.gallery} />

      {/* 8. Patient Stories & Testimonials Section */}
      <TestimonialsSection testimonials={clinicData.testimonials} />

      {/* 9. Patient Guide, Consultation Process, Timings & FAQs */}
      <PatientInfo clinicData={clinicData} />

      {/* 10. Contact Us, Location Map & Request Form */}
      <ContactSection clinicData={clinicData} />

      {/* 10. FAQPage Structured Data (Rendered only on Homepage where FAQs are physically visible) */}
      {clinicData.faqs && clinicData.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
      )}
    </>
  );
}
