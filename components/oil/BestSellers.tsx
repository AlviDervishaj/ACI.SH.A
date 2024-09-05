"use client";
import type { Item } from "@/types";
import { Link } from "@/config/routing";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Carousel } from "../carousel/Carousel";

export function BestSellers() {
  const t = useTranslations("Home");
  const [sortedItems, setSortedItems] = useState<Array<Item>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const bestSellers: Array<Item> = [
      { title: "Oil 1", id: 0, image: "/images/repsol-car.jpg", price: 19.99 },
      { title: "Oil 2", id: 1, image: "/images/prefix.jpg", price: 1.99 },
      { title: "Oil 3", id: 2, image: "/images/galp.png", price: 9.99 },
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

  return (
    <div>
      <h2 className={"tracking-wide inline font-bold text-center text-[2.3rem] lg:text-5xl leading-9 p-4 pl-0"}>
        {t("best_sellers")}
      </h2>
      {sortedItems.length >= 1 ?
        <Carousel slides={sortedItems} options={{ loop: true, axis: "x", align: "start", slidesToScroll: 2 }} />
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
