// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { Button } from "./ui/button";
import { MenuIcon, X, Home, Layers, Users, MessageSquare } from "lucide-react"; // Import X icon for close
import { useState } from "react"; // Import useState

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/#services", icon: Layers },
    { name: "About", href: "/#about", icon: Users },
    { name: "Contact", href: "/#contact", icon: MessageSquare },
  ];

  // Animation variants for the mobile menu
  const mobileMenuVariants = {
    hidden: {
      y: "-100%", // Start above the screen
      opacity: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    visible: {
      y: "0%", // Slide down to position
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-byteops-bg-light/80 dark:bg-byteops-base-dark/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Image
              src="/byte.png"
              alt="ByteOps Digital Systems Logo"
              width={1000}
              height={500}
              className="h-20 w-auto object-contain brightness-125 saturate-150"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, ease: "easeOut" }}
            >
              <Link
                href={link.href}
                className="
                  flex flex-col items-center
                  text-byteops-text-dark dark:text-byteops-text-light
                  text-lg font-medium
                  transition-colors duration-300
                  hover:text-cyan-400 dark:hover:text-cyan-300
                  py-2 px-3 rounded-md
                "
              >
                <link.icon className="h-6 w-6 mb-1" />
                <span>{link.name}</span>
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * navLinks.length, ease: "easeOut" }}
          >
            <Link href="/#contact">
              <Button
                className="
                  bg-byteops-accent hover:bg-byteops-accent/80
                  text-byteops-text-dark font-semibold py-2 px-4 rounded-lg shadow-md
                  transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                "
              >
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-byteops-text-dark dark:text-byteops-text-light"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu state
          >
            {isMobileMenuOpen ? ( // Change icon based on state
              <X className="h-7 w-7" />
            ) : (
              <MenuIcon className="h-7 w-7" />
            )}
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Conditionally rendered) */}
      <AnimatePresence> {/* Enables exit animations */}
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden" // Define exit animation
            className="md:hidden fixed top-[76px] left-0 w-full h-[calc(100vh-76px)] // Position below navbar
                       bg-byteops-base-dark dark:bg-byteops-bg-light // Background for the dropdown
                       flex flex-col items-center justify-center space-y-8 py-8
                       text-byteops-text-light dark:text-byteops-text-dark // Text color for mobile menu
                       shadow-lg z-40" // Lower z-index than main navbar (z-50)
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, ease: "easeOut" }}
              >
                <Link
                  href={link.href}
                  className="
                    flex flex-col items-center text-3xl font-bold // Larger text for mobile
                    hover:text-cyan-400 dark:hover:text-cyan-300 // Glow effect
                    transition-colors duration-300
                  "
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                >
                  <link.icon className="h-8 w-8 mb-2" /> {/* Larger icon for mobile */}
                  <span>{link.name}</span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * navLinks.length, ease: "easeOut" }}
            >
              <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  className="
                    bg-byteops-accent hover:bg-byteops-accent/80
                    text-byteops-text-dark font-semibold py-3 px-6 text-xl rounded-lg shadow-md
                    transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                  "
                >
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}