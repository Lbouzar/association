"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { associationInfo, companyInfo } from "@/lib/site-data";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="surface-dark mt-32">
      <div className="mx-auto max-w-6xl px-6 pt-20">
        <p className="font-serif text-3xl tracking-[0.2em] text-ivory sm:text-4xl">
          A<span className="text-gold">2</span>PA
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-sm leading-relaxed text-ivory/70">{t.footer.tagline}</p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-gold">
            {t.footer.companyLabel}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ivory/70">
            <li>{companyInfo.name}</li>
            <li>{companyInfo.legalForm}</li>
            <li>{companyInfo.address}</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-gold">
            {t.footer.associationLabel}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ivory/70">
            <li>{associationInfo.name}</li>
            <li>{associationInfo.legalForm}</li>
            <li>
              <a
                href={`mailto:${associationInfo.email}`}
                className="link-underline hover:text-ivory"
              >
                {associationInfo.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-gold">
            {t.footer.navigationLabel}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ivory/70">
            <li>
              <Link href="/" className="link-underline hover:text-ivory">
                {t.nav.home}
              </Link>
            </li>
            <li>
              <Link href="/association" className="link-underline hover:text-ivory">
                {t.nav.association}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-underline hover:text-ivory">
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10 px-6 py-6 text-center text-xs text-ivory/50">
        © {year} {companyInfo.name} — {t.footer.rights}
      </div>
    </footer>
  );
}



