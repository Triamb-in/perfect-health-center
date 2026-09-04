import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Calendar, ArrowRight } from "lucide-react";
import { getClinicData } from "@/lib/sanity/getContent";
import { SchemaMarkup } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Clinical Specialties & Treated Conditions — Homeopathy & General Practice",
  description:
    "Explore treatments offered at Perfect Health Center Diva East: Homeopathy, Skin & Asthma care, Women's Health (PCOS), Pediatric care, Chronic disease, and Lifestyle disorders.",
  alternates: {
    canonical: "/services",
  },
};

export default async function ServicesPage() {
  const clinicData = await getClinicData();

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#fafaf7]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag">Clinical Departments</div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
            Our Specialties &amp; Treatments
          </h1>
          <p className="text-base sm:text-lg text-text-muted">
            Individualized homeopathic protocols and general medical supervision for acute conditions and long-standing chronic health challenges.
          </p>
        </div>

        {/* Detailed Specialty Cards */}
        <div className="space-y-12 mb-20">
          {clinicData.specialties.map((specialty, idx) => (
            <div
              key={specialty.id}
              id={specialty.id}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-primary-subtle shadow-card scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Col: Header & Description */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-primary-subtle text-primary-dark font-bold text-xs flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-dark">
                      {specialty.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-text-body leading-relaxed mb-6">
                    {specialty.fullDesc}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-primary-main mb-3">
                      Therapeutic Advantages
                    </h3>
                    <ul className="space-y-2">
                      {specialty.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-body">
                          <CheckCircle2 className="w-4 h-4 text-primary-main flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary-dark hover:bg-primary-hover text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-button transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Inquire About {specialty.title}</span>
                  </Link>
                </div>

                {/* Right Col: Conditions Treated */}
                <div className="lg:col-span-5 bg-cream-50 rounded-2xl p-6 border border-primary-subtle">
                  <h3 className="font-serif font-bold text-base text-primary-dark mb-4 pb-2 border-b border-primary-subtle flex items-center justify-between">
                    <span>Conditions Addressed</span>
                    <ArrowRight className="w-4 h-4 text-primary-main" />
                  </h3>

                  <ul className="space-y-2.5">
                    {specialty.conditions.map((cond, cIdx) => (
                      <li
                        key={cIdx}
                        className="flex items-center gap-2 text-xs sm:text-sm text-text-dark bg-white px-3.5 py-2 rounded-xl border border-primary-subtle/60 shadow-subtle"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary-light" />
                        <span>{cond}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Banner */}
        <div className="bg-primary-dark text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-floating">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
            Not Sure Which Treatment Fits Your Needs?
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Schedule an initial case-taking consultation with Dr. Pragati Khobragade. We will evaluate your full health history and recommend an individualized treatment approach.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white hover:bg-cream-100 text-primary-dark px-8 py-3.5 rounded-xl font-semibold text-sm shadow-button transition-all"
            >
              Book In-Clinic or Online Session
            </Link>
            <a
              href="tel:+919273431261"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
            >
              Call +91 92734 31261
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
