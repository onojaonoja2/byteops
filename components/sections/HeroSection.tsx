// components/sections/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BUSINESS_INFO } from "@/constants";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-purple-950 opacity-90 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] dark:bg-[url('/grid-dark.svg')] bg-repeat opacity-10 -z-10"></div>

      <div className="container relative z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6"
          >
            {BUSINESS_INFO.motto.split(":")[0]}{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
              {BUSINESS_INFO.motto.split(":")[1]}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {BUSINESS_INFO.mission}
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center">
            <Button asChild size="lg" className="px-8 py-3 text-lg">
              <Link href="#services">Our Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-3 text-lg">
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}