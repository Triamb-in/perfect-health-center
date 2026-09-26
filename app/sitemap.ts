import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://perfecthealthcenter.in";
  // Use stable, calibrated revision dates rather than dynamic new Date()
  // to avoid sending false timestamp churn signals to Google Search Console
  const lastSiteUpdate = new Date("2026-09-20T00:00:00.000Z");
  const lastArticleUpdate = new Date("2026-09-15T00:00:00.000Z");
  const lastLegalUpdate = new Date("2026-08-01T00:00:00.000Z");

  return [
    {
      url: `${baseUrl}/`,
      lastModified: lastSiteUpdate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastSiteUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastSiteUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: lastSiteUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: lastArticleUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastSiteUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/benefits-of-homeopathy-for-chronic-illness`,
      lastModified: lastArticleUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/pediatric-care-homeopathy`,
      lastModified: lastArticleUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/benefits-of-homeopathy-2026`,
      lastModified: lastArticleUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/understanding-constitutional-homeopathy`,
      lastModified: lastArticleUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: lastLegalUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-use`,
      lastModified: lastLegalUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: lastLegalUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: lastSiteUpdate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
