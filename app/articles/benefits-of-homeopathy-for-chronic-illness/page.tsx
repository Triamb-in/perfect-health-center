import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight,
  BookOpen,
  Sparkles,
  Heart,
  Activity,
  AlertCircle,
  Home,
  ChevronRight,
} from "lucide-react";
import { getClinicData } from "@/lib/sanity/getContent";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Benefits of Homeopathy for Chronic Illness: A Root-Cause Healing Approach",
  description:
    "How constitutional homeopathy treats chronic skin, asthma, migraine, and joint conditions without side effects at Perfect Health Center in Diva East, Thane.",
  alternates: {
    canonical: "/articles/benefits-of-homeopathy-for-chronic-illness",
  },
  openGraph: {
    title: "Homeopathy for Chronic Illness | Perfect Health Center Diva East",
    description:
      "Root-cause homeopathic management for stubborn eczema, asthma, migraines, and chronic pain by Dr. Pragati Khobragade in Diva East, Thane.",
    url: "https://perfecthealthcenter.in/articles/benefits-of-homeopathy-for-chronic-illness",
    siteName: "Perfect Health Center",
    locale: "en_IN",
    type: "article",
    publishedTime: "2026-01-20T09:00:00.000Z",
    modifiedTime: "2026-09-15T09:00:00.000Z",
    authors: ["Dr. Pragati Khobragade", "Dr. Vijay Uplekar"],
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Homeopathy for Chronic Illness - Perfect Health Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Homeopathy for Chronic Illness | Perfect Health Center",
    description:
      "Root-cause homeopathic healing for chronic conditions in Diva East, Thane.",
    images: ["/images/og-image.jpg"],
  },
};

export default async function ChronicIllnessArticlePage() {
  const clinicData = await getClinicData();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": ["Article", "MedicalWebPage"],
    headline: "Benefits of Homeopathy for Chronic Illness: A Root-Cause Healing Approach",
    description:
      "How constitutional homeopathy treats chronic skin, asthma, migraine, and joint conditions without side effects at Perfect Health Center in Diva East, Thane.",
    url: "https://perfecthealthcenter.in/articles/benefits-of-homeopathy-for-chronic-illness",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://perfecthealthcenter.in/articles/benefits-of-homeopathy-for-chronic-illness",
    },
    datePublished: "2026-01-20T09:00:00+05:30",
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
    medicalSpecialty: ["Homeopathic", "GeneralPractice", "Dermatology", "Respiratory"],
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
        name: "Homeopathy for Chronic Illness",
        item: "https://perfecthealthcenter.in/articles/benefits-of-homeopathy-for-chronic-illness",
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
                Chronic Illness Guide
              </li>
            </ol>
          </nav>

          {/* Header Tag */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-primary-main uppercase tracking-wider mb-3">
              <BookOpen className="w-4 h-4" />
              <span>Clinical Health Guide • Homeopathic Medicine</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4 leading-tight">
              Benefits of Homeopathy for Chronic Illness: A Root-Cause Healing Approach
            </h1>
            <p className="text-sm text-text-muted">
              Medically Reviewed by <strong>Dr. Pragati Khobragade</strong> &amp; <strong>Dr. Vijay Uplekar</strong> • Perfect Health Center, Diva East, Thane
            </p>
          </div>

          {/* Hero Card Summary */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-primary-subtle shadow-card mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary-subtle text-primary-dark flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary-dark mb-2">
                  Why Chronic Conditions Need Constitutional Treatment
                </h2>
                <p className="text-sm sm:text-base text-text-body leading-relaxed">
                  Chronic illnesses—such as recurrent bronchial asthma, eczema, psoriasis, chronic migraines, allergic rhinitis, and arthritis—often share a common pitfall: conventional medications provide temporary symptom suppression, but the underlying inflammation and immune hypersensitivity remain unresolved.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-100">
              <div className="flex items-center gap-2.5 text-xs text-text-muted">
                <ShieldCheck className="w-4 h-4 text-primary-main flex-shrink-0" />
                <span>Stimulates self-healing</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-text-muted">
                <Heart className="w-4 h-4 text-primary-main flex-shrink-0" />
                <span>No long-term organ toxicity</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-text-muted">
                <Activity className="w-4 h-4 text-primary-main flex-shrink-0" />
                <span>Prevents disease recurrence</span>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="space-y-10 text-text-body text-base leading-relaxed">
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-primary-dark flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-primary-main" />
                <span>1. Beyond Temporary Suppression: The Constitutional Difference</span>
              </h2>
              <p>
                In chronic disease, the body has become stuck in a repetitive loop of dysfunction. Suppressive treatments—such as antihistamines for hives or pain modulators for migraines—act as chemical brakes on symptoms. While helpful in acute crises, they rarely retrain the immune system or resolve metabolic stagnation.
              </p>
              <p>
                Constitutional homeopathy takes into account the entirety of your symptoms: physical tendencies, emotional stressors, thermal sensitivities, and family health history. By matching these characteristics to an individualized remedy, homeopathy stimulates your body&apos;s innate regulatory systems to clear the root imbalance.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-primary-dark flex items-center gap-2.5">
                <Activity className="w-5 h-5 text-primary-main" />
                <span>2. Safe Alongside Conventional Treatments</span>
              </h2>
              <p>
                Many patients ask whether they can receive homeopathic care while taking prescribed blood pressure medication, thyroid supplements, or inhalers. The answer is yes.
              </p>
              <p>
                Because homeopathic remedies are prepared through potentized micro-dilutions, they do not chemically interact with or displace allopathic pharmaceuticals. Under the guidance of <strong>Dr. Pragati Khobragade</strong> and <strong>Dr. Vijay Uplekar</strong> at Perfect Health Center, patient safety is strictly monitored, allowing for seamless integration.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-primary-dark flex items-center gap-2.5">
                <AlertCircle className="w-5 h-5 text-primary-main" />
                <span>3. Key Chronic Conditions Treated at Perfect Health Center</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-cream-50 border border-primary-subtle">
                  <h3 className="font-serif font-bold text-primary-dark mb-1">Dermatological Conditions</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Eczema, chronic psoriasis, stubborn ringworm, lichen planus, adult cystic acne, and recurring urticaria.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-cream-50 border border-primary-subtle">
                  <h3 className="font-serif font-bold text-primary-dark mb-1">Respiratory Allergies</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Bronchial asthma, chronic bronchitis, chronic sinusitis, nasal polyps, and recurrent allergic rhinitis.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-cream-50 border border-primary-subtle">
                  <h3 className="font-serif font-bold text-primary-dark mb-1">Gastrointestinal &amp; Ano-Rectal</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Chronic piles (hemorrhoids), anal fissures, irritable bowel tendencies, and acid reflux disorders.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-cream-50 border border-primary-subtle">
                  <h3 className="font-serif font-bold text-primary-dark mb-1">Metabolic &amp; Neurological</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Recurrent migraines, cervical spondylosis, kidney calculi (renal stones), and PCOS hormonal imbalance.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-primary-dark flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-primary-main" />
                <span>4. Long-Term Safety Profile</span>
              </h2>
              <p>
                A major advantage of homeopathic remedies is their high safety profile. Prepared through potentized micro-dilutions, they do not cause stomach ulceration, kidney stress, or liver toxicity even during prolonged therapies.
              </p>
              <p>
                This makes homeopathy safe for all life stages—from newborn infants to elderly patients managing multiple concurrent health challenges.
              </p>
            </section>
          </div>

          {/* CTA Card */}
          <div className="mt-14 bg-primary-dark text-white rounded-3xl p-8 sm:p-12 text-center shadow-floating">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
              Consult Dr. Pragati &amp; Dr. Vijay for Chronic Care
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Take the first step toward lasting health recovery. Schedule an in-person case-taking session at our Diva East clinic or arrange an online consultation.
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
          <RelatedArticles currentSlug="benefits-of-homeopathy-for-chronic-illness" />

        </article>
      </div>
    </>
  );
}
