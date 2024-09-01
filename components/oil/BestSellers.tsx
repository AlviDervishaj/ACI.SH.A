"use client";
import { useFormatter, useTranslations } from "next-intl";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useEffect, useState } from "react";
import type { Item } from "@/types";
import Link from "next/link";
import { Skeleton } from "@nextui-org/skeleton";

export function BestSellers() {
  const numberF = useFormatter();
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


  if (isLoading) {
    return (
      <div className="py-8 lg:w-[850px] space-y-4" >
        <Skeleton className={"h-12 rounded-lg w-[250px]"} />
        <section className={`gap-2 grid p-2 w-full grid-cols-3 px-4 py-6`}>
          <Skeleton className={"w-[120px] h-[140px] md:h-48 md:w-48 rounded-lg"} />
          <Skeleton className={"w-[120px] h-[140px] md:h-48 md:w-48 rounded-lg"} />
          <Skeleton className={"w-[120px] h-[140px] md:h-48 md:w-48 rounded-lg"} />
        </section>
      </div>
    )
  }

  return (
    <div className="py-8 lg:w-[850px] space-y-4" >
      <h2 className={"tracking-wide inline font-bold text-center text-[2.3rem] lg:text-5xl leading-9 p-4"}>
        {t("best_sellers")}
      </h2>
      <section className={`gap-2 grid p-2 w-full grid-cols-${sortedItems.length} px-4 py-6`}>
        {sortedItems.length >= 1 ?
          sortedItems.map((item, index) => {
            return (
              <Card
                shadow="lg"
                isPressable
                isHoverable
                key={`${item.title} ${item.description} ${index}`}
                onPress={() => { }}
                className={"w-fit h-fit group"}
              >
                <CardBody className="overflow-visible p-0">
                  <Image
                    className="w-full object-cover w-[140px] h-[140px] md:h-48 md:w-48 transition-transform duration-500 ease-in-out group-hover:scale-105"
                    shadow={"sm"}
                    radius={"lg"}
                    width="100%"
                    alt={item.title}
                    src={item.image}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b className="font-bold tracking-wider">{item.title}</b>
                  <p className="text-default-700">{numberF.number(item.price, { style: "currency", currency: "USD" })}</p>
                </CardFooter>
              </Card>
            )
          })
          : <section className="w-full h-full p-2 grid place-items-center gap-3">
            <h2 className="text-4xl">No items are available at this time. </h2>
            <p className="text-3xl">Please try again later. </p>
            <small className="text-lg">If you think this is an bug / issue then contact {' '}
              <Link className="text-sky-500" href="mailto://alvidervishaj9@gmail.com">Support Team</Link>
            </small>
          </section>
        }
      </section>
    </div>
  )
} 
