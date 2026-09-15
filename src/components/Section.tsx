import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  tone?: "light" | "soft";
  /** Décale le bloc titre pour casser la symétrie centrale du site. */
  align?: "left" | "indent";
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  tone = "light",
  align = "left",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${tone === "soft" ? "surface-alt" : ""} py-24 sm:py-32 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className={align === "indent" ? "sm:ml-24" : ""}>
          {eyebrow && (
            <p className="text-xs font-medium uppercase tracking-widest accent-text">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-normal leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground-muted">
              {description}
            </p>
          )}
        </Reveal>
        {children && <div className="mt-16">{children}</div>}
      </div>
    </section>
  );
}



