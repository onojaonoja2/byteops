// components/layout/Header.tsx
"use client";


import Link from "next/link";
import { motion } from "framer-motion";
import { NAV_LINKS, BUSINESS_INFO } from "@/constants";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react"; // Install lucide-react for icons: npm install lucide-react
import { ThemeToggle } from "@/components/theme-toggle";

// Install lucide-react for icons:
// npm install lucide-react

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          {BUSINESS_INFO.name.split(" ")[0]}{" "}
          <span className="text-foreground">{BUSINESS_INFO.name.split(" ")[1]}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="#contact">Get a Quote</Link>
          </Button>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
         <div className="flex items-center md:hidden gap-2"> {/* Added a div to align toggle and sheet trigger */}
            <ThemeToggle />
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 pt-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="#contact">Get a Quote</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}