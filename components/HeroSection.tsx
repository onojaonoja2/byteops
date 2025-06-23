// components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Laptop,
  Cloud,
  Shield,
  Cpu,
  Server,
  Infinity,
  Activity,
  Lightbulb,
  Code,
  Globe,
  Atom,
} from "lucide-react";

// Define a type for the animated background icons
type FloatingIcon = {
  icon: React.ElementType;
  size: number;
  position: { top?: string; left?: string; right?: string; bottom?: string };
  delay: number;
  animationDuration: number;
  opacity: number;
  // New: add custom animation properties if needed per icon
  animateConfig?: { y?: number[]; x?: number[]; rotate?: number[]; scale?: number[] };
  transitionConfig?: { duration?: number; ease?: string; repeat?: number; repeatType?: string; delay?: number };
};

// Array of icons with their properties for animation and placement
const floatingIcons: FloatingIcon[] = [
  // Existing icons with enhanced animations
  {
    icon: Laptop,
    size: 50,
    position: { top: "10%", left: "15%" },
    delay: 0,
    animationDuration: 12, // Increased duration for smoother, longer float
    opacity: 0.15,
    animateConfig: {
      y: [0, -25, 0, 15, 0], // More complex vertical path
      x: [0, 15, -10, 5, 0], // More complex horizontal path
      rotate: [0, 10, -5, 0],
      scale: [1, 1.05, 1], // Slight breathing effect
    },
  },
  {
    icon: Cloud,
    size: 70,
    position: { bottom: "5%", right: "10%" },
    delay: 2.5, // Adjusted delay
    animationDuration: 14, // Increased duration
    opacity: 0.12,
    animateConfig: {
      y: [0, 20, -10, 0],
      x: [0, -15, 10, 0],
      rotate: [0, -8, 8, 0],
      scale: [1, 0.98, 1], // Slight "pulsing" inward
    },
  },
  {
    icon: Shield,
    size: 60,
    position: { top: "30%", right: "20%" },
    delay: 4.5,
    animationDuration: 10,
    opacity: 0.18,
    animateConfig: {
      y: [0, 10, -10, 0],
      x: [0, -5, 5, 0],
      rotate: [0, 15, -15, 0],
    },
  },
  {
    icon: Cpu,
    size: 80,
    position: { bottom: "20%", left: "25%" },
    delay: 1.5,
    animationDuration: 13,
    opacity: 0.14,
    animateConfig: {
      y: [0, -10, 20, 0],
      x: [0, 10, -20, 0],
      rotate: [0, 5, -10, 0],
      scale: [1, 1.03, 1],
    },
  },
  {
    icon: Server,
    size: 55,
    position: { top: "50%", left: "5%" },
    delay: 3.5,
    animationDuration: 9,
    opacity: 0.15,
    animateConfig: {
      y: [0, -10, 0, 10, 0],
      x: [0, 5, -5, 0],
      rotate: [0, 3, -3, 0],
    },
  },
  {
    icon: Infinity,
    size: 75,
    position: { top: "15%", right: "5%" },
    delay: 5.5,
    animationDuration: 15,
    opacity: 0.11,
    animateConfig: {
      y: [0, 25, 0, -15, 0],
      x: [0, -20, 10, 0],
      rotate: [0, -10, 5, 0],
      scale: [1, 1.02, 1],
    },
  },
  {
    icon: Activity,
    size: 65,
    position: { bottom: "10%", left: "50%" },
    delay: 6.5,
    animationDuration: 11,
    opacity: 0.16,
    animateConfig: {
      y: [0, -15, 15, 0],
      x: [0, 10, -5, 0],
      rotate: [0, 7, -7, 0],
    },
  },
  {
    icon: Lightbulb,
    size: 45,
    position: { top: "70%", left: "80%" },
    delay: 1.8,
    animationDuration: 10,
    opacity: 0.13,
    animateConfig: {
      y: [0, 10, -5, 0],
      x: [0, -5, 5, 0],
      rotate: [0, 12, -12, 0],
      scale: [1, 0.97, 1],
    },
  },
  {
    icon: Code,
    size: 70,
    position: { top: "5%", right: "40%" },
    delay: 3.8,
    animationDuration: 12.5,
    opacity: 0.17,
    animateConfig: {
      y: [0, -10, 10, 0],
      x: [0, 5, -5, 0],
      rotate: [0, -6, 6, 0],
    },
  },

  // --- NEW ICONS FOR DENSER BACKGROUND with varied animations ---
  {
    icon: Globe,
    size: 60,
    position: { bottom: "30%", right: "35%" },
    delay: 0.8,
    animationDuration: 11.5,
    opacity: 0.16,
    animateConfig: {
      y: [0, 18, -8, 0],
      x: [0, -8, 12, 0],
      rotate: [0, 9, -9, 0],
      scale: [1, 1.04, 1],
    },
  },
  {
    icon: Atom,
    size: 50,
    position: { top: "45%", right: "10%" },
    delay: 2.8,
    animationDuration: 9.5,
    opacity: 0.14,
    animateConfig: {
      y: [0, -12, 8, 0],
      x: [0, 7, -7, 0],
      rotate: [0, -10, 10, 0],
    },
  },
  {
    icon: Cloud, // Another cloud for density
    size: 40,
    position: { top: "85%", left: "10%" },
    delay: 4.8,
    animationDuration: 13.5,
    opacity: 0.12,
    animateConfig: {
      y: [0, 15, -10, 0],
      x: [0, 10, -5, 0],
      rotate: [0, 4, -4, 0],
      scale: [1, 0.99, 1],
    },
  },
  {
    icon: Laptop, // Another laptop for density
    size: 60,
    position: { bottom: "15%", left: "70%" },
    delay: 1.2,
    animationDuration: 10.8,
    opacity: 0.18,
    animateConfig: {
      y: [0, -8, 18, 0],
      x: [0, -10, 8, 0],
      rotate: [0, -7, 7, 0],
      scale: [1, 1.06, 1],
    },
  },
  {
    icon: Cpu, // Another CPU for density
    size: 45,
    position: { top: "60%", left: "60%" },
    delay: 7,
    animationDuration: 14,
    opacity: 0.13,
    animateConfig: {
      y: [0, 20, -10, 0],
      x: [0, 10, -15, 0],
      rotate: [0, 8, -8, 0],
    },
  },
  {
    icon: Shield, // Another Shield for density
    size: 55,
    position: { top: "20%", left: "70%" },
    delay: 0.2,
    animationDuration: 9,
    opacity: 0.17,
    animateConfig: {
      y: [0, -10, 10, 0],
      x: [0, 5, -5, 0],
      rotate: [0, -12, 12, 0],
    },
  },
];

export function HeroSection() {
  // Split the motto into words for individual animation
  const mottoWords = "“Simplifying Tech, Amplifying Impact.”".split(" ");

  // Framer Motion variants for individual words in the motto
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonClasses = `
    bg-byteops-accent hover:bg-byteops-accent/80
    text-byteops-text-dark font-semibold py-3 px-8 text-lg rounded-full
    shadow-lg transition-all transform hover:scale-105
    border border-transparent
  `;

  return (
    <section
      className="relative h-screen flex items-center justify-center text-center overflow-hidden
                 bg-byteops-base-dark"
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(0, 100, 200, 0.15) 0%, transparent 70%)`,
        backgroundSize: "200% 200%",
        backgroundPosition: "center center",
      }}
    >
      {/* Animated background icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-byteops-text-light"
          style={{
            ...item.position,
            opacity: item.opacity,
            zIndex: 0,
          }}
          animate={item.animateConfig || { // Use custom animateConfig or default if not provided
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={item.transitionConfig || { // Use custom transitionConfig or default if not provided
            duration: item.animationDuration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: item.delay,
          }}
        >
          <item.icon size={item.size} />
        </motion.div>
      ))}

      {/* Main content of the Hero Section (text and buttons) */}
      <div className="relative z-10 p-4 md:p-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
        >
          Powering Africa&apos;s Digital Future
        </motion.h1>

        {/* Prominent and Stylish Motto */}
        <motion.p
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-byteops-accent tracking-wide mb-8 drop-shadow-lg"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.05 }}
        >
          {mottoWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-bold"
        >
          Empowering businesses and individuals with cutting-edge digital
          solutions, practical training, and strategic guidance.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/#services">
            <Button className={buttonClasses}>
              Explore Services
            </Button>
          </Link>
          <Link href="/#contact">
            <Button className={buttonClasses}>
              Get a Free Consultation
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}