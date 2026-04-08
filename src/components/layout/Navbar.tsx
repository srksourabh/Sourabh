"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { cn, getIcon } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const MenuIcon = getIcon("menu");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled && "border-b border-[var(--color-nord-slate)] bg-[color:rgb(10_12_16_/_0.95)] backdrop-blur-sm",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link aria-label="Go to Nordische Energy homepage" className="flex items-center gap-3" href="/">
            <Image alt="Nordische Energy" className="h-9 w-auto" height={36} src="/logo.png" width={120} />
            <span className="hidden font-[var(--font-display)] text-xl font-extrabold tracking-[0.18em] text-[var(--color-nord-white)] sm:inline">
              NORDISCHE <span className="text-[var(--color-nord-teal)]">ENERGY</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  aria-label={`Navigate to ${link.label}`}
                  className={cn(
                    "border-b-2 border-transparent pb-2 text-sm font-medium uppercase tracking-[0.16em] text-[var(--color-nord-light)] transition hover:text-[var(--color-nord-white)]",
                    active && "border-[var(--color-nord-teal)] text-[var(--color-nord-white)]",
                  )}
                  href={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            aria-label={open ? "Close mobile navigation" : "Open mobile navigation"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-nord-slate)] text-[var(--color-nord-white)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex min-h-screen flex-col bg-[color:rgb(10_12_16_/_0.98)] px-6 py-24 lg:hidden"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <div className="mb-12 flex items-center justify-between">
              <span className="flex items-center gap-3">
                <Image alt="Nordische Energy" className="h-8 w-auto" height={32} src="/logo.png" width={106} />
                <span className="font-[var(--font-display)] text-lg font-extrabold tracking-[0.15em] text-[var(--color-nord-white)] sm:text-2xl sm:tracking-[0.2em]">
                  NORDISCHE <span className="text-[var(--color-nord-teal)]">ENERGY</span>
                </span>
              </span>
              <button
                aria-label="Close overlay menu"
                className="rounded-full border border-[var(--color-nord-slate)] p-3 text-[var(--color-nord-white)]"
                onClick={() => setOpen(false)}
                type="button"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-6">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  animate={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -18 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    aria-label={`Navigate to ${link.label}`}
                    className="block border-b border-[var(--color-nord-slate)] py-4 font-[var(--font-display)] text-2xl uppercase tracking-[0.08em] text-[var(--color-nord-white)] sm:text-4xl"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
