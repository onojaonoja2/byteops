import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";

const SITE = "https://byteops.digital";
const UPDATED = new Date("2026-10-02");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: SITE, priority: 1, changeFrequency: "weekly" as const },
    { url: `${SITE}/services`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${SITE}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE}/faq`, priority: 0.8, changeFrequency: "monthly" as const },
  ].map((r) => ({ ...r, lastModified: UPDATED }));

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${SITE}/services/${s.slug}`,
    lastModified: UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
