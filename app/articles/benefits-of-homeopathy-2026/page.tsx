import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  BookOpen,
  Sparkles,
  TrendingUp,
  Heart,
  Activity,
  Microscope,
} from "lucide-react";
import { getClinicData } from "@/lib/sanity/getContent";

export const metadata: Metadata = {
  title: "Benefits of Homeopathy in 2026",
  description:
    "Explore modern benefits of homeopathy in 2026: safe, non-toxic, personalized holistic care by Dr. Pragati Khobragade & Dr. Vijay Uplekar in Diva East, Thane.",
  alternates: {
    canonical: "/articles/benefits-of-homeopathy-2026",
  },
};

export default async function Benefits2026ArticlePage() {
  const clinicData = await getClinicData();

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#fafaf7]">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Tag */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-primary-main uppercase tracking-wider mb-3">
            <BookOpen className="w-4 h-4" />
            <span>Health Insights 2026 • Evidence-Guided Wellness</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4 leading-tight">
            Benefits of Homeopathy in 2026: Why Modern Families Choose Gentle Medicine
          </h1>
          <p className="text-sm text-text-muted">
            Clinical Perspectives by <strong>Dr. Pragati Khobragade</strong> &amp; <strong>Dr. Vijay Uplekar</strong> • Perfect Health Center, Diva East, Thane
          </p>
        </div>

        {/* Hero Card Summary */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-primary-subtle shadow-card mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary-subtle text-primary-dark flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary-dark mb-2">
                A Global Shift Toward Sustainable, Non-Toxic Healthcare
              </h2>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                As we navigate 2026, healthcare consumers are increasingly discerning. The rise of antibiotic resistance, recurring steroid dependence for chronic allergies, and high-stress lifestyle disorders have led millions of families back to personalized, holistic medicine.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-cream-50 border border-primary-subtle/80 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-primary-main flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-text-dark font-medium leading-relaxed">
              At Perfect Health Center in Diva East, Thane, Dr. Pragati Khobragade and Dr. Vijay Uplekar combine over two decades of clinical experience with modern diagnostic evaluation to deliver safe, constitutional healing.
            </p>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="space-y-10 text-text-body text-base sm:text-lg leading-relaxed">
          {/* Section 1 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-primary-subtle shadow-subtle">
            <h2 className="font-serif text-2xl font-bold text-primary-dark mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary-subtle text-primary-dark text-sm font-bold flex items-center justify-center">
                1
              </span>
              <span>Individualized Precision Medicine</span>
            </h2>
            <p className="text-sm sm:text-base text-text-body mb-4">
              Modern medicine is gradually acknowledging that no two patients respond identically to the same pharmaceutical drug. What conventional medicine calls &ldquo;precision medicine&rdquo; has been the foundational tenet of homeopathy for over two centuries.
            </p>
            <p className="text-sm sm:text-base text-text-body">
              Rather than prescribing a one-size-fits-all antihistamine for ten different asthma or migraine sufferers, constitutional homeopathy evaluates each individual&apos;s physical constitution, thermal sensitivity, sleep rhythms, and mental stressors to select a uniquely tailored remedy.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-primary-subtle shadow-subtle">
            <h2 className="font-serif text-2xl font-bold text-primary-dark mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary-subtle text-primary-dark text-sm font-bold flex items-center justify-center">
                2
              </span>
              <span>Zero Drug Toxicity &amp; Microbiome Protection</span>
            </h2>
            <p className="text-sm sm:text-base text-text-body mb-4">
              A critical advantage of homeopathy in 2026 is its impeccable biological safety:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-cream-50 border border-primary-subtle">
                <h3 className="font-semibold text-primary-dark text-sm sm:text-base mb-1 flex items-center gap-2">
                  <Microscope className="w-4 h-4 text-primary-main" />
                  <span>Preserves Gut Microbiome</span>
                </h3>
                <p className="text-xs sm:text-sm text-text-muted">
                  Unlike repeated broad-spectrum antibiotics that wipe out beneficial gut flora, potentized micro-dilutions work immunologically without microbial disruption.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cream-50 border border-primary-subtle">
                <h3 className="font-semibold text-primary-dark text-sm sm:text-base mb-1 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-primary-main" />
                  <span>Zero Organ Strain</span>
                </h3>
                <p className="text-xs sm:text-sm text-text-muted">
                  Safe for long-term use without placing toxic burdens on the liver or kidneys, making it ideal for young children and seniors.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-primary-subtle shadow-subtle">
            <h2 className="font-serif text-2xl font-bold text-primary-dark mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary-subtle text-primary-dark text-sm font-bold flex items-center justify-center">
                3
              </span>
              <span>Tackling Complex Lifestyle &amp; Stress Illnesses</span>
            </h2>
            <p className="text-sm sm:text-base text-text-body mb-4">
              Urban life in 2026 brings chronic screen exposure, irregular dietary schedules, work burnout, and pollution. Homeopathy excels at restoring equilibrium for conditions heavily influenced by neuro-endocrine stress:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-text-dark font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-main flex-shrink-0" />
                <span>Stress-induced tension headaches and migraine clusters</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-main flex-shrink-0" />
                <span>Adult acne, hormonal melasma, and sudden hair fall (alopecia)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-main flex-shrink-0" />
                <span>PCOS, menstrual irregularities, and thyroid metabolic imbalance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-main flex-shrink-0" />
                <span>Sedentary digestive issues: piles, fissures, and chronic acid reflux</span>
              </li>
            </ul>
          </section>
        </div>

        {/* CTA Card */}
        <div className="mt-14 bg-primary-dark text-white rounded-3xl p-8 sm:p-12 text-center shadow-floating">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
            Experience 2026 Holistic Healthcare in Diva East
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Begin your journey to lasting vitality with Dr. Pragati Khobragade and Dr. Vijay Uplekar at Perfect Health Center.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-cream-100 text-primary-dark px-7 py-3.5 rounded-xl font-semibold text-sm shadow-button transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Consultation</span>
            </Link>
            <a
              href={`tel:${clinicData.contact.phone}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call {clinicData.contact.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
