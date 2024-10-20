"use client";
import type { Item } from "@/types";

import useSWR from "swr";
import { useTranslations } from "next-intl";
import { TriangleAlert } from "lucide-react";

import { Loading } from "@/components/_layout/Loading";
import { TryAgainLater } from "@/components/_layout/TryAgainLater";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CarouselWrapper } from "@/components/carousel/Carousel";
import { Link } from "@/config/routing";
import { fetcher } from "@/lib/utils";

export default function BestSellers() {
  const t = useTranslations("Home");
  const { data, isLoading, error } = useSWR<Item[]>(
    "https://my.api.mockaroo.com/oils.json?key=2411cd00",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    },
  );

  return (
    <div className="py-8 w-full md:w-full lg:w-[53rem]">
      {error && (
        <Alert variant="destructive">
          <TriangleAlert className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      )}
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
      {isLoading && (
        <div className="py-2 md:py-8 grid place-items-center h-1/2 w-full">
          <Loading />
        </div>
      )}
      {data && data.length >= 1 ? (
        <CarouselWrapper items={data.slice(0, 6)} />
      ) : (
        <TryAgainLater />
      )}
    </div>
  );
}
