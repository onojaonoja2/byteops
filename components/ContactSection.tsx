// components/ContactSection.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
import { ContactForm } from './ContactForm'; // Import the new ContactForm
import { Mail, Phone } from 'lucide-react'; // Adding more icons for general contact info

export function ContactSection() {
  // Replace with your actual WhatsApp number, including country code (without +, or spaces)
  const whatsappNumber = "2347080904982"; // Example: Nigeria +234
  const whatsappMessage = "Hello ByteOps! I'd like to inquire about your services.";

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-byteops-bg-light to-byteops-primary/5 dark:from-byteops-base-dark dark:to-byteops-secondary/5
                 text-byteops-text-dark dark:text-byteops-text-light relative overflow-hidden" // Added gradient and overflow
    >
      {/* Optional: Add subtle background elements if desired (like in AboutSection) */}
      <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none">
        <svg className="h-full w-full" fill="none">
          <defs>
            <pattern id="contact-grid-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0L0 0L0 20" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid-pattern)" className="text-byteops-primary dark:text-byteops-secondary" />
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center max-w-6xl relative z-10"> {/* Increased max-width */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-byteops-accent mb-6" // Using same striking heading colors as About section
        >
          Let&apos;s Connect!
        </motion.h2>
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto" // Adjusted text and added max-width for better line length
        >
          Whether you have a question, need a consultation, or just want to say hello, we&apos;re here to help. Reach out to us through the form below or connect via WhatsApp!
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-stretch md:space-x-10 space-y-10 md:space-y-0"> {/* items-stretch to make cards same height */}
          {/* Contact Form Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            className="w-full md:w-1/2 flex flex-col p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300
                       bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700" // Styled the form container as a card
          >
            {/* REMOVED: The <h3> "Send Us a Message" heading was here */}
            <ContactForm />
          </motion.div>

          {/* WhatsApp & Other Contact Info Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }} // Staggered animation
            className="w-full md:w-1/2 flex flex-col items-center justify-center text-center
                       bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300
                       border border-gray-200 dark:border-gray-700" // Consistent card styling
          >
            <h3 className="text-3xl font-bold text-byteops-secondary dark:text-byteops-primary mb-6">
              Instant Contact
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-sm">
              Have an urgent query or prefer a quick chat? Reach out to us directly.
            </p>

            <Link
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs mb-4" // Ensure button takes full width of max-w-xs container
            >
              <Button className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold py-3 px-8 text-lg rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2"> {/* Text color changed to white for better contrast on green */}
                <FaWhatsapp className="h-6 w-6" />
                <span>Chat on WhatsApp</span>
              </Button>
            </Link>

            {/* Additional Contact Info (Optional, but good for "catching" more types of contact) */}
            <div className="flex flex-col space-y-3 mt-6 text-byteops-text-dark dark:text-byteops-text-light w-full max-w-sm">
              <p className="text-sm">Typical response time: within 24 hours.</p>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5 text-byteops-primary dark:text-byteops-secondary" />
                <a href="mailto:info@byteops.com" className="text-base hover:text-byteops-accent transition-colors">info@byteops.com</a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5 text-byteops-primary dark:text-byteops-secondary" />
                <a href={`tel:+${whatsappNumber}`} className="text-base hover:text-byteops-accent transition-colors">+234 708 090 4982</a> {/* Display number nicely */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}