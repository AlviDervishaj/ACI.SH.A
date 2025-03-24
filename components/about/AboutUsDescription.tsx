import { useTranslations } from "next-intl";

import { title } from "@/components/primitives";

export default function AboutUsDescription() {
  const t = useTranslations("About_Us");

  return (
    <section className="space-y-9 py-6 px-4 md:px-6">
      <h1
        className={`${title({ fullWidth: true, size: "sm" })} !w-full text-left`}
      >
        {t.rich("header", {
          distributor: (chunk) => (
            <p className={title({ size: "md", color: "orange" })}>{chunk}</p>
          ),
        })}
      </h1>
      <div className="text-base pt-4 lg:text-lg xl:text-xl tracking-wide">
        {t.rich("mainDescription", {
          distributor: (chunk) => (
            <p className={title({ size: "base", color: "orange" })}>{chunk}</p>
          ),
          companyName: (chunk) => (
            <p className={title({ size: "base", color: "blue" })}>
              {chunk}&nbsp;
            </p>
          ),
        })}
      </div>
      <div className="text-base lg:text-lg xl:text-xl tracking-wide pb-8">
        {t.rich("secondP", {
          distributor: (chunk) => (
            <p className={title({ size: "base", color: "orange" })}>{chunk}</p>
          ),
          companyName: (chunk) => (
            <p className={title({ size: "base", color: "blue" })}>
              {chunk}&nbsp;
            </p>
          ),
        })}
      </div>
      <h2 className={title({ size: "xs" })}>{t("footer")}</h2>
    </section>
  );
}
