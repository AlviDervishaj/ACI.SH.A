"use client";
import { useTranslations } from "next-intl";
import { title } from "@/components/primitives";

export function OilCompaniesHeader() {
  const t = useTranslations("Home");
  return (
    <h2
      className={title({
        size: "md",
        className:
          "text-center drop-shadow-md w-fit h-fit p-2 light:text-black",
      })}
    >
      {t.rich("see_below", {
        component: (component) => (
          <p className={title({ size: "md", color: "orange" })}>
            &nbsp;{component}&nbsp;
          </p>
        ),
      })}
    </h2>
  )
}
