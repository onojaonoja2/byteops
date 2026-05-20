"use client";

import { motion, Variants } from "framer-motion";
import { Card } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Amina Okafor",
    role: "CTO",
    company: "TechStart Nigeria",
    content: "ByteOps transformed our digital infrastructure. Their team delivered beyond our expectations with incredible attention to detail and professionalism.",
    rating: 5,
    avatar: "AO",
  },
  {
    name: "David Mensah",
    role: "Founder",
    company: "InnovateHub",
    content: "The AI automation solutions ByteOps provided saved us countless hours. Their expertise in digital transformation is unmatched in the region.",
    rating: 5,
    avatar: "DM",
  },
  {
    name: "Sarah Adeyemi",
    role: "Operations Manager",
    company: "GreenField Enterprises",
    content: "Outstanding training programs! Our team's productivity increased by 40% after ByteOps' capacity building workshops. Highly recommended.",
    rating: 5,
    avatar: "SA",
  },
  {
    name: "James Okonkwo",
    role: "CEO",
    company: "DataFlow Systems",
    content: "ByteOps' cybersecurity audit revealed critical vulnerabilities we hadn't considered. Their comprehensive approach to data protection is exemplary.",
    rating: 5,
    avatar: "JO",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-byteops-bg-light dark:bg-[hsl(220_30%_8%)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-byteops-primary via-byteops-magenta to-byteops-accent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-byteops-primary via-byteops-magenta to-byteops-accent bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Trusted by businesses across Africa to deliver exceptional digital solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className="relative p-8 h-full flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer border-2"
                style={{
                  borderColor: activeIndex === index ? "var(--byteops-primary)" : "transparent",
                }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="absolute top-4 right-4 text-byteops-primary/10 group-hover:text-byteops-primary/20 transition-colors">
                  <Quote size={48} />
                </div>

                <div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-byteops-accent text-byteops-accent"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-byteops-primary to-byteops-magenta flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-byteops-text-dark dark:text-byteops-text-light">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
