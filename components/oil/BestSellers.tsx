"use client";
import type { Item } from "@/types";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { Carousel } from "../carousel/Carousel";

import { BestSellerCard } from "@/components/home/BestSellerCard";
import { Link } from "@/config/routing";

export default function BestSellers() {
  const t = useTranslations("Home");
  const [sortedItems, setSortedItems] = useState<Array<Item>>([]);

  useEffect(() => {
    const bestSellers: Array<Item> = [
      {
        id: "0",
        stock: 100,
        discount: "0",
        sku_code: "sku_code",
        buy_price: "20",
        main_image: "/images/oils/galp-oil-1.png",
        sell_price: "35",
        description: "Description Here",
        has_discount: false,
        name: "Item 0",
      },
      {
        id: "1",
        stock: 100,
        discount: "0",
        sku_code: "sku_code",
        buy_price: "20",
        main_image: "/images/oils/galp-oil-2.png",
        sell_price: "35",
        description: "Description Here",
        has_discount: false,
        name: "Item 1",
      },
      {
        id: "2",
        stock: 100,
        discount: "0",
        sku_code: "sku_code",
        buy_price: "20",
        main_image: "/images/oils/galp-oil-3.png",
        sell_price: "35",
        description: "Description Here",
        has_discount: false,
        name: "Item 2",
      },
      {
        id: "3",
        stock: 100,
        discount: "0",
        sku_code: "sku_code",
        buy_price: "20",
        main_image: "/images/oils/galp-oil-4.png",
        sell_price: "35",
        description: "Description Here",
        has_discount: false,
        name: "Item 3",
      },
      {
        id: "4",
        stock: 100,
        discount: "0",
        sku_code: "sku_code",
        buy_price: "20",
        main_image: "/images/oils/galp-oil-5.png",
        sell_price: "35",
        description: "Description Here",
        has_discount: false,
        name: "Item 4",
      },
    ].sort((a, b) => {
      const aPrice = parseFloat(a.buy_price);
      const bPrice = parseFloat(b.buy_price);

      if (aPrice > bPrice) {
        return -1;
      } else if (aPrice < bPrice) {
        return 1;
      } else return 0;
    });

    setSortedItems(bestSellers);
  }, []);

  return (
    <div className="py-8 lg:w-[850px]">
      <div className="w-full h-fit p-0 m-0 flex flex-row items-center content-center justify-between">
        <h2
          className={
            "tracking-wide inline font-bold text-center text-2xl lg:text-3xl leading-9 pl-0"
          }
        >
          {t("best_sellers")}
        </h2>
        <Link
          className="border-b-2 hover:border-b-default-600 border-b-transparent transition-colors duration-300 ease-in-out"
          href="/lubricants"
        >
          {t("view_all")}
        </Link>
      </div>
      {sortedItems.length >= 1 ? (
        <Carousel
          Component={BestSellerCard}
          options={{
            loop: false,
            axis: "x",
            align: "start",
            slidesToScroll: 2,
          }}
          slides={sortedItems}
        />
      ) : (
        <section className="w-full h-full p-2 grid place-items-center gap-3">
          <h2 className="text-4xl">No items are available at this time. </h2>
          <p className="text-3xl">Please try again later. </p>
          <small className="text-lg">
            If you think this is an bug / issue then contact{" "}
            <Link
              className="text-sky-500"
              href="mailto://alvidervishaj9@gmail.com"
            >
              Support Team
            </Link>
          </small>
        </section>
      )}
    </div>
  );
}
