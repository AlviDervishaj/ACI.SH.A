import { LocalePrefix, Pathnames } from "next-intl/routing";

// A list of all locales that are supported
export const locales = ["en", "al"] as const;
export const defaultLocale = "en" as const;

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    al: "/pathnames",
  },
};

export const localePrefix: LocalePrefix<typeof locales> = "always";
export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;
