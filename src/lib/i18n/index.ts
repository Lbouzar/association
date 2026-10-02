import en from "./en";
import ro from "./ro";
import type { Dictionary, Locale } from "./types";

export const dictionaries: Record<Locale, Dictionary> = { ro, en };
export const defaultLocale: Locale = "ro";
export const locales: Locale[] = ["ro", "en"];

export type { Dictionary, Locale, ListItem } from "./types";
