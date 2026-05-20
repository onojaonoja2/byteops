// components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "2347019091481";
  const whatsappMessage = "Hello ByteOps! I'd like to inquire about your services.";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-byteops-base-dark text-byteops-text-light relative overflow-hidden">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-[60px] md:h-[100px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ fill: 'var(--byteops-bg-light)' }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none pt-24">
        <svg className="h-full w-full" fill="none">
          <defs>
            <pattern id="footer-grid-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0L0 0L0 20" stroke="currentColor" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid-pattern)" className="text-byteops-primary/20" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">

          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="mb-4">
              <Image
                src="/byte.png"
                alt="ByteOps Digital Systems Logo"
                width={1000}
                height={500}
                className="h-20 w-auto object-contain brightness-125 saturate-150 bg-white p-2 rounded-lg"
                priority
              />
            </Link>
            <p className="mt-2 text-base text-byteops-text-light/80 leading-relaxed max-w-xs">
              &ldquo;Simplifying Tech, Amplifying Impact.&rdquo;
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-6 text-byteops-primary">Quick Links</h3>
            <ul className="space-y-3 text-lg">
              <li>
                <Link href="/#services" className="text-byteops-text-light/80 hover:text-byteops-accent transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-byteops-text-light/80 hover:text-byteops-accent transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-byteops-text-light/80 hover:text-byteops-accent transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-6 text-byteops-primary">Contact Us</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <Mail size={20} className="text-byteops-accent" />
                <a href="mailto:info@byteops.digital" className="text-byteops-text-light/80 hover:text-byteops-accent transition-colors duration-200">info@byteops.digital</a>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <Phone size={20} className="text-byteops-accent" />
                <a href={`tel:+${whatsappNumber}`} className="text-byteops-text-light/80 hover:text-byteops-accent transition-colors duration-200">+234 701 909 1481</a>
              </li>
              <li className="flex items-start justify-center md:justify-start space-x-3">
                <MapPin size={20} className="text-byteops-accent mt-1" />
                <address className="not-italic text-byteops-text-light/80">
                  Abuja, Federal Capital Territory, Nigeria
                </address>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us & Social Icons */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-6 text-byteops-primary">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="https://www.linkedin.com/company/byteops-digital-systems/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-byteops-primary/20 hover:bg-gradient-to-br hover:from-byteops-primary hover:to-byteops-magenta text-byteops-text-light hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </Link>
              <Link href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61583223701076" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-byteops-primary/20 hover:bg-gradient-to-br hover:from-byteops-primary hover:to-byteops-magenta text-byteops-text-light hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg" aria-label="Facebook">
                <FaFacebookF size={20} />
              </Link>
              <Link href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-byteops-primary/20 hover:bg-gradient-to-br hover:from-byteops-primary hover:to-byteops-magenta text-byteops-text-light hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg" aria-label="WhatsApp">
                <FaWhatsapp size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-byteops-text-light/10 flex flex-col md:flex-row justify-between items-center text-sm text-byteops-text-light/60">
          <p>&copy; {currentYear} ByteOps Digital Systems. All rights reserved.</p>
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="icon"
            className="mt-4 md:mt-0 text-byteops-text-light/60 hover:text-byteops-accent hover:bg-white/10"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </Button>
        </div>
      </div>
    </footer>
  );
}