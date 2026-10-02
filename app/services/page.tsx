import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Our Services — Tech Training, AI, Web Development in Abuja",
  description:
    "Explore ByteOps services: tech training, IT consultancy, AI automation, web & app development, business advisory, and cybersecurity in Abuja, Nigeria.",
  alternates: { canonical: "https://byteops.digital/services" },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ByteOps Digital Systems Services",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        "@id": `https://byteops.digital/services/${s.slug}`,
        name: s.shortTitle,
        description: s.description,
        url: `https://byteops.digital/services/${s.slug}`,
        provider: { "@type": "Organization", name: "ByteOps Digital Systems" },
        areaServed: "Nigeria",
      },
    })),
  };
  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-14">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:underline">Home</Link> <span aria-hidden="true">/</span> Services
        </nav>
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to launch, automate, and grow"
          description="Each service has its own page with deliverables, timelines, and FAQs — built for clarity for humans and AI search alike."
          align="left"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.slug} className="flex flex-col rounded-3xl border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-byteops-primary/10 text-byteops-primary">
                <s.icon size={24} aria-hidden="true" />
              </span>
              <h2 className="font-display mt-4 text-xl font-bold">
                <Link href={`/services/${s.slug}`} className="hover:text-byteops-primary">
                  {s.shortTitle}
                </Link>
              </h2>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted-foreground">{s.longDescription}</p>
              <Link href={`/services/${s.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-byteops-primary">
                View details <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
