import type { MetadataRoute } from "next";

const SITE = "https://byteops.digital";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // Explicitly welcome AI search crawlers so ChatGPT / Perplexity / Claude can cite us
      {
        userAgent: ["GPTBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot", "Google-Extended", "Bingbot", "Applebot-Extended"],
        allow: "/",
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
  };
}
