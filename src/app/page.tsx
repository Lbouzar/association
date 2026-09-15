"use client";

import Link from "next/link";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import ScrollIndicator from "@/components/ScrollIndicator";
import { useLocale } from "@/components/LocaleProvider";

export default function Home() {
  const { t } = useLocale();
  const home = t.home;

  return (
    <div>
      {/* HERO */}
      <section className="surface-dark relative flex min-h-[100vh] items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <span className="drift absolute -right-24 -top-24 font-serif text-[38rem] leading-none text-ivory">
            2
          </span>
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-6 py-28">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-widest text-gold">
              {home.heroEyebrow}
            </p>
            <h1 className="mt-6 max-w-4xl font-serif text-4xl font-normal leading-[1.05] tracking-tight text-ivory sm:text-6xl lg:text-7xl">
              {home.heroTitle}
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/75 sm:ml-16">
              {home.heroLead}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-12 flex flex-col gap-4 sm:ml-16 sm:flex-row">
              <Link
                href="/contact"
                className="btn-sweep border border-gold bg-gold px-7 py-3.5 text-center text-xs font-medium uppercase tracking-widest text-pine transition-colors duration-300"
              >
                {home.heroPrimaryCta}
              </Link>
              <Link
                href="/approche"
                className="btn-sweep border border-ivory/40 px-7 py-3.5 text-center text-xs font-medium uppercase tracking-widest text-ivory transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                {home.heroSecondaryCta}
              </Link>
            </div>
          </Reveal>
        </div>
        <ScrollIndicator />
      </section>

      {/* INTRO */}
      <Section eyebrow={home.introEyebrow} title={home.introTitle}>
        <div className="max-w-2xl space-y-6 sm:ml-24">
          {home.introParagraphs.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-foreground-muted">
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* TEASER APPROCHE */}
      <Section
        tone="soft"
        align="indent"
        eyebrow={home.approachEyebrow}
        title={home.approachTitle}
        description={home.approachParagraphs[0]}
      >
        <div className="sm:ml-24">
          <Link href="/approche" className="link-underline font-serif text-lg text-foreground">
            {home.heroSecondaryCta} →
          </Link>
        </div>
      </Section>

      {/* TEASER SERVICES */}
      <Section
        eyebrow={home.servicesEyebrow}
        title={home.servicesTitle}
        description={home.servicesGroup1Intro}
      >
        <Link href="/services" className="link-underline font-serif text-lg text-foreground">
          {home.servicesTitle} →
        </Link>
      </Section>

      {/* TEASER ASSOCIATION */}
      <Section
        tone="soft"
        align="indent"
        eyebrow={home.associationTeaserEyebrow}
        title={home.associationTeaserTitle}
        description={home.associationTeaserDescription}
      >
        <div className="sm:ml-24">
          <Link
            href="/association"
            className="btn-sweep border border-foreground px-7 py-3.5 text-xs font-medium uppercase tracking-widest text-foreground transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ivory"
          >
            {home.associationTeaserCta}
          </Link>
        </div>
      </Section>

      {/* CLOSING / CONTACT CTA */}
      <section className="surface-dark relative overflow-hidden py-28 sm:py-36">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
          <span className="drift absolute -bottom-32 -left-16 font-serif text-[26rem] leading-none text-ivory">
            2
          </span>
        </div>
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-widest text-gold">
              {home.closingEyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-normal leading-[1.05] tracking-tight text-ivory sm:text-5xl">
              {home.closingTitle}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70">
              {home.closingDescription}
            </p>
            <Link
              href="/contact"
              className="btn-sweep mt-10 inline-block border border-gold bg-gold px-7 py-3.5 text-xs font-medium uppercase tracking-widest text-pine transition-colors duration-300"
            >
              {home.closingCta}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}






