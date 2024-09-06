"use client";
import type { Item } from "@/types";
import { Link } from "@/config/routing";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Carousel } from "../carousel/Carousel";
import { BestSellerCard } from "../BestSellerCard";
import { Skeleton } from "@nextui-org/react";

export function BestSellers() {
  const t = useTranslations("Home");
  const [sortedItems, setSortedItems] = useState<Array<Item>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const bestSellers: Array<Item> = [
      { title: "Energy 5W-30", id: 0, image: "/images/oils/galp-oil-1.png", price: 19.99 },
      { title: "15W-40", id: 1, image: "/images/oils/galp-oil-2.png", price: 1.99 },
      { title: "LS Long Life III 5W-30", id: 2, image: "/images/oils/galp-oil-4.png", price: 9.99 },
      { title: "LS 5W-40", id: 3, image: "/images/oils/galp-oil-5.png", price: 8.99 },
    ].sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      }
      else if (a.price < b.price) {
        return 1;
      }
      else return 0;
    })
    setSortedItems(bestSellers);
    setIsLoading(false);
  }, [])

  if (isLoading) {
    return (
      <div className="py-2 lg:py-8 lg:w-[850px] space-y-4">
        <Skeleton className="w-[15rem] h-[3.5rem]">
          <h2 className={"tracking-wide inline font-bold text-center text-[2.3rem] lg:text-5xl leading-9 p-4 pl-0"}>
            {t("best_sellers")}
          </h2>
        </Skeleton>
        <div className="w-full h-fit grid grid-cols-3 gap-4 items-center">
          <Skeleton className="w-3/4">
            <BestSellerCard item={{ title: "Energy 5W-30", id: 0, image: "/images/oils/galp-oil-1.png", price: 19.99 }} />
          </Skeleton>
          <Skeleton className="w-3/4">
            <BestSellerCard item={{ title: "Energy 5W-30", id: 0, image: "/images/oils/galp-oil-1.png", price: 19.99 }} />
          </Skeleton>
          <Skeleton className="w-3/4">
            <BestSellerCard item={{ title: "Energy 5W-30", id: 0, image: "/images/oils/galp-oil-1.png", price: 19.99 }} />
          </Skeleton>
        </div>
      </div>
    )
  }

  return (
    <div className="py-2 lg:py-8 lg:w-[850px]">
      <h2 className={"tracking-wide inline font-bold text-center text-[2.3rem] lg:text-5xl leading-9 p-4 pl-0"}>
        {t("best_sellers")}
      </h2>
      {sortedItems.length >= 1 ?
        <Carousel slides={sortedItems} options={{ loop: false, axis: "x", align: "start", slidesToScroll: 2 }} Component={BestSellerCard} />
        :
        <section className="w-full h-full p-2 grid place-items-center gap-3">
          <h2 className="text-4xl">No items are available at this time. </h2>
          <p className="text-3xl">Please try again later. </p>
          <small className="text-lg">If you think this is an bug / issue then contact {' '}
            <Link className="text-sky-500" href="mailto://alvidervishaj9@gmail.com">Support Team</Link>
          </small>
        </section>
      }
    </div>
  )
}
