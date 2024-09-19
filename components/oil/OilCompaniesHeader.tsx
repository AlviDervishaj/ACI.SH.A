import { useTranslations } from "next-intl";

import { header } from "../primitives";

export function OilCompaniesHeader() {
  const t = useTranslations("Home");

  return <h2 className={header()}>{t("brands")}</h2>;
}
