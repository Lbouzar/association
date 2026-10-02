"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { associationInfo, companyInfo } from "@/lib/site-data";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="surface-dark mt-32">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <p className="font-serif text-3xl tracking-[0.2em] text-ivory sm:text-4xl">
              A<span className="text-gold">2</span>PA
            </p>
            <nav className="mt-10 flex flex-col gap-3 text-xs font-medium uppercase tracking-widest text-ivory/60">
              <Link href="/" className="link-underline w-fit hover:text-ivory">
                {t.nav.home}
              </Link>
              <Link href="/association" className="link-underline w-fit hover:text-ivory">
                {t.nav.association}
              </Link>
              <Link href="/contact" className="link-underline w-fit hover:text-ivory">
                {t.nav.contact}
              </Link>
            </nav>
          </div>

          <div className="grid gap-12 sm:grid-cols-2">
            <div className="border-t border-ivory/15 pt-6">
              <p className="text-xs font-medium uppercase tracking-widest text-gold">
                {t.footer.companyLabel}
              </p>
              <p className="mt-4 font-serif text-lg text-ivory">{companyInfo.name}</p>
              <dl className="mt-3 space-y-1.5 text-sm text-ivory/60">
                <div className="flex gap-2">
                  <dt>{t.footer.legalStructureLabel}:</dt>
                  <dd className="text-ivory/80">{companyInfo.legalForm}</dd>
                </div>
              </dl>
              <a
                href={`mailto:${companyInfo.email}`}
                className="link-underline mt-3 inline-block text-sm text-ivory/60 hover:text-ivory"
              >
                {companyInfo.email}
              </a>
            </div>

            <div className="border-t border-ivory/15 pt-6">
              <p className="text-xs font-medium uppercase tracking-widest text-gold">
                {t.footer.associationLabel}
              </p>
              <p className="mt-4 font-serif text-lg text-ivory">{associationInfo.name}</p>
              <dl className="mt-3 space-y-1.5 text-sm text-ivory/60">
                <div className="flex gap-2">
                  <dt>{t.footer.legalStructureLabel}:</dt>
                  <dd className="text-ivory/80">{associationInfo.legalForm}</dd>
                </div>
              </dl>
              <a
                href={`mailto:${associationInfo.email}`}
                className="link-underline mt-3 inline-block text-sm text-ivory/60 hover:text-ivory"
              >
                {associationInfo.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10 px-6 py-6 text-center text-xs text-ivory/50">
        © {year} {companyInfo.name} — {t.footer.rights}
      </div>
    </footer>
  );
}

