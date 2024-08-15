"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { title } from "@/components/primitives";

export function OilCompaniesHeader() {
  const t = useTranslations("Home");
  return (
    <motion.h2
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
    </motion.h2>
  )
}
