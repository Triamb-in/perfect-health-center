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
  Home,
  ChevronRight,
} from "lucide-react";
import { getClinicData } from "@/lib/sanity/getContent";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Benefits of Homeopathy in 2026: Why Modern Families Choose Gentle Medicine",
  description:
    "Explore the modern benefits of constitutional homeopathy in 2026: safe, non-toxic, personalized holistic care by Dr. Pragati Khobragade & Dr. Vijay Uplekar in Diva East, Thane.",
  alternates: {
    canonical: "/articles/benefits-of-homeopathy-2026",
  },
  openGraph: {
    title: "Benefits of Homeopathy in 2026 | Perfect Health Center Diva East",
    description:
      "Why modern families choose gentle constitutional homeopathy in 2026: non-toxic, personalized holistic care by Dr. Pragati Khobragade in Diva East, Thane.",
    url: "https://perfecthealthcenter.in/articles/benefits-of-homeopathy-2026",
    siteName: "Perfect Health Center",
    locale: "en_IN",
    type: "article",
    publishedTime: "2026-01-15T09:00:00.000Z",
    modifiedTime: "2026-09-15T09:00:00.000Z",
    authors: ["Dr. Pragati Khobragade", "Dr. Vijay Uplekar"],
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Benefits of Homeopathy in 2026 - Perfect Health Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benefits of Homeopathy in 2026 | Perfect Health Center",
    description:
      "Explore modern constitutional homeopathy in 2026 with Dr. Pragati Khobragade in Diva East, Thane.",
    images: ["/images/og-image.jpg"],
  },
};

export default async function Benefits2026ArticlePage() {
  const clinicData = await getClinicData();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": ["Article", "MedicalWebPage"],
    headline: "Benefits of Homeopathy in 2026: Why Modern Families Choose Gentle Medicine",
    description:
      "Explore the modern benefits of constitutional homeopathy in 2026: safe, non-toxic, personalized holistic care by Dr. Pragati Khobragade & Dr. Vijay Uplekar in Diva East, Thane.",
    url: "https://perfecthealthcenter.in/articles/benefits-of-homeopathy-2026",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://perfecthealthcenter.in/articles/benefits-of-homeopathy-2026",
    },
    datePublished: "2026-01-15T09:00:00+05:30",
    dateModified: "2026-09-15T09:00:00+05:30",
    author: [
      {
        "@type": "Person",
        name: "Dr. Pragati Khobragade",
        jobTitle: "Consulting Homeopath & General Physician",
        affiliation: {
          "@type": "MedicalBusiness",
          name: "Perfect Health Center",
        },
      },
      {
        "@type": "Person",
        name: "Dr. Vijay Uplekar",
        jobTitle: "Consulting Physician",
        affiliation: {
          "@type": "MedicalBusiness",
          name: "Perfect Health Center",
        },
      },
    ],
    publisher: {
      "@type": "MedicalBusiness",
      name: "Perfect Health Center",
      logo: {
        "@type": "ImageObject",
        url: "https://perfecthealthcenter.in/logo.png",
      },
    },
    image: "https://perfecthealthcenter.in/images/og-image.jpg",
    medicalSpecialty: ["Homeopathic", "GeneralPractice", "Pediatric", "Dermatology"],
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
        name: "Articles & Health Guides",
        item: "https://perfecthealthcenter.in/articles",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Benefits of Homeopathy in 2026",
        item: "https://perfecthealthcenter.in/articles/benefits-of-homeopathy-2026",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#fafaf7]">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center flex-wrap gap-2 text-xs text-text-muted">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-1 hover:text-primary-dark transition-colors"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </li>
              <li>
                <Link
                  href="/articles"
                  className="hover:text-primary-dark transition-colors"
                >
                  Articles &amp; Guides
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </li>
              <li className="font-semibold text-primary-dark truncate max-w-xs sm:max-w-none" aria-current="page">
                Benefits of Homeopathy in 2026
              </li>
            </ol>
          </nav>

          {/* Header Tag */}
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-100">
              <div className="flex items-center gap-2.5 text-xs text-text-muted">
                <ShieldCheck className="w-4 h-4 text-primary-main flex-shrink-0" />
                <span>Zero toxic accumulation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-text-muted">
                <Heart className="w-4 h-4 text-primary-main flex-shrink-0" />
                <span>Supports natural vitality</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-text-muted">
                <Activity className="w-4 h-4 text-primary-main flex-shrink-0" />
                <span>Safe for all life stages</span>
              </div>
            </div>
          </div>

          {/* Main Content Body */}
          <div className="space-y-10 text-text-body text-base leading-relaxed">
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-primary-dark flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-primary-main" />
                <span>1. Freedom from Toxic Burden and Chemical Side Effects</span>
              </h2>
              <p>
                In 2026, one of the greatest clinical appeals of classical homeopathy is its profound safety profile. Homeopathic remedies undergo systematic potentization—a controlled pharmaceutical dilution and succussion process that eliminates chemical toxicity while preserving energetic therapeutic value.
              </p>
              <p>
                Unlike long-term corticosteroids often prescribed for eczema or asthma, constitutional homeopathic remedies do not thin the skin, elevate systemic blood pressure, or suppress adrenal activity. They are gentle on the liver and kidneys, making them particularly well-suited for elderly patients and young infants.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-primary-dark flex items-center gap-2.5">
                <Microscope className="w-5 h-5 text-primary-main" />
                <span>2. Individualized Prescription Over Generic Protocols</span>
              </h2>
              <p>
                Modern medicine increasingly recognizes that disease manifests differently in every genetic constitution. Two patients with allergic rhinitis may present with completely opposite modalities: one feels better in cold outdoor air, while the other experiences debilitating sinus spasms from the slightest breeze.
              </p>
              <p>
                At <strong>Perfect Health Center</strong> in Diva East, Dr. Pragati Khobragade and Dr. Vijay Uplekar dedicate significant clinical time to comprehensive case-taking. We evaluate your unique sleep rhythms, temperature sensitivities, emotional stresses, and physical symptoms to select the singular remedy matching your constitution.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-primary-dark flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-primary-main" />
                <span>3. Treating the Root Cause Rather Than Symptom Suppression</span>
              </h2>
              <p>
                When a rash is repeatedly suppressed with strong topical ointments, it often recedes from the skin only to manifest deeper inside the physiology—such as childhood eczema later transitioning into bronchial asthma. This trajectory, known clinically as symptom metastasis, highlights the risk of treating only surface manifestations.
              </p>
              <p>
                Constitutional homeopathy stimulates the patient&apos;s innate vital response. As internal balance is restored, the skin clears permanently because the systemic immune trigger has been addressed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-primary-dark flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-primary-main" />
                <span>4. Conditions Frequently Treated in Our 2026 Practice</span>
              </h2>
              <p>
                Throughout Diva East, Thane, and the greater Mumbai region, patients consult our clinic for an array of conditions:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-main flex-shrink-0" />
                  <span>Recalcitrant skin conditions: eczema, psoriasis, fungal ringworm</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-main flex-shrink-0" />
                  <span>Respiratory allergies, sinusitis, and bronchial asthma</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-main flex-shrink-0" />
                  <span>Kidney stones (renal calculi) and urinary tract discomfort</span>
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

          {/* Related Articles Cross-Linking */}
          <RelatedArticles currentSlug="benefits-of-homeopathy-2026" />

        </article>
      </div>
    </>
  );
}
