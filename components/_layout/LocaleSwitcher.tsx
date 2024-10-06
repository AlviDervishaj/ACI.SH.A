"use client";
import { useLocale, useTranslations } from "next-intl";

import { LocaleSwitcherSelect } from "./LocaleSwitcherSelect";

import { locales } from "@/config";

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {locales.map((cur) => (
        <option key={cur} className="p-2" value={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
