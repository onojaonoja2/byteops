"use client";

import { motion, type Variants } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card } from "./ui/card";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    name: "Amina Okafor",
    role: "CTO",
    company: "TechStart Nigeria",
    content:
      "ByteOps transformed our digital infrastructure. Their team delivered beyond our expectations with incredible attention to detail and professionalism.",
    rating: 5,
    initials: "AO",
  },
  {
    name: "David Mensah",
    role: "Founder",
    company: "InnovateHub",
    content:
      "The AI automation solutions ByteOps provided saved us countless hours. Their expertise in digital transformation is unmatched in the region.",
    rating: 5,
    initials: "DM",
  },
  {
    name: "Sarah Adeyemi",
    role: "Operations Manager",
    company: "GreenField Enterprises",
    content:
      "Outstanding training programs! Our team's productivity increased by 40% after ByteOps' capacity building workshops. Highly recommended.",
    rating: 5,
    initials: "SA",
  },
  {
    name: "James Okonkwo",
    role: "CEO",
    company: "DataFlow Systems",
    content:
      "ByteOps' cybersecurity audit revealed critical vulnerabilities we hadn't considered. Their comprehensive approach to data protection is exemplary.",
    rating: 5,
    initials: "JO",
  },
];

export function TestimonialsSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <section aria-labelledby="testimonials-heading" className="relative overflow-hidden bg-background py-20 lg:py-24">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-byteops-primary via-byteops-magenta to-byteops-accent" />
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Client stories"
          title="What our clients say"
          description="Trusted by businesses across Africa to deliver exceptional digital solutions."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {testimonials.map((t) => (
            <motion.figure key={t.name} variants={item}>
              <Card className="relative h-full rounded-2xl border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-xl">
                <Quote size={36} aria-hidden="true" className="absolute right-5 top-5 text-byteops-primary/15" />
                <div className="mb-3 flex gap-1" role="img" aria-label={`Rated ${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={18} aria-hidden="true" className="fill-byteops-accent text-byteops-accent" />
                  ))}
                </div>
                <blockquote className="leading-relaxed text-foreground/85">&ldquo;{t.content}&rdquo;</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span aria-hidden="true" className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-byteops-primary to-byteops-magenta text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    <span className="block text-sm text-muted-foreground">
                      {t.role}, {t.company}
                    </span>
                  </span>
                </figcaption>
              </Card>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
