"use client";

import { useLocale } from "@/components/LocaleProvider";

type LanguageSwitcherProps = {
  dark?: boolean;
};

export default function LanguageSwitcher({ dark = false }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLocale();

  function optionClasses(target: "ro" | "en") {
    const active = locale === target;
    if (dark) {
      return active
        ? "text-ivory"
        : "text-ivory/60 transition-colors hover:text-ivory";
    }
    return active
      ? "text-foreground"
      : "text-foreground-muted transition-colors hover:text-foreground";
  }

  return (
    <div
      className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest"
      role="group"
      aria-label="Alegere limbă / Language switch"
    >
      <button
        type="button"
        onClick={() => setLocale("ro")}
        className={optionClasses("ro")}
        aria-pressed={locale === "ro"}
      >
        RO
      </button>
      <span className={dark ? "text-ivory/40" : "text-line"}>/</span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={optionClasses("en")}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );
}


