import Image from "next/image";
import { useFormatter } from "next-intl";
import { memo } from "react";

import { Link } from "@/config/routing";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Item } from "@/types";

export const BestSellerCard = memo(function BestSellerCard({
  item,
}: {
  item: Item;
}) {
  const numberF = useFormatter();

  return (
    <Link href={`/oil/${item.id}`}>
      <Card
        key={item.id}
        className="w-[7.856rem] lg:w-[12rem] select-none md:h-48 lg:h-56 group dark:bg-slate-800 flex flex-col items-center content-between overflow-x-hidden justify-center"
      >
        <CardContent className="w-full h-full flex flex-row items-center content-center justify-center p-0 group">
          <Image
            alt={item.name}
            className="object-cover w-36 h-36 transition-transform duration-500 ease-in-out group-hover:scale-90"
            height={150}
            quality={100}
            src={item.main_image}
            width={150}
          />
        </CardContent>
        <CardFooter className="w-full p-1 lg:p-3 text-small flex flex-col justify-center gap-1 items-center content-center">
          <h3 className="font-bold text-left text-xs truncate w-full md:text-sm">
            {item.name}
          </h3>
          <p className="text-xs lg:text-base font-medium tracking-wide pr-1 self-end">
            {numberF.number(parseFloat(item.sell_price), {
              style: "currency",
              currency: "usd",
            })}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
});
