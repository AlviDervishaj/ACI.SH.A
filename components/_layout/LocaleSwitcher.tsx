"use client";
import { useLocale, useTranslations } from "next-intl";

import { LocaleSwitcherSelect } from "./LocaleSwitcherSelect";

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {["en", "al"].map((cur) => (
        <option key={cur} className="p-2" value={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
