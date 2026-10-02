import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { FaqList } from "@/components/FaqList";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQS } from "@/lib/services";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <TestimonialsSection />
      <section aria-labelledby="home-faq-heading" className="bg-card py-20 lg:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <SectionHeading
            eyebrow="FAQ"
            title="Quick answers before you ask"
            description="Pricing, timelines, and locations — citable by Google and AI assistants."
          />
          <div className="mt-8">
            <FaqList faqs={FAQS.slice(0, 5)} />
          </div>
          <p className="mt-6 text-center">
            <Link href="/faq" className="inline-flex items-center rounded-full border px-6 py-3 text-sm font-semibold hover:bg-muted">
              View all FAQs →
            </Link>
          </p>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
