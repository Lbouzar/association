"use client";

import Section from "@/components/Section";
import EditorialList from "@/components/EditorialList";
import Reveal from "@/components/Reveal";
import ScrollIndicator from "@/components/ScrollIndicator";
import { useLocale } from "@/components/LocaleProvider";

export default function ServicesContent() {
  const { t } = useLocale();
  const home = t.home;

  return (
    <div>
      <section className="surface-dark relative flex min-h-[70vh] items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <span className="absolute -right-16 -top-24 font-serif text-[30rem] leading-none text-ivory">
            2
          </span>
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-widest text-gold">
              {home.servicesEyebrow}
            </p>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl font-normal leading-[1.05] tracking-tight text-ivory sm:text-6xl">
              {home.servicesTitle}
            </h1>
          </Reveal>
        </div>
        <ScrollIndicator />
      </section>

      <Section eyebrow={home.servicesGroup1Title} title={home.servicesGroup1Title} description={home.servicesGroup1Intro}>
        <EditorialList items={home.servicesGroup1} />
      </Section>

      <Section
        tone="soft"
        align="indent"
        eyebrow={home.servicesGroup2Title}
        title={home.servicesGroup2Title}
        description={home.servicesGroup2Intro}
      >
        <EditorialList items={home.servicesGroup2} />
      </Section>
    </div>
  );
}
