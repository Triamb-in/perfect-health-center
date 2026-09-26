import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  BookOpen,
  Baby,
  Smile,
  HeartHandshake,
  Sparkles,
  Home,
  ChevronRight,
} from "lucide-react";
import { getClinicData } from "@/lib/sanity/getContent";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Pediatric Care: What Every Parent Should Know About Gentle Healing",
  description:
    "Gentle homeopathic pediatric care for children in Diva East, Thane. Safe immunity support, colic, allergies & cold remedies by Dr. Pragati Khobragade & Dr. Vijay Uplekar.",
  alternates: {
    canonical: "/articles/pediatric-care-homeopathy",
  },
  openGraph: {
    title: "Pediatric Homeopathy Guide | Perfect Health Center Diva East",
    description:
      "Gentle child immunity building, sweet micro-pills, and holistic recovery for recurrent colds, colic, tonsillitis, and wheezing in Diva East, Thane.",
    url: "https://perfecthealthcenter.in/articles/pediatric-care-homeopathy",
    siteName: "Perfect Health Center",
    locale: "en_IN",
    type: "article",
    publishedTime: "2026-02-01T09:00:00.000Z",
    modifiedTime: "2026-09-15T09:00:00.000Z",
    authors: ["Dr. Pragati Khobragade", "Dr. Vijay Uplekar"],
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pediatric Homeopathy Guide - Perfect Health Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pediatric Homeopathy Guide | Perfect Health Center",
    description:
      "Safe and gentle pediatric care for children in Diva East, Thane.",
    images: ["/images/og-image.jpg"],
  },
};

export default async function PediatricCareArticlePage() {
  const clinicData = await getClinicData();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": ["Article", "MedicalWebPage"],
    headline: "Pediatric Care: What Every Parent Should Know About Gentle Healing",
    description:
      "Gentle homeopathic pediatric care for children in Diva East, Thane. Safe immunity support, colic, allergies & cold remedies by Dr. Pragati & Dr. Vijay.",
    url: "https://perfecthealthcenter.in/articles/pediatric-care-homeopathy",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://perfecthealthcenter.in/articles/pediatric-care-homeopathy",
    },
    datePublished: "2026-02-01T09:00:00+05:30",
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
    medicalSpecialty: ["Pediatric", "Homeopathic", "GeneralPractice"],
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
        name: "Pediatric Care: Gentle Healing for Children",
        item: "https://perfecthealthcenter.in/articles/pediatric-care-homeopathy",
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
                Pediatric Care Guide
              </li>
            </ol>
          </nav>

          {/* Header Breadcrumb & Tag */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-primary-main uppercase tracking-wider mb-3">
              <BookOpen className="w-4 h-4" />
              <span>Parent Health Guide • Child Immunity &amp; Homeopathy</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4 leading-tight">
              Pediatric Care: What Every Parent Should Know About Gentle Healing
            </h1>
            <p className="text-sm text-text-muted">
              Clinical Guidance from <strong>Dr. Pragati Khobragade</strong> &amp; <strong>Dr. Vijay Uplekar</strong> • Perfect Health Center, Diva East, Thane
            </p>
          </div>

          {/* Hero Summary */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-primary-subtle shadow-card mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary-subtle text-primary-dark flex items-center justify-center flex-shrink-0">
                <Baby className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary-dark mb-2">
                  Nurturing Growing Immunity Without Harsh Pharmaceuticals
                </h2>
                <p className="text-sm sm:text-base text-text-body leading-relaxed">
                  As parents, few things cause more anxiety than watching a child suffer through repeated cycles of high fever, chronic tonsillitis, wheezing, or painful digestive colic. Frequent antibiotic courses can disrupt a child&apos;s delicate gut microbiome and leave immunity weakened.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-100">
              <div className="flex items-center gap-2.5 text-xs text-text-muted">
                <Smile className="w-4 h-4 text-primary-main flex-shrink-0" />
                <span>Zero struggle: sweet pills</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-text-muted">
                <ShieldCheck className="w-4 h-4 text-primary-main flex-shrink-0" />
                <span>Protects gut microbiome</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-text-muted">
                <HeartHandshake className="w-4 h-4 text-primary-main flex-shrink-0" />
                <span>Builds natural resilience</span>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="space-y-10 text-text-body text-base leading-relaxed">
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-primary-dark flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-primary-main" />
                <span>1. The Homeopathic Advantage for Children</span>
              </h2>
              <p>
                Children respond remarkably quickly to homeopathic remedies. Because their systems have not experienced decades of chronic suppressed illness or chemical dependency, their vital force reacts promptly to micro-diluted remedies.
              </p>
              <p>
                Moreover, homeopathic medicines are prepared as small, naturally sweet lactose globules. There is no bitter liquid, choking on oversized capsules, or distressing struggle at medicine time—making daily adherence stress-free for both parents and children.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-primary-dark flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-primary-main" />
                <span>2. Common Childhood Conditions We Support</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-cream-50 border border-primary-subtle">
                  <h3 className="font-serif font-bold text-primary-dark mb-1">Recurrent Respiratory Colds &amp; Cough</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Preventing seasonal colds from escalating into chest congestion, wheezing, and recurring antibiotic cycles.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-cream-50 border border-primary-subtle">
                  <h3 className="font-serif font-bold text-primary-dark mb-1">Enlarged Tonsils &amp; Adenoids</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Gentle anti-inflammatory constitutional therapy helping avoid premature surgical removal in many candidates.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-cream-50 border border-primary-subtle">
                  <h3 className="font-serif font-bold text-primary-dark mb-1">Infantile Colic &amp; Teething Pain</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Soothing painful abdominal gas, irritable teething episodes, and sleep disturbances safely.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-cream-50 border border-primary-subtle">
                  <h3 className="font-serif font-bold text-primary-dark mb-1">Childhood Eczema &amp; Food Allergies</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Treating hyper-reactive immune responses at the root without lifelong steroid cream dependence.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-primary-dark flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-primary-main" />
                <span>3. Strengthening Long-Term Constitutional Immunity</span>
              </h2>
              <p>
                Rather than acting as an external crutch, a constitutional remedy stimulates the child&apos;s own bone marrow, lymphoid system, and mucosal linings. Over successive months, parents notice that minor seasonal temperature changes no longer trigger instant fever or bronchial coughing.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-primary-dark flex items-center gap-2.5">
                <HeartHandshake className="w-5 h-5 text-primary-main" />
                <span>4. A Supportive Partnership with Parents</span>
              </h2>
              <p>
                We take time to listen to you as parents—understanding your child&apos;s eating habits, sleeping patterns, fears, and growth milestones. Our treatment is never a rushed 2-minute prescription, but an ongoing partnership to build robust lifetime wellness.
              </p>
            </section>
          </div>

          {/* CTA Card */}
          <div className="mt-14 bg-primary-dark text-white rounded-3xl p-8 sm:p-12 text-center shadow-floating">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
              Schedule a Gentle Consultation for Your Child
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Visit Perfect Health Center in Diva East, Thane for gentle, child-friendly care with Dr. Pragati Khobragade and Dr. Vijay Uplekar.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-cream-100 text-primary-dark px-7 py-3.5 rounded-xl font-semibold text-sm shadow-button transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Child Consultation</span>
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
          <RelatedArticles currentSlug="pediatric-care-homeopathy" />

        </article>
      </div>
    </>
  );
}
