"use client";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import type { Item } from "@/types";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardBody } from "@nextui-org/react";
import { CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { BestSellerCard } from "../BestSellerCard";

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
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [])

  const chooseAutoplay = useCallback(() => {
    if (sortedItems.length >= 2) return [Autoplay({
      delay: 10 * 1000,
    })]
    else return [];
  }, [sortedItems])


  if (isLoading) {
    return (
      <div className="py-8 lg:w-[850px] space-y-4" >
        <Skeleton className={"h-12 rounded-lg w-[250px]"} />
        <section className={`gap-20 place-items-evenly grid p-2 w-full grid-cols-2 px-4 py-6`}>
          <Skeleton className={"w-[130px] h-[150px] md:h-48 md:w-48 rounded-lg"} />
          <Skeleton className={"w-[130px] h-[150px] md:h-48 md:w-48 rounded-lg"} />
        </section>
      </div>
    )
  }

  return (
    <div className="py-8 space-y-4 overflow-hidden">
      <h2 className={"tracking-wide inline font-bold text-center text-[2.3rem] lg:text-5xl leading-9 p-4"}>
        {t("best_sellers")}
      </h2>
      <Carousel
        className="w-full py-10 max-w-[20rem] lg:max-w-[36rem] !border-0 !rounded-b-lg !rounded-lg !bg-transparent"
        plugins={chooseAutoplay()}
        opts={{slidesToScroll: 2, axis: "x", loop: true}}
      >
        <CarouselContent>
          {sortedItems.length >= 1 ? sortedItems.map((item) => (
            <CarouselItem key={item.id} className="basis-auto p-0 m-2 !shadow-none">
              <Card className="m-0 p-0 border-0 !shadow-none !bg-transparent flex flex-row items-center content-center justify-center rounded-lg">
                <CardBody className={"w-full p-3 lg:m-3 h-fit flex items-center justify-center !shadow-none rounded-lg !bg-transparent"}>
                  <BestSellerCard item={item} />
                </CardBody>
              </Card>
            </CarouselItem>
          )) :
            <section className="w-full h-full p-2 grid place-items-center gap-3">
              <h2 className="text-4xl">No items are available at this time. </h2>
              <p className="text-3xl">Please try again later. </p>
              <small className="text-lg">If you think this is an bug / issue then contact {' '}
                <Link className="text-sky-500" href="mailto://alvidervishaj9@gmail.com">Support Team</Link>
              </small>
            </section>
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
