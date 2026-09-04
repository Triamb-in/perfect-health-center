import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Heart, Sparkles, CheckCircle2, Calendar, Youtube } from "lucide-react";
import { getClinicData } from "@/lib/sanity/getContent";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { CertificatesSection } from "@/components/CertificatesSection";

export const metadata: Metadata = {
  title: "About Dr. Pragati Khobragade — Clinical Background & Philosophy",
  description:
    "Learn about Dr. Pragati Khobragade, her 20+ years of clinical experience in homeopathy, and the holistic healing philosophy at Perfect Health Center in Diva East, Thane.",
  alternates: {
    canonical: "/about",
  },
};

export default async function AboutPage() {
  const clinicData = await getClinicData();

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#fafaf7]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag">Practitioner Profile</div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
            About Dr. Pragati Khobragade
          </h1>
          <p className="text-lg text-primary-main font-medium">
            Skin Care &amp; Asthma Specialist | Homeopathy &amp; Primary General Practice
          </p>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-floating border-4 border-white">
              <Image
                src="/images/about_doctor.png"
                alt="Dr. Pragati Khobragade at Perfect Health Center"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 450px"
              />
            </div>

            <div className="absolute -bottom-6 -right-2 bg-primary-dark text-white p-5 rounded-2xl shadow-floating border-2 border-white flex items-center gap-3">
              <span className="font-serif text-3xl font-bold text-[#a3d9b1]">
                {clinicData.doctorExperienceYears}
              </span>
              <span className="text-xs font-medium leading-snug">
                Years of Clinical
                <br />
                Experience
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-text-body">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-dark">
              A Patient-Centered Journey in Gentle Healing
            </h2>

            <p className="leading-relaxed">
              Dr. Pragati Khobragade is an accomplished homeopath and primary healthcare physician with over two decades of clinical experience serving individuals and families across the Mumbai Metropolitan Region. At Perfect Health Center in Diva East, Thane, she combines time-tested constitutional homeopathy with modern diagnostic evaluation.
            </p>

            <p className="leading-relaxed">
              Her clinical focus spans recalcitrant skin conditions (such as eczema, psoriasis, and chronic urticaria), respiratory allergies, bronchial asthma, pediatric immunity development, and women&apos;s hormonal disorders like PCOS and menstrual irregularities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-primary-subtle shadow-subtle flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-primary-main flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm text-primary-dark">Constitutional Care</h3>
                  <p className="text-xs text-text-muted">Targeting root systemic causes rather than superficial suppression.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-primary-subtle shadow-subtle flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary-main flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm text-primary-dark">Holistic Approach</h3>
                  <p className="text-xs text-text-muted">Balancing physical symptoms with mental, emotional, and lifestyle health.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary-dark hover:bg-primary-hover text-white px-7 py-3.5 rounded-xl text-sm font-semibold shadow-button transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a Consultation</span>
              </Link>

              {clinicData.contact.youtubeChannelUrl && (
                <a
                  href={clinicData.contact.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-red-50 text-red-700 border border-red-200 px-6 py-3.5 rounded-xl text-sm font-semibold shadow-subtle transition-all"
                >
                  <Youtube className="w-4 h-4 text-red-600" />
                  <span>Watch Educational Videos</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Philosophy Details */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-primary-subtle shadow-card mb-20">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-dark mb-3">
              Our Core Clinical Principles
            </h2>
            <p className="text-sm sm:text-base text-text-muted">
              How Perfect Health Center approaches patient care, remedy selection, and long-term vitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-cream-50 border border-primary-subtle">
              <div className="w-10 h-10 rounded-xl bg-primary-subtle flex items-center justify-center text-primary-dark mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-primary-dark mb-2">1. In-Depth Case Taking</h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Consultations prioritize listening to your full health history, mental disposition, sleep rhythms, and emotional factors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream-50 border border-primary-subtle">
              <div className="w-10 h-10 rounded-xl bg-primary-subtle flex items-center justify-center text-primary-dark mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-primary-dark mb-2">2. Single Constitutional Remedy</h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Recommending highly individualized micro-dilutions formulated to stimulate intrinsic healing with minimal risk of adverse reaction.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream-50 border border-primary-subtle">
              <div className="w-10 h-10 rounded-xl bg-primary-subtle flex items-center justify-center text-primary-dark mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-primary-dark mb-2">3. Integrative Safety</h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Safe coordination alongside conventional medical treatments, ensuring continuous vital monitoring and gradual recovery.
              </p>
            </div>
          </div>
        </div>

        {/* Certificates & Credentials in About page */}
        <CertificatesSection certificates={clinicData.certificates} />

      </div>
    </div>
  );
}
