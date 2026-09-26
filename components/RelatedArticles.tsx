import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

interface RelatedArticle {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  description: string;
}

const allArticles: RelatedArticle[] = [
  {
    slug: "benefits-of-homeopathy-2026",
    title: "Benefits of Homeopathy in 2026: Why Modern Families Choose Gentle Medicine",
    category: "Modern Trends",
    readTime: "5 min read",
    description: "Explore why discernment around antibiotics and steroids is driving patients toward constitutional homeopathic care.",
  },
  {
    slug: "benefits-of-homeopathy-for-chronic-illness",
    title: "Benefits of Homeopathy for Chronic Illness: A Root-Cause Healing Approach",
    category: "Chronic Illness",
    readTime: "6 min read",
    description: "How individual constitutional micro-dilutions stimulate innate healing for long-standing asthma, eczema, and migraine.",
  },
  {
    slug: "pediatric-care-homeopathy",
    title: "Pediatric Care: What Every Parent Should Know About Gentle Healing",
    category: "Child Health",
    readTime: "5 min read",
    description: "Safe, side-effect-free immunity building and gentle remedies for recurring child colds, colic, and wheezing.",
  },
  {
    slug: "understanding-constitutional-homeopathy",
    title: "Understanding Constitutional Homeopathy: The Art of Whole-Person Healing",
    category: "Foundational Principles",
    readTime: "6 min read",
    description: "Deep-dive into totality of symptoms, individual temperament, and single-remedy healing protocols.",
  },
];

interface RelatedArticlesProps {
  currentSlug: string;
}

export function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
  const filtered = allArticles.filter((a) => a.slug !== currentSlug);

  return (
    <section className="mt-16 pt-12 border-t border-stone-200">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-primary-main uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Further Reading</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-dark">
            Related Health Guides &amp; Clinical Perspectives
          </h2>
        </div>
        <Link
          href="/articles"
          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-primary-main hover:text-primary-dark transition-colors"
        >
          <span>View All Articles</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <article
            key={item.slug}
            className="bg-white rounded-2xl p-5 border border-primary-subtle shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] font-semibold text-primary-main mb-2">
                <span className="bg-primary-subtle/50 px-2 py-0.5 rounded-full border border-primary-subtle">
                  {item.category}
                </span>
                <span className="flex items-center gap-1 text-text-muted">
                  <Clock className="w-3 h-3" />
                  {item.readTime}
                </span>
              </div>
              <h3 className="font-serif font-bold text-base text-primary-dark group-hover:text-primary-main transition-colors mb-2 leading-snug">
                <Link href={`/articles/${item.slug}`}>
                  {item.title}
                </Link>
              </h3>
              <p className="text-xs text-text-muted leading-relaxed mb-4">
                {item.description}
              </p>
            </div>
            <div className="pt-3 border-t border-stone-100 flex items-center justify-end">
              <Link
                href={`/articles/${item.slug}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary-dark group-hover:text-primary-main transition-all group-hover:translate-x-0.5"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Link
          href="/articles"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-main hover:text-primary-dark transition-colors"
        >
          <span>View All Health Guides</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
