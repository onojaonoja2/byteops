// components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { RainfallEffect } from "./RainfallEffect";
export function HeroSection() {
  // Split the motto into words for individual animation
  const mottoWords = "'Simplifying Tech, Amplifying Impact.'".split(" ");

  // Framer Motion variants for individual words in the motto
  const wordVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden
                 bg-byteops-base-dark py-20"
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(0, 100, 200, 0.15) 0%, transparent 70%)`,
        backgroundSize: "200% 200%",
        backgroundPosition: "center center",
      }}
    >
      {/* Rainfall background effect */}
      <RainfallEffect />

      {/* Main content of the Hero Section (text and buttons) */}
      <div className="relative z-10 p-4 md:p-8 max-w-4xl mx-auto">
        {/* Prominent and Stylish Motto */}
        <motion.p
          className="text-3xl sm:text-4xl md:text-5xl font-black text-byteops-accent tracking-wider mb-8 drop-shadow-2xl"
          initial="hidden"
          animate="visible"
        >
          {mottoWords.map((word, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={wordVariants}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-8"
          style={{
            background: "linear-gradient(135deg, #007BFF, #FF00FF, #FFAB00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Powering Africa&apos;s Digital Future
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
          className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto font-bold text-byteops-text-light/90"
        >
          Empowering businesses and individuals with cutting-edge digital
          solutions, practical training, and strategic guidance.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/#services">
            <Button className={`
              bg-gradient-to-r from-byteops-primary to-byteops-magenta hover:from-byteops-magenta hover:to-byteops-primary
              text-white font-semibold py-3 px-8 text-lg rounded-full
              shadow-lg transition-all transform hover:scale-105 hover:shadow-xl
              border border-transparent
            `}>
              Explore Services
            </Button>
          </Link>
          <Link href="/#contact">
            <Button className={`
              bg-gradient-to-r from-byteops-accent to-byteops-secondary hover:from-byteops-secondary hover:to-byteops-accent
              text-byteops-text-dark font-semibold py-3 px-8 text-lg rounded-full
              shadow-lg transition-all transform hover:scale-105 hover:shadow-xl
              border border-transparent
            `}>
              Get a Free Consultation
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
