// components/sections/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import { BUSINESS_INFO } from "@/constants";

export default function AboutSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-primary">{BUSINESS_INFO.name.split(" ")[0]}</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            At {BUSINESS_INFO.name}, we believe in the power of technology to transform businesses and lives. Our journey began with a vision to simplify complex digital challenges and amplify the impact of innovation across industries.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            {BUSINESS_INFO.mission} We are committed to fostering growth, enhancing efficiency, and building robust digital foundations for our clients.
          </p>
          <p className="text-lg font-semibold text-foreground">
            Our Vision: <span className="text-primary">{BUSINESS_INFO.vision}</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          {/* Placeholder for an image or illustration */}
          <div className="bg-gradient-to-br from-primary/20 to-purple-400/20 rounded-lg p-8 w-full max-w-md aspect-video flex items-center justify-center text-muted-foreground/50 text-xl font-bold">
            [Innovation Illustration Placeholder]
          </div>
        </motion.div>
      </div>
    </section>
  );
}