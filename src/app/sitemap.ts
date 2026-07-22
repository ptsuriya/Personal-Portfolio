import type { MetadataRoute } from 'next';
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
    { url: `${BASE}/blog`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/blog/rbruskill`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/blog/opencode-opendesign`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/blog/obsidian`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/blog/docmd`, lastModified: now, priority: 0.7 },
  ];

  const caseRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${BASE}/work/${c.slug}`,
    lastModified: now,
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseRoutes];
}
