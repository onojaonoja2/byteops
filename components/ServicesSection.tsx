"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { SectionHeading } from "./SectionHeading";
import { SERVICES } from "@/lib/services";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ServicesSection({ preview = true }: { preview?: boolean }) {
  return (
    <section id="services" aria-labelledby="services-heading" className="relative overflow-hidden bg-background py-20 lg:py-24">
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.5] [background:var(--bg-grid-pattern)] [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />
      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading
          eyebrow="What we do"
          title="Digital services built for African businesses"
          description="Training, automation, web development, consultancy, and security — each with a dedicated page explaining deliverables, timelines, and FAQs."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s) => (
            <motion.article key={s.slug} variants={item} className="h-full">
              <Card className="group flex h-full flex-col rounded-2xl border bg-card p-2 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-byteops-primary/10 text-byteops-primary transition-transform group-hover:scale-110">
                    <s.icon size={24} aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl font-bold leading-snug">
                    <Link href={`/services/${s.slug}`} className="hover:text-byteops-primary">
                      {s.shortTitle}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription className="flex-1 text-[15px] leading-relaxed">{s.description}</CardDescription>
                  <Link
                    href={`/services/${s.slug}`}
                    aria-label={`Learn more about ${s.shortTitle}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-byteops-primary hover:gap-2.5"
                  >
                    Learn more <ArrowRight size={16} aria-hidden="true" className="transition-all" />
                  </Link>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </motion.div>
        {preview && (
          <div className="mt-10 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold hover:bg-muted">
              View all services <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
