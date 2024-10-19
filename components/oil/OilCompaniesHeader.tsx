import { useTranslations } from "next-intl";

export function OilCompaniesHeader() {
  const t = useTranslations("Home");

  return (
    <div className="w-full h-fit p-0 m-0 flex flex-row items-center content-center justify-start">
      <h2 className="tracking-wide inline font-bold text-center text-2xl lg:text-3xl leading-9 pl-0">
        {t("brands")}
      </h2>
    </div>
  );
}
