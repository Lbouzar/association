"use client";

import Section from "@/components/Section";
import EditorialList from "@/components/EditorialList";
import Reveal from "@/components/Reveal";
import ScrollIndicator from "@/components/ScrollIndicator";
import { useLocale } from "@/components/LocaleProvider";

export default function ApprocheContent() {
  const { t } = useLocale();
  const home = t.home;

  return (
    <div>
      <section className="surface-dark relative flex min-h-[70vh] items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <span className="absolute -right-20 -top-20 font-serif text-[30rem] leading-none text-ivory">
            2
          </span>
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-widest text-gold">
              {home.approachEyebrow}
            </p>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl font-normal leading-[1.05] tracking-tight text-ivory sm:text-6xl">
              {home.approachTitle}
            </h1>
          </Reveal>
        </div>
        <ScrollIndicator />
      </section>

      <Section eyebrow={home.introEyebrow} title={home.capabilitiesTitle} description={home.capabilitiesIntro}>
        <EditorialList items={home.capabilities} />
        <p className="mt-10 max-w-xl text-sm italic leading-relaxed text-foreground-muted sm:ml-12">
          {home.capabilitiesNote}
        </p>
      </Section>

      <Section tone="soft" align="indent" eyebrow={home.audienceEyebrow} title={home.audienceTitle}>
        <EditorialList items={home.audiences} />
      </Section>

      <Section eyebrow={home.labEyebrow} title={home.labTitle} description={home.labIntro}>
        <EditorialList items={home.labFormats} />
        <p className="mt-10 max-w-xl text-sm italic leading-relaxed text-foreground-muted sm:ml-12">
          {home.labNote}
        </p>
      </Section>

      <Section tone="soft" align="indent" eyebrow={home.partnerEyebrow} title={home.partnerTitle} description={home.partnerIntro}>
        <EditorialList items={home.partnerSupport} />
        <p className="mt-10 max-w-xl text-sm italic leading-relaxed text-foreground-muted sm:ml-12">
          {home.partnerNote}
        </p>
      </Section>

      <Section eyebrow={home.deliveryEyebrow} title={home.deliveryTitle}>
        <div className="max-w-2xl space-y-4 sm:ml-12">
          {home.deliveryParagraphs.map((p) => (
            <p key={p} className="text-base leading-relaxed text-foreground-muted">
              {p}
            </p>
          ))}
        </div>
        <div className="mt-10">
          <EditorialList items={home.deliveryPoints} />
        </div>
      </Section>

      <Section tone="soft" align="indent" eyebrow={home.valuesEyebrow} title={home.valuesTitle} description={home.valuesIntro}>
        <EditorialList items={home.values} />
        <p className="mt-10 max-w-xl text-sm italic leading-relaxed text-foreground-muted sm:ml-12">
          {home.valuesNote}
        </p>
      </Section>
    </div>
  );
}
