import type { MetadataRoute } from 'next';
import { articles } from '@/data/articles';
import { caseStudies } from '@/data/case-studies';

const BASE = 'https://kumadesign.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, priority: 1 },
    { url: `${BASE}/work`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/services`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/process`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/about`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, priority: 0.8 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE}/blog/${article.slug}`,
    lastModified: new Date(article.published),
    priority: article.audience === 'business' ? 0.8 : 0.5,
  }));

  const caseRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${BASE}/work/${c.slug}`,
    lastModified: now,
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes, ...caseRoutes];
}
