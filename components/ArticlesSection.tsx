import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, TrendingUp, ShieldCheck, Baby, Layers } from "lucide-react";

interface HomeArticle {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  icon: typeof TrendingUp;
}

const homeArticles: HomeArticle[] = [
  {
    slug: "benefits-of-homeopathy-2026",
    title: "Benefits of Homeopathy in 2026: Why Modern Families Choose Gentle Medicine",
    category: "Wellness Trends",
    readTime: "5 min read",
    excerpt: "Understanding the shift toward non-toxic, sustainable medicine and immune resilience in modern healthcare.",
    icon: TrendingUp,
  },
  {
    slug: "benefits-of-homeopathy-for-chronic-illness",
    title: "Benefits of Homeopathy for Chronic Illness: A Root-Cause Healing Approach",
    category: "Chronic Illness",
    readTime: "6 min read",
    excerpt: "Stimulating self-recovery for persistent skin conditions, bronchial asthma, and chronic migraine without dependency.",
    icon: ShieldCheck,
  },
  {
    slug: "pediatric-care-homeopathy",
    title: "Pediatric Care: What Every Parent Should Know About Gentle Healing",
    category: "Child Health",
    readTime: "5 min read",
    excerpt: "Gentle child immunity building, sweet micro-pills, and holistic recovery for recurrent colds, colic, and cough.",
    icon: Baby,
  },
  {
    slug: "understanding-constitutional-homeopathy",
    title: "Understanding Constitutional Homeopathy: The Art of Whole-Person Healing",
    category: "Clinical Principles",
    readTime: "6 min read",
    excerpt: "How holistic totality of symptoms and individualized case evaluation unlock long-term systemic vitality.",
    icon: Layers,
  },
];

export function ArticlesSection() {
  return (
    <section id="articles" className="py-14 sm:py-20 lg:py-28 bg-[#fafaf7] relative border-t border-primary-subtle/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="section-tag">Patient Education &amp; Insights</div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-3 sm:mb-4">
            Health Guides &amp; Clinical Insights
          </h2>
          <p className="text-sm sm:text-base text-text-muted">
            Explore doctor-authored clinical perspectives on gentle constitutional healing, chronic condition management, and pediatric wellness.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {homeArticles.map((article) => {
            const IconComp = article.icon;
            return (
              <article
                key={article.slug}
                className="bg-white rounded-2xl p-6 border border-primary-subtle shadow-card hover:shadow-floating transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-primary-main mb-3">
                    <span className="inline-flex items-center gap-1.5 bg-primary-subtle/50 px-2.5 py-1 rounded-full border border-primary-subtle">
                      <IconComp className="w-3.5 h-3.5" />
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-text-muted">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base sm:text-lg text-primary-dark group-hover:text-primary-main transition-colors mb-2.5 leading-snug">
                    <Link href={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-text-muted leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-end">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-dark group-hover:text-primary-main group-hover:translate-x-1 transition-all"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA to view all articles */}
        <div className="text-center">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 bg-primary-dark hover:bg-primary-hover text-white px-7 py-3 rounded-xl text-sm font-semibold shadow-button transition-all duration-200 group"
          >
            <BookOpen className="w-4 h-4" />
            <span>Browse All Clinical Articles &amp; Guides</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
