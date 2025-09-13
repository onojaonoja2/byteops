// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaWhatsapp } from 'react-icons/fa'; // Added FaWhatsapp
import { Mail, Phone, MapPin } from 'lucide-react'; // Lucide icons for contact info

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "2347080904982";
  const whatsappMessage = "Hello ByteOps! I'd like to inquire about your services.";

  return (
    <footer className="bg-byteops-base-dark text-byteops-text-light py-16 relative overflow-hidden">
      {/* Optional: Subtle background pattern for modern texture */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <svg className="h-full w-full" fill="none">
          <defs>
            <pattern id="footer-grid-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0L0 0L0 20" stroke="currentColor" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid-pattern)" className="text-byteops-primary/20" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
              “Simplifying Tech, Amplifying Impact.”
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
              {/* Add more links if you have a blog, privacy policy, terms etc. */}
              {/* <li><Link href="/blog" className="text-byteops-text-light/80 hover:text-byteops-accent transition-colors duration-200">Blog</Link></li>
              <li><Link href="/privacy" className="text-byteops-text-light/80 hover:text-byteops-accent transition-colors duration-200">Privacy Policy</Link></li> */}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-6 text-byteops-primary">Contact Us</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <Mail size={20} className="text-byteops-accent" />
                <a href="mailto:byteops.digital@gmail.com" className="text-byteops-text-light/80 hover:text-byteops-accent transition-colors duration-200">byteops.digital@gmail.com</a>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <Phone size={20} className="text-byteops-accent" />
                <a href={`tel:+${whatsappNumber}`} className="text-byteops-text-light/80 hover:text-byteops-accent transition-colors duration-200">+234 708 090 4982</a>
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
              <Link href="#" className="p-2 rounded-full bg-byteops-primary/20 hover:bg-byteops-primary text-byteops-text-light hover:text-white transition-all duration-300 transform hover:-translate-y-1" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-byteops-primary/20 hover:bg-byteops-primary text-byteops-text-light hover:text-white transition-all duration-300 transform hover:-translate-y-1" aria-label="Twitter">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-byteops-primary/20 hover:bg-byteops-primary text-byteops-text-light hover:text-white transition-all duration-300 transform hover:-translate-y-1" aria-label="Facebook">
                <FaFacebookF size={20} />
              </Link>
              <Link href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-byteops-primary/20 hover:bg-byteops-primary text-byteops-text-light hover:text-white transition-all duration-300 transform hover:-translate-y-1" aria-label="WhatsApp">
                <FaWhatsapp size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-byteops-text-light/10 text-center text-sm text-byteops-text-light/60">
          © {currentYear} ByteOps Digital Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}