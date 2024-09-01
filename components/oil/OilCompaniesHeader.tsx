import { useTranslations } from "next-intl";

export function OilCompaniesHeader() {
  const t = useTranslations("Home");
  return (
    <h2
      className="tracking-wide inline font-bold text-center text-[2.3rem] lg:text-5xl leading-9 p-4"
    >
      {t("brands")}
    </h2>
  )
}
