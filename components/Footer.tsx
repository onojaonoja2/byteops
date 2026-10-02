"use client";

import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { LogoMark } from "./Logo";
import { SERVICES } from "@/lib/services";

const WA = "2347019091481";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-byteops-base-dark text-white">
      <div className="container relative z-10 mx-auto px-4 pb-10 pt-14">
        <div className="grid grid-cols-1 gap-10 text-left sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" aria-label="ByteOps home">
              <span className="inline-flex items-center gap-2.5 rounded-2xl bg-white p-2 pr-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-byteops-base-dark text-white shadow-sm">
                  <LogoMark className="h-7 w-7" />
                </span>
                <span className="flex flex-col leading-none text-left">
                  <span className="text-xl font-extrabold tracking-tight text-byteops-base-dark">
                    Byte<span className="text-byteops-primary">Ops</span>
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-byteops-base-dark/60">
                    Digital Systems
                  </span>
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs leading-relaxed text-white/70">
              &ldquo;Simplifying Tech, Amplifying Impact.&rdquo; Tech training & digital solutions from Abuja,
              Nigeria to Africa and beyond.
            </p>
            <div className="mt-5 flex gap-2">
              <Link
                href="https://www.linkedin.com/company/byteops-digital-systems/"
                target="_blank"
                rel="noopener noreferrer me"
                aria-label="ByteOps on LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-byteops-primary"
              >
                <FaLinkedinIn size={18} aria-hidden="true" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61583223701076"
                target="_blank"
                rel="noopener noreferrer me"
                aria-label="ByteOps on Facebook"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-byteops-primary"
              >
                <FaFacebookF size={18} aria-hidden="true" />
              </Link>
              <Link
                href={`https://wa.me/${WA}`}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label="ByteOps on WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-byteops-primary"
              >
                <FaWhatsapp size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/60">Company</h2>
            <ul className="space-y-2.5">
              <li><Link className="text-white/80 hover:text-byteops-accent" href="/about">About us</Link></li>
              <li><Link className="text-white/80 hover:text-byteops-accent" href="/services">Services</Link></li>
              <li><Link className="text-white/80 hover:text-byteops-accent" href="/faq">FAQ</Link></li>
              <li><Link className="text-white/80 hover:text-byteops-accent" href="/contact">Contact</Link></li>
              <li><Link className="text-white/80 hover:text-byteops-accent" href="/llms.txt">llms.txt (AI)</Link></li>
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/60">Services</h2>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link className="text-white/80 hover:text-byteops-accent" href={`/services/${s.slug}`}>
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/60">Contact</h2>
            <address className="space-y-3 not-italic">
              <p className="flex items-center gap-2.5 text-white/80">
                <Mail size={17} aria-hidden="true" className="text-byteops-accent" />
                <a href="mailto:info@byteops.digital" className="hover:text-byteops-accent">info@byteops.digital</a>
              </p>
              <p className="flex items-center gap-2.5 text-white/80">
                <Phone size={17} aria-hidden="true" className="text-byteops-accent" />
                <a href="tel:+2347019091481" className="hover:text-byteops-accent">+234 701 909 1481</a>
              </p>
              <p className="flex items-start gap-2.5 text-white/80">
                <MapPin size={17} aria-hidden="true" className="mt-0.5 text-byteops-accent" />
                Abuja, Federal Capital Territory, Nigeria
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row">
          <p>© {year} ByteOps Digital Systems. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
            <Link href="/robots.txt" className="hover:text-white">Robots</Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 hover:bg-white/10 hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp size={15} aria-hidden="true" /> Top
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}
