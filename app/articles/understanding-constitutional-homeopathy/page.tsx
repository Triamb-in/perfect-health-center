import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  BookOpen,
  Sparkles,
  HeartHandshake,
  Search,
  UserCheck,
  Layers,
  Home,
  ChevronRight,
} from "lucide-react";
import { getClinicData } from "@/lib/sanity/getContent";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Understanding Constitutional Homeopathy: The Art of Whole-Person Healing",
  description:
    "Learn how constitutional homeopathy works: in-depth case-taking, totality of symptoms, and root-cause healing by Dr. Pragati Khobragade & Dr. Vijay Uplekar in Diva East, Thane.",
  alternates: {
    canonical: "/articles/understanding-constitutional-homeopathy",
  },
  openGraph: {
    title: "Constitutional Homeopathy Guide | Perfect Health Center Diva East",
    description:
      "The clinical art of whole-person healing: case-taking, totality of symptoms, and individualized remedies by Dr. Pragati Khobragade in Diva East, Thane.",
    url: "https://perfecthealthcenter.in/articles/understanding-constitutional-homeopathy",
    siteName: "Perfect Health Center",
    locale: "en_IN",
    type: "article",
    publishedTime: "2026-02-10T09:00:00.000Z",
    modifiedTime: "2026-09-15T09:00:00.000Z",
    authors: ["Dr. Pragati Khobragade", "Dr. Vijay Uplekar"],
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Constitutional Homeopathy Guide - Perfect Health Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Constitutional Homeopathy Guide | Perfect Health Center",
    description:
      "Foundational principles of whole-person constitutional healing in Diva East, Thane.",
    images: ["/images/og-image.jpg"],
  },
};

export default async function ConstitutionalHomeopathyArticlePage() {
  const clinicData = await getClinicData();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": ["Article", "MedicalWebPage"],
    headline: "Understanding Constitutional Homeopathy: The Art of Whole-Person Healing",
    description:
      "Learn how constitutional homeopathy works: in-depth case-taking, totality of symptoms, and root-cause healing by Dr. Pragati & Dr. Vijay in Diva East, Thane.",
    url: "https://perfecthealthcenter.in/articles/understanding-constitutional-homeopathy",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://perfecthealthcenter.in/articles/understanding-constitutional-homeopathy",
    },
    datePublished: "2026-02-10T09:00:00+05:30",
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
    medicalSpecialty: ["Homeopathic", "GeneralPractice"],
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
        name: "Understanding Constitutional Homeopathy",
        item: "https://perfecthealthcenter.in/articles/understanding-constitutional-homeopathy",
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
                Constitutional Homeopathy
              </li>
            </ol>
          </nav>

          {/* Header Breadcrumb & Tag */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-primary-main uppercase tracking-wider mb-3">
              <BookOpen className="w-4 h-4" />
              <span>Foundational Principles • Clinical Practice</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4 leading-tight">
              Understanding Constitutional Homeopathy: The Art of Whole-Person Healing
            </h1>
            <p className="text-sm text-text-muted">
              Clinical Explanation by <strong>Dr. Pragati Khobragade</strong> &amp; <strong>Dr. Vijay Uplekar</strong> • Perfect Health Center, Diva East, Thane
            </p>
          </div>

          {/* Hero Card Summary */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-primary-subtle shadow-card mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary-subtle text-primary-dark flex items-center justify-center flex-shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary-dark mb-2">
                  What Makes Constitutional Homeopathy Truly Unique?
                </h2>
                <p className="text-sm sm:text-base text-text-body leading-relaxed">
                  In conventional medicine, different organs are treated by isolated specialists: a dermatologist treats the skin rash, a pulmonologist treats the breathing difficulty, and a gastroenterologist treats the acid reflux. In constitutional homeopathy, these are recognized as expressions of a single underlying vital disturbance.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-100">
              <div className="flex items-center gap-2.5 text-xs text-text-muted">
                <Search className="w-4 h-4 text-primary-main flex-shrink-0" />
                <span>Totality of symptoms</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-text-muted">
                <UserCheck className="w-4 h-4 text-primary-main flex-shrink-0" />
                <span>Deep individualization</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-text-muted">
                <ShieldCheck className="w-4 h-4 text-primary-main flex-shrink-0" />
                <span>Single remedy focus</span>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="space-y-10 text-text-body text-base leading-relaxed">
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-primary-dark flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-primary-main" />
                <span>1. What is a &ldquo;Constitution&rdquo; in Homeopathy?</span>
              </h2>
              <p>
                Your constitution encompasses your physical morphology, metabolic rate, emotional tendencies, intellectual focus, thermal preferences, and hereditary predispositions. When all these facets align in dynamic balance, health is maintained naturally.
              </p>
              <p>
                When stressors (such as chronic emotional conflict, toxic environmental exposure, or hormonal shifts) exceed your threshold, the vital force produces symptoms as protective signaling. A constitutional remedy matches this exact state, stimulating your system to resolve the root vulnerability.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-primary-dark flex items-center gap-2.5">
                <Search className="w-5 h-5 text-primary-main" />
                <span>2. The In-Depth Consultation Process</span>
              </h2>
              <p>
                A constitutional consultation at <strong>Perfect Health Center</strong> is comprehensive. During your initial session, <strong>Dr. Pragati Khobragade</strong> and <strong>Dr. Vijay Uplekar</strong> explore:
              </p>
              <ul className="space-y-2.5 text-sm pt-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary-main flex-shrink-0 mt-0.5" />
                  <span><strong>Physical General Symptoms:</strong> Appetite, food cravings/aversions, thirst, perspiration patterns, and reaction to weather changes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary-main flex-shrink-0 mt-0.5" />
                  <span><strong>Mental &amp; Emotional Disposition:</strong> Reaction to stress, temperament, sleep quality, recurring dreams, and mood rhythms.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary-main flex-shrink-0 mt-0.5" />
                  <span><strong>Past Medical &amp; Family History:</strong> Childhood illnesses, previous drug suppressions, and familial hereditary tendencies.</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-primary-dark flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-primary-main" />
                <span>3. The Law of Similars in Action</span>
              </h2>
              <p>
                The foundation of homeopathy is <em>Similia Similibus Curentur</em> (&ldquo;like cures like&rdquo;). A substance capable of producing specific symptoms in a healthy volunteer can cure identical symptoms in a sick patient when administered in micro-diluted potentized form.
              </p>
              <p>
                Because the remedy matches your state so closely, your vital defense recognizes the signal immediately, initializing the healing cascade from within outward.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-primary-dark flex items-center gap-2.5">
                <HeartHandshake className="w-5 h-5 text-primary-main" />
                <span>4. What to Expect During the Healing Journey</span>
              </h2>
              <p>
                True constitutional recovery follows Hering&apos;s Law of Cure: healing proceeds from the inside out, from more vital organs to less vital organs (e.g. respiratory symptoms clear first before the mild skin rash recedes), and in reverse chronological order of their arrival.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-cream-50 border border-primary-subtle text-center">
                  <span className="font-bold text-xs uppercase tracking-wider text-primary-main block mb-1">Step 1: Vitality</span>
                  <p className="text-xs sm:text-sm text-text-body">Better sleep, stable appetite, and elevated daily energy.</p>
                </div>
                <div className="p-4 rounded-2xl bg-cream-50 border border-primary-subtle text-center">
                  <span className="font-bold text-xs uppercase tracking-wider text-primary-main block mb-1">Step 2: Internal Relief</span>
                  <p className="text-xs sm:text-sm text-text-body">Reduction in internal inflammation, wheezing, and digestive distress.</p>
                </div>
                <div className="p-4 rounded-2xl bg-cream-50 border border-primary-subtle text-center">
                  <span className="font-bold text-xs uppercase tracking-wider text-primary-main block mb-1">Step 3: Permanence</span>
                  <p className="text-xs sm:text-sm text-text-body">Chronic flare-ups decrease in frequency, intensity, and duration until fully resolved.</p>
                </div>
              </div>
            </section>
          </div>

          {/* CTA Card */}
          <div className="mt-14 bg-primary-dark text-white rounded-3xl p-8 sm:p-12 text-center shadow-floating">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
              Schedule a Constitutional Case-Taking Session
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Experience genuine whole-person care. Visit Dr. Pragati Khobragade and Dr. Vijay Uplekar at Perfect Health Center in Diva East, Thane.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-cream-100 text-primary-dark px-7 py-3.5 rounded-xl font-semibold text-sm shadow-button transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book In-Clinic or Video Session</span>
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
          <RelatedArticles currentSlug="understanding-constitutional-homeopathy" />

        </article>
      </div>
    </>
  );
}
