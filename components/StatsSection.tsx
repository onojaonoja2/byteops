"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Briefcase, Award, Globe } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: StatItem[] = [
  { icon: Users, value: 20, suffix: "+", label: "Clients Served", color: "text-byteops-primary" },
  { icon: Briefcase, value: 50, suffix: "+", label: "Projects Completed", color: "text-byteops-secondary" },
  { icon: Award, value: 99, suffix: "%", label: "Client Satisfaction", color: "text-byteops-accent" },
  { icon: Globe, value: 5, suffix: "+", label: "Countries Reached", color: "text-byteops-magenta" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-byteops-base-dark via-[hsl(220_30%_12%)] to-byteops-base-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,var(--byteops-primary)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,var(--byteops-accent)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <div className={`${stat.color} mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                <stat.icon size={48} strokeWidth={1.5} />
              </div>
              <motion.div
                className="text-4xl sm:text-5xl font-extrabold text-byteops-text-light mb-2"
                whileHover={{ scale: 1.05 }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </motion.div>
              <p className="text-byteops-text-light/70 text-sm sm:text-base font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
