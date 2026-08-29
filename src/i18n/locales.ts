/**
 * Locale registry for the site.
 *
 * Keep this list in sync with the `i18n.locales` array in `astro.config.ts`.
 * The default locale ("en") is served at the root path without a prefix.
 */
export const LOCALES = ["en", "zh-cn"] as const;

export type Locale = (typeof LOCALES)[number];

/** Native display name of each locale (used by the language switcher). */
export const localeNames: Record<Locale, string> = {
  en: "English",
  "zh-cn": "简体中文",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Returns the counterpart locale used by the language switcher. */
export function getOtherLocale(locale: string): Locale {
  return LOCALES.find(l => l !== locale) ?? "en";
}
