"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Award, Briefcase, Globe, Users } from "lucide-react";

const stats = [
  { icon: Users, value: 20, suffix: "+", label: "Clients Served" },
  { icon: Briefcase, value: 50, suffix: "+", label: "Projects Completed" },
  { icon: Award, value: 99, suffix: "%", label: "Client Satisfaction" },
  { icon: Globe, value: 5, suffix: "+", label: "Countries Reached" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value);
      return;
    }
    let start: number | undefined;
    let raf = 0;
    const tick = (t: number) => {
      if (start === undefined) start = t;
      const p = Math.min((t - start) / 1600, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <section aria-label="ByteOps in numbers" className="relative overflow-hidden border-y bg-card py-14">
      <div className="container mx-auto px-4">
        <motion.dl
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={item} className="text-center">
              <s.icon size={32} aria-hidden="true" className="mx-auto mb-3 text-byteops-primary" />
              <dd className="font-display text-4xl font-extrabold">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-1 text-sm font-medium text-muted-foreground">{s.label}</dt>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
