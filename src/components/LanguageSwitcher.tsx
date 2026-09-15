"use client";

import { useLocale } from "@/components/LocaleProvider";

type LanguageSwitcherProps = {
  dark?: boolean;
};

export default function LanguageSwitcher({ dark = false }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLocale();

  function optionClasses(target: "fr" | "en") {
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
      aria-label="Choix de la langue / Language switch"
    >
      <button
        type="button"
        onClick={() => setLocale("fr")}
        className={optionClasses("fr")}
        aria-pressed={locale === "fr"}
      >
        FR
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


