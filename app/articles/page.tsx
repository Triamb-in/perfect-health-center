import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Heart,
  TrendingUp,
  Baby,
  Layers,
  ChevronRight,
  Home,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Health Guides & Clinical Articles | Perfect Health Center",
  description:
    "Explore clinical insights, homeopathic care guides, pediatric health, and constitutional healing perspectives from Dr. Pragati Khobragade and Dr. Vijay Uplekar in Diva East, Thane.",
  alternates: {
    canonical: "/articles",
  },
  openGraph: {
    title: "Health Guides & Clinical Articles | Perfect Health Center Diva East",
    description:
      "Evidence-guided homeopathic clinical insights, pediatric care guides, and root-cause constitutional wellness articles by Dr. Pragati Khobragade in Diva East, Thane.",
    url: "https://perfecthealthcenter.in/articles",
    siteName: "Perfect Health Center",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Perfect Health Center Health Insights & Clinical Articles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Guides & Clinical Articles | Perfect Health Center",
    description:
      "Expert homeopathic perspectives on chronic illness, pediatric immunity, and 2026 gentle medicine in Diva East, Thane.",
    images: ["/images/og-image.jpg"],
  },
};

interface ArticleSummary {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  icon: typeof Sparkles;
  highlights: string[];
}

const articles: ArticleSummary[] = [
  {
    slug: "benefits-of-homeopathy-2026",
    title: "Benefits of Homeopathy in 2026: Why Modern Families Choose Gentle Medicine",
    category: "Modern Wellness Trends",
    readTime: "5 min read",
    date: "September 2026",
    excerpt:
      "As healthcare consumers face rising antibiotic resistance and chronic steroid dependence, modern families are turning toward sustainable, non-toxic, and personalized constitutional homeopathic medicine.",
    icon: TrendingUp,
    highlights: ["Immune resilience", "Zero toxic side effects", "Personalized remedies"],
  },
  {
    slug: "benefits-of-homeopathy-for-chronic-illness",
    title: "Benefits of Homeopathy for Chronic Illness: A Root-Cause Healing Approach",
    category: "Chronic Disease Care",
    readTime: "6 min read",
    date: "September 2026",
    excerpt:
      "Learn how constitutional remedies resolve long-standing conditions like stubborn eczema, asthma, recurring migraines, and arthritis by addressing the underlying vital disturbance rather than suppressing symptoms.",
    icon: ShieldCheck,
    highlights: ["Symptom totality", "Safe alongside conventional care", "Sustainable recovery"],
  },
  {
    slug: "pediatric-care-homeopathy",
    title: "Pediatric Care: What Every Parent Should Know About Gentle Healing",
    category: "Parent & Child Health",
    readTime: "5 min read",
    date: "September 2026",
    excerpt:
      "A compassionate, practical guide for parents navigating childhood immunity, recurring fevers, tonsillitis, wheezing, and digestive colic with safe, pleasant-tasting homeopathic remedies.",
    icon: Baby,
    highlights: ["Child-friendly sweet pills", "Gentle microbiome protection", "Strengthens defense"],
  },
  {
    slug: "understanding-constitutional-homeopathy",
    title: "Understanding Constitutional Homeopathy: The Art of Whole-Person Healing",
    category: "Core Principles",
    readTime: "6 min read",
    date: "September 2026",
    excerpt:
      "Discover the foundational clinical science of totality of symptoms, single-remedy precision, and individualized case-taking that distinguishes true constitutional homeopathy.",
    icon: Layers,
    highlights: ["Whole-person case taking", "Individualized micro-dilutions", "Vital force stimulation"],
  },
];

export default function ArticlesHubPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Health Guides & Clinical Articles | Perfect Health Center",
    description:
      "Clinical insights, homeopathic care guides, pediatric health, and constitutional healing perspectives from Dr. Pragati Khobragade and Dr. Vijay Uplekar in Diva East, Thane.",
    url: "https://perfecthealthcenter.in/articles",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((article, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `https://perfecthealthcenter.in/articles/${article.slug}`,
        name: article.title,
        description: article.excerpt,
      })),
    },
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#fafaf7] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-text-muted">
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
              <li className="font-semibold text-primary-dark" aria-current="page">
                Articles &amp; Guides
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-tag">Clinical Knowledge Base</div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
              Health Guides &amp; Clinical Insights
            </h1>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              Evidence-guided perspectives on constitutional homeopathy, chronic illness recovery, pediatric health, and holistic family wellness from <strong>Dr. Pragati Khobragade</strong> &amp; <strong>Dr. Vijay Uplekar</strong> at Perfect Health Center, Diva East.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {articles.map((article) => {
              const IconComponent = article.icon;
              return (
                <article
                  key={article.slug}
                  className="bg-white rounded-3xl p-7 sm:p-9 border border-primary-subtle shadow-card hover:shadow-floating transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between gap-2 mb-4 text-xs font-semibold text-primary-main">
                      <span className="inline-flex items-center gap-1.5 bg-primary-subtle/50 px-3 py-1 rounded-full border border-primary-subtle">
                        <IconComponent className="w-3.5 h-3.5" />
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-text-muted">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Article Title */}
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary-dark mb-3 group-hover:text-primary-main transition-colors leading-snug">
                      <Link href={`/articles/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-text-body mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Highlight Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {article.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs bg-cream-50 text-primary-dark px-2.5 py-1 rounded-lg border border-primary-subtle/60"
                        >
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs text-text-muted">
                      Published • {article.date}
                    </span>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-dark group-hover:text-primary-main group-hover:translate-x-1 transition-all"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Consultation CTA Banner */}
          <div className="bg-primary-dark text-white rounded-3xl p-8 sm:p-12 text-center shadow-floating">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
              Need Personalized Clinical Guidance?
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Every individual constitution is unique. Schedule an in-depth consultation with Dr. Pragati Khobragade and Dr. Vijay Uplekar at our Diva East clinic.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-cream-100 text-primary-dark px-7 py-3.5 rounded-xl font-semibold text-sm shadow-button transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Consultation</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all"
              >
                <span>Learn About Our Doctors</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
