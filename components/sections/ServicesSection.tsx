// components/sections/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICE_OFFERINGS } from "@/constants";
import {
  Code, Lightbulb, TrendingUp, Laptop, Brain, // Example Lucide icons
} from "lucide-react";

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "code": return <Code className="h-8 w-8 text-primary" />;
    case "consult": return <Lightbulb className="h-8 w-8 text-primary" />;
    case "ai": return <Brain className="h-8 w-8 text-primary" />;
    case "web": return <Laptop className="h-8 w-8 text-primary" />;
    case "innovate": return <TrendingUp className="h-8 w-8 text-primary" />;
    default: return <Code className="h-8 w-8 text-primary" />;
  }
};

export default function ServicesSection() {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/20">
      <div className="container text-center">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Our Core <span className="text-primary">Services</span>
        </motion.h2>
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          ByteOps Digital Systems offers a comprehensive suite of services designed to propel your business forward in the digital age.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICE_OFFERINGS.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col justify-between p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader className="p-0 mb-4">
                  <div className="flex justify-center items-center h-16 w-16 bg-primary/10 rounded-full mx-auto mb-4">
                    {getIconComponent(service.icon)}
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}