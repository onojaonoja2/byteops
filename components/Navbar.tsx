"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { SERVICES } from "@/lib/services";
import { cn } from "@/lib/utils";

const NAV = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasMenu: true },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > threshold));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [threshold]);
  return scrolled;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const scrolled = useScrolled();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-4"
      >
        <nav
          aria-label="Primary"
          className={cn(
            "glass island-shadow flex w-full max-w-5xl items-center justify-between gap-2 rounded-full border py-2 pl-3 pr-2 sm:pl-4",
            "bg-white/75 dark:bg-byteops-base-dark/75",
            scrolled && "bg-white/90 dark:bg-byteops-base-dark/90"
          )}
        >
          <Link href="/" aria-label="ByteOps Digital Systems — home" className="shrink-0 rounded-full">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) =>
              item.hasMenu ? (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    onFocus={() => setServicesOpen(true)}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                      isActive(item.href)
                        ? "bg-byteops-primary/10 text-byteops-primary dark:text-white"
                        : "text-byteops-text-dark/80 hover:bg-black/5 hover:text-byteops-text-dark dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
                    )}
                  >
                    {item.name}
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", servicesOpen && "rotate-180")} />
                  </Link>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3"
                      >
                        <div className="glass island-shadow grid grid-cols-2 gap-1 rounded-3xl p-2">
                          {SERVICES.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              onClick={() => setServicesOpen(false)}
                              className="group flex items-start gap-3 rounded-2xl p-3 hover:bg-byteops-primary/10"
                            >
                              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-byteops-primary/10 text-byteops-primary">
                                <s.icon className="h-4.5 w-4.5" size={18} />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold leading-tight">{s.shortTitle}</span>
                                <span className="mt-0.5 line-clamp-2 block text-xs text-muted-foreground">{s.description}</span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "block rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                      isActive(item.href)
                        ? "bg-byteops-primary/10 text-byteops-primary dark:text-white"
                        : "text-byteops-text-dark/80 hover:bg-black/5 hover:text-byteops-text-dark dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <Link href="/contact" className="hidden sm:block">
              <Button className="rounded-full bg-byteops-primary px-5 font-semibold text-white shadow-md hover:bg-byteops-primary/90">
                Get Started
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              aria-label="Mobile"
              initial={{ y: 24, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 24, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="glass island-shadow absolute inset-x-3 top-20 rounded-3xl border p-3"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col">
                {NAV.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-2xl px-4 py-3 text-base font-semibold",
                        isActive(item.href) ? "bg-byteops-primary/10 text-byteops-primary" : "hover:bg-black/5 dark:hover:bg-white/10"
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.hasMenu && (
                      <ul className="mb-1 ml-2 grid gap-0.5 border-l pl-2">
                        {SERVICES.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}`}
                              onClick={() => setOpen(false)}
                              className="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-black/5 hover:text-foreground"
                            >
                              {s.shortTitle}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 block">
                <Button className="w-full rounded-2xl bg-byteops-primary py-5 text-base font-semibold text-white">
                  Get Started
                </Button>
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
      {/* spacer so fixed island never covers content */}
      <div aria-hidden="true" className="h-20 sm:h-24" />
    </>
  );
}
