// components/layout/Footer.tsx
import Link from "next/link";
import { NAV_LINKS, BUSINESS_INFO } from "@/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-card text-card-foreground py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="text-2xl font-bold text-primary mb-2">
            {BUSINESS_INFO.name.split(" ")[0]}{" "}
            <span className="text-foreground">{BUSINESS_INFO.name.split(" ")[1]}</span>
          </Link>
          <p className="text-sm max-w-xs">{BUSINESS_INFO.motto}</p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">{BUSINESS_INFO.address}</p>
          <p className="text-sm">Email: <Link href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-primary">{BUSINESS_INFO.email}</Link></p>
          <p className="text-sm">Phone: <Link href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-primary">{BUSINESS_INFO.phone}</Link></p>
          {/* Add social media icons here if desired */}
        </div>
      </div>
      <div className="container text-center mt-8 pt-4 border-t border-muted-foreground/20 text-muted-foreground text-sm">
        © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
      </div>
    </footer>
  );
}