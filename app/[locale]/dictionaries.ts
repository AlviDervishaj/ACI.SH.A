import "server-only";

const dictionaries = {
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  nl: () =>
    import("../../dictionaries/nl.json").then((module) => module.default),
} as const;

export const getDictionary = async (locale: "en" | "nl") => dictionaries[locale]();
