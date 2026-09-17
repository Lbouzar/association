"use client";

import Link from "next/link";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import ScrollIndicator from "@/components/ScrollIndicator";
import EditorialList from "@/components/EditorialList";
import CursorGlow from "@/components/CursorGlow";
import MagneticButton from "@/components/MagneticButton";
import { useLocale } from "@/components/LocaleProvider";
import { associationInfo } from "@/lib/site-data";

export default function AssociationContent() {
  const { t } = useLocale();
  const a = t.association;

  return (
    <div>
      <section className="surface-dark relative flex min-h-[85vh] items-center overflow-hidden">
        <CursorGlow />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <span className="drift absolute -right-16 -top-16 font-serif text-[32rem] leading-none text-ivory">
            2
          </span>
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-widest text-gold">
              {a.heroEyebrow}
            </p>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl font-normal leading-[1.05] tracking-tight text-ivory sm:text-6xl">
              {associationInfo.name}
            </h1>
            <p className="mt-3 text-sm font-medium text-ivory/60">{a.heroStatus}</p>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/75">
              {a.heroTitle}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory/60">
              {a.heroParagraph1}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory/60">
              {a.heroParagraph2}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#mission"
                className="btn-sweep border border-gold bg-gold px-7 py-3.5 text-center text-xs font-medium uppercase tracking-widest text-pine transition-colors duration-300"
              >
                {a.heroPrimaryCta}
              </Link>
              <Link
                href="/contact"
                className="btn-sweep border border-ivory/40 px-7 py-3.5 text-center text-xs font-medium uppercase tracking-widest text-ivory transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                {a.heroSecondaryCta}
              </Link>
            </div>
          </Reveal>
        </div>
        <ScrollIndicator />
      </section>

      <Section eyebrow={a.whyEyebrow} title={a.whyTitle}>
        <div className="space-y-4">
          {a.whyParagraphs.map((p) => (
            <p key={p} className="max-w-3xl text-base leading-relaxed text-foreground-muted">
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section id="mission" tone="soft" align="indent" eyebrow={a.missionEyebrow} title={a.missionTitle} description={a.missionIntro}>
        <EditorialList items={a.missionPoints} />
        <p className="mt-10 max-w-xl text-sm italic leading-relaxed text-foreground-muted sm:ml-12">
          {a.missionNote}
        </p>
      </Section>

      <Section eyebrow={a.lobbyingEyebrow} title={a.lobbyingTitle}>
        <div className="space-y-4">
          {a.lobbyingParagraphs.map((p) => (
            <p key={p} className="max-w-3xl text-base leading-relaxed text-foreground-muted">
              {p}
            </p>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm font-medium text-foreground">
          {a.lobbyingListIntro}
        </p>
        <div className="mt-10">
          <EditorialList items={a.lobbyingPoints} />
        </div>
      </Section>

      <Section tone="soft" align="indent" eyebrow={a.programsEyebrow} title={a.programsTitle}>
        <EditorialList items={a.programs} />
      </Section>

      <Section eyebrow={a.whoEyebrow} title={a.whoTitle}>
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest accent-text">
              {a.beneficiariesTitle}
            </h3>
            <ul className="mt-4 space-y-3 border-t border-line pt-4 text-sm text-foreground-muted">
              {a.beneficiaries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="sm:mt-10">
            <h3 className="text-xs font-medium uppercase tracking-widest accent-text">
              {a.partnersTitle}
            </h3>
            <ul className="mt-4 space-y-3 border-t border-line pt-4 text-sm text-foreground-muted">
              {a.partners.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 max-w-xl text-sm italic leading-relaxed text-foreground-muted">
          {a.whoNote}
        </p>
      </Section>

      <Section tone="soft" align="indent" eyebrow={a.howEyebrow} title={a.howTitle}>
        <EditorialList items={a.values} />
      </Section>

      <Section eyebrow={a.independenceEyebrow} title={a.independenceTitle}>
        <div className="space-y-4">
          {a.independenceParagraphs.map((p) => (
            <p key={p} className="max-w-3xl text-base leading-relaxed text-foreground-muted">
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section align="indent" eyebrow={a.visionEyebrow} title={a.visionTitle} description={a.visionIntro}>
        <EditorialList items={a.visionPoints} />
      </Section>

      <section className="surface-dark relative overflow-hidden py-28 sm:py-36">
        <CursorGlow />
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
          <span className="drift absolute -bottom-32 -right-16 font-serif text-[26rem] leading-none text-ivory">
            2
          </span>
        </div>
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-widest text-gold">
              {a.partnershipsEyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-normal leading-[1.05] tracking-tight text-ivory sm:text-5xl">
              {a.partnershipsTitle}
            </h2>
            <div className="mt-6 max-w-xl space-y-4">
              {a.partnershipsParagraphs.map((p) => (
                <p key={p} className="text-base leading-relaxed text-ivory/70">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="btn-sweep border border-gold bg-gold px-7 py-3.5 text-xs font-medium uppercase tracking-widest text-pine transition-colors duration-300"
                >
                  {a.primaryCta}
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/contact"
                  className="btn-sweep border border-ivory/40 px-7 py-3.5 text-xs font-medium uppercase tracking-widest text-ivory transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  {a.secondaryCta}
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/contact"
                  className="btn-sweep border border-ivory/40 px-7 py-3.5 text-xs font-medium uppercase tracking-widest text-ivory transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  {a.additionalCta}
                </Link>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}



