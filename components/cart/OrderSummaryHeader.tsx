"use client";

import { useTranslations } from "next-intl";

export const OrderSummaryHeader = () => {
  const t = useTranslations("Cart");
  return (
    <section className="w-full h-fit p-2">
      <h1 className="text-2xl font-bolder py-2 text-left">{t("order_summary")}</h1>
    </section>
  );
}
