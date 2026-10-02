import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsSection } from "@/components/StatsSection";

export const metadata: Metadata = {
  title: "About ByteOps Digital Systems | Abuja Tech and Training Company",
  description:
    "ByteOps Digital Systems is an Abuja-based tech company offering training, AI automation, web development, consultancy, and cybersecurity across Nigeria and Africa.",
  alternates: { canonical: "https://byteops.digital/about" },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About ByteOps Digital Systems",
    url: "https://byteops.digital/about",
    about: { "@type": "Organization", name: "ByteOps Digital Systems", url: "https://byteops.digital" },
  };
  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-14">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:underline">Home</Link> <span aria-hidden="true">/</span> About
        </nav>
        <SectionHeading
          eyebrow="About us"
          title="Africa's catalyst for tech-enabled transformation"
          description="Our mission: empower businesses and individuals with cutting-edge digital solutions, practical training, and strategic guidance."
          align="left"
        />
        <article className="mt-8 max-w-3xl space-y-6 leading-relaxed text-foreground/90">
          <p>
            ByteOps Digital Systems was founded in Abuja, Nigeria to close the gap between ambitious
            businesses and the technology they need. We combine training, consultancy, engineering,
            and AI into one partner, so a startup, SME, or professional can learn, launch, automate,
            and stay secure without juggling five vendors.
          </p>
          <h2 className="font-display pt-2 text-2xl font-bold">Our mission</h2>
          <p>
            To empower businesses and individuals with cutting-edge digital solutions, practical
            training, and strategic guidance that drive innovation, efficiency, and growth.
          </p>
          <h2 className="font-display pt-2 text-2xl font-bold">Our vision</h2>
          <p>
            To be Africa&apos;s leading catalyst for tech-enabled transformation, where digital tools
            and smart strategies fuel sustainable success across industries.
          </p>
          <h2 className="font-display pt-2 text-2xl font-bold">Where we work</h2>
          <p>Abuja, Federal Capital Territory, Nigeria. We work in person and remotely across Nigeria, West Africa, and worldwide.</p>
        </article>
      </div>
      <StatsSection />
      <div className="container mx-auto px-4 py-12 text-center">
        <Link href="/contact" className="inline-flex items-center rounded-full bg-byteops-primary px-7 py-3 font-semibold text-white hover:bg-byteops-primary/90">
          Work with us →
        </Link>
      </div>
    </main>
  );
}
