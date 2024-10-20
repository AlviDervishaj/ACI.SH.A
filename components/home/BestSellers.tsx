"use client";
import type { Item } from "@/types";

import { useTranslations } from "next-intl";
import { TriangleAlert } from "lucide-react";
import useSWR from "swr";

import { Loading } from "@/components/_layout/Loading";
import { TryAgainLater } from "@/components/_layout/TryAgainLater";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Carousel } from "@/components/carousel/Carousel";
import { BestSellerCard } from "@/components/home/BestSellerCard";
import { Link } from "@/config/routing";
import { fetcher } from "@/lib/utils";

export default function BestSellers() {
  const t = useTranslations("Home");
  const { data, error, isLoading } = useSWR<Item[]>(
    "https://my.api.mockaroo.com/oils.json?key=2411cd00",
    fetcher,
  );

  return (
    <div className="py-8 md:w-full lg:w-[53rem]">
      {error && (
        <Alert variant="destructive">
          <TriangleAlert className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      )}
      {isLoading && (
        <div className="py-2 md:py-8 grid place-items-center h-full w-full">
          <Loading />
        </div>
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
      {data ? (
        data?.length >= 1 ? (
          <Carousel
            Component={BestSellerCard}
            options={{
              loop: false,
              axis: "x",
              align: "start",
              slidesToScroll: 2,
            }}
            slides={data.slice(0, 6)}
          />
        ) : (
          <TryAgainLater />
        )
      ) : (
        <TryAgainLater />
      )}
    </div>
  );
}
