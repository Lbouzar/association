"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Logo from "@/components/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.association, href: "/association" },
    { label: t.nav.contact, href: "/contact" },
  ];

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-500 ${
        solid
          ? "border-b border-line bg-background/95 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" aria-label="A2PA">
          <Logo dark={!solid} />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`link-underline text-xs font-medium uppercase tracking-widest transition-colors ${
                solid
                  ? "text-foreground-muted hover:text-foreground"
                  : "text-ivory/75 hover:text-ivory"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <LanguageSwitcher dark={!solid} />
          <Link
            href="/contact"
            className={`rounded-none border px-5 py-2 text-xs font-medium uppercase tracking-widest transition-colors duration-300 ${
              solid
                ? "border-foreground text-foreground hover:bg-gold hover:border-gold hover:text-ivory"
                : "border-ivory/60 text-ivory hover:bg-ivory hover:text-pine"
            }`}
          >
            {t.nav.contactCta}
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher dark={!solid} />
          <button
            type="button"
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          >
            <span className={`h-px w-6 ${solid ? "bg-foreground" : "bg-ivory"}`} />
            <span className={`h-px w-6 ${solid ? "bg-foreground" : "bg-ivory"}`} />
            <span className={`h-px w-6 ${solid ? "bg-foreground" : "bg-ivory"}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-background px-6 pb-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-xs font-medium uppercase tracking-widest text-foreground-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-outline mt-3 border px-5 py-3 text-center text-xs font-medium uppercase tracking-widest"
          >
            {t.nav.contactCta}
          </Link>
        </nav>
      )}
    </header>
  );
}



