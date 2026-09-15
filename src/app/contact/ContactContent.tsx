"use client";

import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import Reveal from "@/components/Reveal";
import ScrollIndicator from "@/components/ScrollIndicator";
import CursorGlow from "@/components/CursorGlow";
import { useLocale } from "@/components/LocaleProvider";
import { companyInfo } from "@/lib/site-data";

export default function ContactContent() {
  const { t } = useLocale();
  const c = t.contact;

  return (
    <div>
      <section className="surface-dark relative flex min-h-[60vh] items-center overflow-hidden">
        <CursorGlow />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <span className="drift absolute -right-16 -top-20 font-serif text-[28rem] leading-none text-ivory">
            2
          </span>
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-widest text-gold">
              {c.eyebrow}
            </p>
            <h1 className="mt-6 max-w-2xl font-serif text-4xl font-normal leading-[1.05] tracking-tight text-ivory sm:text-6xl">
              {c.title}
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/75">
              {c.lead}
            </p>
          </Reveal>
        </div>
        <ScrollIndicator />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-xs font-medium uppercase tracking-widest accent-text">
              {c.formTitle}
            </h2>
            <p className="mt-3 text-sm text-foreground-muted">{c.formHint}</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xs font-medium uppercase tracking-widest accent-text">
              {c.coordinatesTitle}
            </h2>
            <ul className="mt-6 space-y-5 border-t border-line pt-6 text-sm text-foreground-muted">
              <li>
                <span className="block text-xs font-medium uppercase tracking-widest text-foreground">
                  {c.addressLabel}
                </span>
                <span className="mt-1 block">{companyInfo.address}</span>
              </li>
              <li>
                <span className="block text-xs font-medium uppercase tracking-widest text-foreground">
                  {c.emailLabel}
                </span>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="link-underline mt-1 inline-block hover:text-foreground"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <span className="block text-xs font-medium uppercase tracking-widest text-foreground">
                  {c.phoneLabel}
                </span>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="link-underline mt-1 inline-block hover:text-foreground"
                >
                  {companyInfo.phone}
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <MapEmbed src={companyInfo.mapEmbedUrl} title={c.mapTitle} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

