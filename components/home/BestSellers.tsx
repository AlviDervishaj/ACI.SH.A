"use client";

import useSWR from "swr";
import { useTranslations } from "next-intl";

import LubricantItem from "../lubricants/LubricantItem";

import { Loading } from "@/components/_layout/Loading";
import { TryAgainLater } from "@/components/_layout/TryAgainLater";
import { Link } from "@/i18n/routing";
import { fetcher } from "@/lib/utils";
import { PRODUCTS_API } from "@/config/api";
import { ListProducts } from "@/types/Api";

export default function BestSellers() {
  const t = useTranslations("Home");
  const { data, isLoading, error } = useSWR<ListProducts>(
    PRODUCTS_API.GET,
    fetcher,
  );

  return (
    <div className="py-8 w-full md:w-full lg:w-[53rem]">
      <div className="w-full h-fit p-0 m-0 flex flex-row items-center content-center justify-between">
        <h2
          className={
            "tracking-wide inline font-bold text-center text-2xl lg:text-3xl leading-9 pl-0"
          }
          id="bestSellers"
        >
          {t("best_sellers")}
        </h2>
        <Link
          className="border-b-2 hover:border-b-slate-600 dark:hover:border-b-slate-400 border-b-transparent transition-colors duration-300 ease-in-out"
          href="/lubricants"
        >
          {t("view_all")}
        </Link>
      </div>
      {error && <TryAgainLater />}
      {isLoading && (
        <div className="py-2 md:py-8 grid place-items-center h-1/2 w-full">
          <Loading />
        </div>
      )}
      {data && data.data.length >= 1 && (
        <section className="flex flex-col md:flex-row items-center content-center justify-start px-3 md:justify-evenly gap-4 p-4 overflow-y-auto">
          {data.data.slice(0, 3).map((item) => (
            <LubricantItem key={item.id} {...item} />
          ))}
        </section>
      )}
    </div>
  );
}
