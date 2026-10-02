import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES, getService } from "@/lib/services";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.longDescription,
    keywords: s.keywords,
    alternates: { canonical: `https://byteops.digital/services/${s.slug}` },
    openGraph: {
      title: s.title,
      description: s.longDescription,
      url: `https://byteops.digital/services/${s.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const others = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://byteops.digital/services/${s.slug}`,
    name: s.shortTitle,
    description: s.longDescription,
    url: `https://byteops.digital/services/${s.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: "ByteOps Digital Systems",
      url: "https://byteops.digital",
      telephone: "+2347019091481",
      email: "info@byteops.digital",
      address: { "@type": "PostalAddress", addressLocality: "Abuja", addressCountry: "NG" },
    },
    areaServed: ["Abuja", "Nigeria", "West Africa"],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://byteops.digital" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://byteops.digital/services" },
      { "@type": "ListItem", position: 3, name: s.shortTitle, item: `https://byteops.digital/services/${s.slug}` },
    ],
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />

      <div className="bg-byteops-base-dark text-white">
        <div className="container mx-auto px-4 py-14">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/services" className="hover:text-white">Services</Link> / {s.shortTitle}
          </nav>
          <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-byteops-accent">
            {s.keywords[0]}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-balance text-3xl font-extrabold sm:text-4xl lg:text-5xl">{s.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">{s.longDescription}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-byteops-accent text-byteops-base-dark hover:bg-byteops-accent/90">
              <Link href="/contact">Get a free quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white">
              <Link href="/services">← All services</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid gap-6 px-4 py-12 lg:grid-cols-[1fr_360px]">
        <article>
          <h2 className="font-display text-2xl font-bold">What you get</h2>
          <ul className="mt-4 space-y-2.5">
            {s.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 rounded-2xl border bg-card p-4">
                <CheckCircle2 size={19} aria-hidden="true" className="mt-0.5 shrink-0 text-byteops-secondary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <h2 className="font-display mt-10 text-2xl font-bold">Deliverables</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {s.deliverables.map((d) => (
              <li key={d} className="rounded-full border bg-muted px-4 py-1.5 text-sm font-medium">{d}</li>
            ))}
          </ul>
          <h2 className="font-display mt-10 text-2xl font-bold">FAQs</h2>
          <div className="mt-4 space-y-3">
            {s.faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border bg-card p-5">
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-1.5 text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </article>
        <aside className="h-fit rounded-3xl border bg-card p-6 lg:sticky lg:top-28" aria-label="Next steps">
          <h2 className="font-display text-lg font-bold">Start this service</h2>
          <p className="mt-2 text-sm text-muted-foreground">Free consultation. Response within 24 hours.</p>
          <Link href="/contact" className="mt-4 block">
            <Button className="w-full rounded-full bg-byteops-primary text-white">Contact us <ArrowRight size={16} aria-hidden="true" /></Button>
          </Link>
          <Link
            href={`https://wa.me/2347019091481?text=${encodeURIComponent(`Hello ByteOps! I'm interested in ${s.shortTitle}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-center rounded-full border py-2.5 text-sm font-semibold hover:bg-muted"
          >
            WhatsApp us
          </Link>
          <div className="mt-6 border-t pt-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Related</h3>
            <ul className="mt-3 space-y-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/services/${o.slug}`} className="text-sm font-medium hover:text-byteops-primary">
                    {o.shortTitle} →
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/services" className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft size={15} aria-hidden="true" /> Back to all services
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
