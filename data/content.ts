import { en } from "./content.en";
import type { SiteContent, WorkCase } from "./types";

/**
 * Locale registry. Adding Traditional Chinese later is a three-line change:
 * write `content.zh.ts` against `SiteContent`, add `"zh"` to `Locale`, and
 * register it below. Pages read copy through `content` / `getContent()` and
 * do not need to change.
 */
export type Locale = "en";

export const defaultLocale: Locale = "en";

type LocaleEntry = {
  /** Value for the `lang` attribute on `<html>`. */
  lang: string;
  content: SiteContent;
};

export const locales: Record<Locale, LocaleEntry> = {
  en: { lang: "en", content: en },
};

export function getContent(locale: Locale = defaultLocale): SiteContent {
  return locales[locale].content;
}

export function getLang(locale: Locale = defaultLocale): string {
  return locales[locale].lang;
}

export function getWorkBySlug(
  slug: string,
  locale: Locale = defaultLocale,
): WorkCase | undefined {
  return getContent(locale).works.items.find((work) => work.slug === slug);
}

/**
 * The works list split by place in the flagship program, so the list page and
 * the detail pages derive the structure the same way.
 */
export function getWorkGroups(locale: Locale = defaultLocale) {
  const { items } = getContent(locale).works;

  return {
    flagship: items.find((work) => work.group === "flagship"),
    subsystems: items.filter((work) => work.group === "subsystem"),
    standalone: items.filter((work) => !work.group),
  };
}

/** Copy for the active locale. Only English ships today. */
export const content = getContent();
