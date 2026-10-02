import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact ByteOps | Free Consultation in Abuja, Nigeria",
  description:
    "Contact ByteOps Digital Systems for tech training, websites, AI automation, and consultancy. WhatsApp +234 701 909 1481 or info@byteops.digital. Response within 24 hours.",
  alternates: { canonical: "https://byteops.digital/contact" },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact ByteOps Digital Systems",
    url: "https://byteops.digital/contact",
  };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 pt-12">
        <nav aria-label="Breadcrumb" className="mb-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:underline">Home</Link> <span aria-hidden="true">/</span> Contact
        </nav>
      </div>
      <div>
        <ContactSection preview={false} />
      </div>
    </main>
  );
}
