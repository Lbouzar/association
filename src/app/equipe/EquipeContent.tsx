"use client";

import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import ScrollIndicator from "@/components/ScrollIndicator";
import { useLocale } from "@/components/LocaleProvider";

export default function EquipeContent() {
  const { t } = useLocale();
  const home = t.home;

  return (
    <div>
      <section className="surface-dark relative flex min-h-[60vh] items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <span className="absolute -right-16 -top-20 font-serif text-[28rem] leading-none text-ivory">
            2
          </span>
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-widest text-gold">
              {home.teamEyebrow}
            </p>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl font-normal leading-[1.05] tracking-tight text-ivory sm:text-6xl">
              {home.teamTitle}
            </h1>
          </Reveal>
        </div>
        <ScrollIndicator />
      </section>

      <Section eyebrow={home.teamEyebrow} title={home.teamTitle} description={home.teamDescription} />
    </div>
  );
}
