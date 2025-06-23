// components/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react"; // Import icons for visual appeal

export function AboutSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-byteops-bg-light to-byteops-primary/5 dark:from-byteops-base-dark dark:to-byteops-secondary/5
                 text-byteops-text-dark dark:text-byteops-text-light relative overflow-hidden" // Added gradient and overflow
    >
      {/* Optional: Add subtle background elements if desired, e.g., a blurred shape */}
      <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none">
        <svg className="h-full w-full" fill="none">
          <defs>
            <pattern id="grid-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0L0 0L0 20" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" className="text-byteops-primary dark:text-byteops-secondary" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10"> {/* Increased max-width for better spacing */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          // Heading text color - using a dark variant on light, and a prominent light on dark
          className="text-4xl sm:text-5xl font-extrabold text-center mb-16
                     text-gray-900 dark:text-byteops-accent" // Changed heading color for better contrast/pop
        >
          Discover ByteOps Digital Systems
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16"> {/* Used grid for better layout */}
          {/* Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
            className="bg-white dark:bg-gray-800 p-8 lg:p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300
                       border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center" // Enhanced styling, added flex for icon alignment
          >
            <div className="mb-4 text-byteops-primary dark:text-byteops-secondary">
              <Target size={50} strokeWidth={1.5} /> {/* Mission Icon */}
            </div>
            <h3
              className="text-3xl font-bold text-byteops-primary dark:text-byteops-secondary mb-4"
            >
              Our Mission
            </h3>
            <p
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed" // Adjusted text color for better readability
            >
              To empower businesses and individuals with cutting-edge digital solutions, practical training, and strategic guidance that drive innovation, efficiency, and growth.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
            className="bg-white dark:bg-gray-800 p-8 lg:p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300
                       border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center" // Enhanced styling, added flex for icon alignment
          >
            <div className="mb-4 text-byteops-secondary dark:text-byteops-primary">
              <Eye size={50} strokeWidth={1.5} /> {/* Vision Icon */}
            </div>
            <h3
              className="text-3xl font-bold text-byteops-secondary dark:text-byteops-primary mb-4"
            >
              Our Vision
            </h3>
            <p
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed" // Adjusted text color for better readability
            >
              To be Africa&apos;s leading catalyst for tech-enabled transformation, where digital tools and smart strategies fuel sustainable success across industries.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}