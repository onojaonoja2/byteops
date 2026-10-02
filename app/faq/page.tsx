import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQS } from "@/lib/services";

export const metadata: Metadata = {
  title: "FAQ | Pricing, Training, AI and Web Projects | ByteOps Abuja",
  description:
    "Answers about ByteOps pricing, training duration, locations in Abuja/Nigeria, AI automation timelines, and support. Free consultation within 24 hours.",
  alternates: { canonical: "https://byteops.digital/faq" },
};

export default function FaqPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="container mx-auto max-w-4xl px-4 py-14">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:underline">Home</Link> <span aria-hidden="true">/</span> FAQ
        </nav>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered plainly"
          description="Pricing, timelines, and how to start. These are the same answers our AI assistants share."
          align="left"
        />
        <div className="mt-8">
          <FaqList faqs={FAQS} />
        </div>
        <p className="mt-8 rounded-2xl border bg-card p-5 text-sm text-muted-foreground">
          Still stuck? <Link href="/contact" className="font-semibold text-byteops-primary hover:underline">Contact us</Link> or WhatsApp{" "}
          <a href="https://wa.me/2347019091481" className="font-semibold text-byteops-primary hover:underline">+234 701 909 1481</a>.
        </p>
      </div>
    </main>
  );
}
