"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { ContactForm } from "./ContactForm";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./ui/button";

const WA = "2347019091481";

export function ContactSection({ preview = true }: { preview?: boolean }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqs = [
    {
      q: "How fast will you respond?",
      a: "Within 24 hours — usually same day on WhatsApp at +234 701 909 1481.",
    },
    {
      q: "Do you work outside Abuja?",
      a: "Yes. In-person in Abuja FCT and remote across Nigeria, Africa, and worldwide.",
    },
    {
      q: "How do we start?",
      a: "Send the form or WhatsApp us. We offer a free consultation, then a clear quote with milestones.",
    },
  ];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-byteops-base-dark py-20 text-white lg:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Get started"
          title="Let's build something great"
          description="Questions, quotes, training, or partnerships — reach out via the form or WhatsApp for the fastest reply."
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 text-byteops-text-dark sm:p-8">
            <ContactForm />
          </div>
          <div className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold">Instant contact</h3>
            <p className="mt-2 text-white/70">
              Prefer chat? Message us directly — typical response time within 24 hours.
            </p>
            <Link
              href={`https://wa.me/${WA}?text=${encodeURIComponent("Hello ByteOps! I'd like to inquire about your services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5"
            >
              <Button className="w-full rounded-full bg-[#25D366] py-5 text-base font-semibold text-white hover:bg-[#1DA851]">
                <FaWhatsapp size={20} aria-hidden="true" /> Chat on WhatsApp
              </Button>
            </Link>
            <address className="mt-5 space-y-2 text-sm not-italic text-white/75">
              <p>
                Email: <a className="underline hover:text-white" href="mailto:info@byteops.digital">info@byteops.digital</a>
              </p>
              <p>
                Phone: <a className="underline hover:text-white" href="tel:+2347019091481">+234 701 909 1481</a>
              </p>
              <p>Abuja, Federal Capital Territory, Nigeria</p>
            </address>
            <div className="mt-6 border-t border-white/10 pt-5">
              <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/60">
                <MessageCircle size={15} aria-hidden="true" /> Quick answers
              </h4>
              <div className="mt-3 space-y-2">
                {faqs.map((f, i) => (
                  <div key={f.q} className="rounded-2xl border border-white/10">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold"
                    >
                      {f.q}
                      <ChevronDown size={16} aria-hidden="true" className={openFaq === i ? "rotate-180" : ""} />
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === i && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden px-4 pb-3 text-sm text-white/70"
                        >
                          {f.a}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
            {preview && (
              <Link href="/contact" className="mt-5 text-sm font-semibold text-byteops-accent hover:underline">
                Open full contact page →
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
