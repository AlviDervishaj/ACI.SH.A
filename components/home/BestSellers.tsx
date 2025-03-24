"use client";

import useSWR from "swr";
import { useTranslations } from "next-intl";

import { Loading } from "@/components/_layout/Loading";
import { TryAgainLater } from "@/components/_layout/TryAgainLater";
import { Link } from "@/i18n/routing";
import { fetcher } from "@/lib/utils";
import { PRODUCTS_API } from "@/config/api";
import type { ListProducts } from "@/types/Api";

import LubricantItem from "../lubricants/LubricantItem";
import { container, flex, section, title } from "../primitives";

export default function BestSellers() {
  const t = useTranslations("Home");
  const { data, isLoading, error } = useSWR<ListProducts>(
    PRODUCTS_API.GET_POPULAR,
    fetcher,
  );

  return (
    <section className={container({ size: "lg" })}>
      <div className={flex({ justify: "between" })}>
        <h2 
          className={title({ size: "sm", color: "foreground" })}
          id="bestSellers"
        >
          {t("best_sellers")}
        </h2>
        <Link
          className="border-b-2 hover:border-b-slate-600 dark:hover:border-b-slate-400 border-b-transparent transition-colors duration-300 ease-in-out text-sm md:text-base"
          href="/lubricants"
        >
          {t("view_all")}
        </Link>
      </div>

      {error && <TryAgainLater />}
      
      {isLoading && (
        <div className={flex({ justify: "center", fullWidth: true })}>
          <Loading />
        </div>
      )}
      
      {data && data.data.length >= 1 && (
        <div className={section({ grid: 3 })}>
          {data.data.slice(0, 3).map((item) => (
            <div key={item.id} className={flex({ justify: "center" })}>
              <LubricantItem {...item} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
