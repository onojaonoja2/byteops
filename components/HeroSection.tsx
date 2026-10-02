"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { RainfallEffect } from "./RainfallEffect";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-byteops-base-dark text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(0,123,255,0.28) 0%, transparent 70%), radial-gradient(40% 35% at 85% 80%, rgba(214,0,214,0.18) 0%, transparent 70%), radial-gradient(40% 35% at 10% 85%, rgba(255,171,0,0.14) 0%, transparent 70%)",
        }}
      />
      <RainfallEffect />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-4 pb-20 pt-14 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex flex-wrap items-center gap-2"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90">
              <MapPin size={14} aria-hidden="true" /> Abuja, Nigeria — serving Africa & remote worldwide
            </span>
            <span className="inline-flex items-center rounded-full bg-byteops-accent px-3 py-1.5 text-xs font-bold text-byteops-base-dark">
              Simplifying Tech, Amplifying Impact
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display max-w-2xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Tech Training & Digital Solutions in Abuja, Nigeria
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg"
          >
            ByteOps Digital Systems helps businesses and individuals grow with practical tech training, AI
            automation, custom web & app development, IT consultancy, and cybersecurity — powering
            Africa&apos;s digital future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild size="lg" className="rounded-full bg-byteops-primary px-7 text-white hover:bg-byteops-primary/90">
              <Link href="/services">
                Explore Services <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <Link href="/contact">
                <MessageCircle size={18} aria-hidden="true" /> Get a Free Consultation
              </Link>
            </Button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70"
          >
            <div className="flex items-center gap-2">
              <dt className="font-bold text-white">50+</dt>
              <dd>projects delivered</dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="font-bold text-white">99%</dt>
              <dd>client satisfaction</dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="font-bold text-white">24h</dt>
              <dd>response time</dd>
            </div>
          </motion.dl>
        </div>

        <motion.aside
          aria-label="Why ByteOps"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="rounded-3xl border border-white/12 bg-white/[0.07] p-6 backdrop-blur-md sm:p-7"
        >
          <h2 className="font-display text-lg font-bold">What we do, in plain terms</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
            <li><strong className="text-white">Train</strong> — ICT, software & AI skills that get you hired or upskill your team.</li>
            <li><strong className="text-white">Automate</strong> — WhatsApp bots, reports & workflows that save hours weekly.</li>
            <li><strong className="text-white">Build</strong> — fast websites, stores & apps with payments and SEO built in.</li>
            <li><strong className="text-white">Secure</strong> — audits & NDPR compliance that protect your business.</li>
          </ul>
          <div className="mt-6 rounded-2xl bg-byteops-accent/15 p-4 text-sm text-white/85">
            New here? Start with a free 15-minute call — we&apos;ll map the cheapest path to your goal.
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
