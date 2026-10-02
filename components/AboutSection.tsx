"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Eye, Target, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function AboutSection({ preview = true }: { preview?: boolean }) {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-byteops-base-dark py-20 text-white lg:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Who we are"
          title="Discover ByteOps Digital Systems"
          description="Based in Abuja, Nigeria, we help businesses and individuals grow with practical digital solutions, hands-on training, and clear strategic guidance."
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm"
          >
            <Target size={40} strokeWidth={1.5} aria-hidden="true" className="text-byteops-accent" />
            <h3 className="font-display mt-4 text-2xl font-bold">Our Mission</h3>
            <p className="mt-3 leading-relaxed text-white/75">
              To empower businesses and individuals with cutting-edge digital solutions, practical
              training, and strategic guidance that drive innovation, efficiency, and growth.
            </p>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm"
          >
            <Eye size={40} strokeWidth={1.5} aria-hidden="true" className="text-byteops-primary" />
            <h3 className="font-display mt-4 text-2xl font-bold">Our Vision</h3>
            <p className="mt-3 leading-relaxed text-white/75">
              To be Africa&apos;s leading catalyst for tech-enabled transformation, where digital tools
              and smart strategies fuel sustainable success across industries.
            </p>
          </motion.article>
        </div>
        {preview && (
          <div className="mt-10 text-center">
            <Link href="/about" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20">
              More about us <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
