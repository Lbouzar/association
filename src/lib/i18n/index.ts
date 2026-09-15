import en from "./en";
import fr from "./fr";
import type { Dictionary, Locale } from "./types";

export const dictionaries: Record<Locale, Dictionary> = { fr, en };
export const defaultLocale: Locale = "fr";
export const locales: Locale[] = ["fr", "en"];

export type { Dictionary, Locale, ListItem } from "./types";
