// components/sections/ContactSection.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BUSINESS_INFO } from "@/constants";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real application, you'd send this data to a backend API or email service (e.g., Nodemailer, Formspree, Resend)
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({ name: "", email: "", message: "" }); // Clear form
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/20">
      <div className="container flex flex-col md:flex-row gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have a project in mind or just want to say hello? Fill out the form or reach out to us directly. We'd love to hear from you!
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-lg">
              <Mail className="h-6 w-6 text-primary" />
              <Link href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-primary transition-colors">
                {BUSINESS_INFO.email}
              </Link>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <Phone className="h-6 w-6 text-primary" />
              <Link href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-primary transition-colors">
                {BUSINESS_INFO.phone}
              </Link>
            </div>
            <div className="flex items-start gap-3 text-lg">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
          className="md:w-1/2 bg-card p-8 rounded-lg shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-base">Your Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-base">Your Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john.doe@example.com"
                required
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-base">Your Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or inquiry..."
                rows={5}
                required
                className="mt-2"
              />
            </div>
            <Button type="submit" className="w-full py-3 text-lg">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}