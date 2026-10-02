import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ByteOps Digital Systems",
    short_name: "ByteOps",
    description: "Tech training, AI automation, web development & IT consultancy in Abuja, Nigeria.",
    start_url: "/",
    scope: "/",
    id: "/",
    display: "standalone",
    lang: "en-NG",
    background_color: "#1A2A3A",
    theme_color: "#007BFF",
    categories: ["business", "education", "technology"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/byte_favicon.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/byte.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
    shortcuts: [
      { name: "Services", url: "/services", description: "View our tech services" },
      { name: "Contact Us", url: "/contact", description: "Get in touch" },
    ],
  };
}
