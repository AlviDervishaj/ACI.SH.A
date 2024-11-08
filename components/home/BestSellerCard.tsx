import Image from "next/image";
import { useFormatter } from "next-intl";
import { memo } from "react";

import { Link } from "@/i18n/routing";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Item } from "@/types";

export const BestSellerCard = memo(
  function BestSellerCard({ item }: { item: Item }) {
    const numberF = useFormatter();

    return (
      <Link className="w-full md:w-fit" href={`/oil/${item.id}`}>
        <Card
          key={item.id}
          className="w-full mx-auto md:w-[12rem] select-none lg:h-60 transition-transform duration-300 ease-in-out hover:scale-105  dark:bg-slate-800 flex flex-col items-center content-between overflow-x-hidden justify-center"
        >
          <CardContent className="w-full h-full flex flex-row items-center content-center justify-center p-0 group">
            <Image
              alt={item.name}
              className="object-cover !w-42 !h-42 !aspect-square"
              height={150}
              quality={100}
              src={item.main_image}
              width={150}
            />
          </CardContent>
          <CardFooter className="w-full py-1 pl-2 lg:p-3 text-small flex flex-col justify-center gap-1 items-center content-center">
            <h3 className="md:pl-2 group-hover:text-orange-600 transition-colors duration-300 ease-in-out font-bold text-left text-base truncate w-full md:text-sm">
              {item.name}
            </h3>
            <p className="text-base group-hover:text-orange-600 transition-colors duration-300 ease-in-out lg:text-base font-bold py-1 tracking-wide pr-1 self-end">
              {numberF.number(parseFloat(item.sell_price), {
                style: "currency",
                currency: "usd",
              })}
            </p>
          </CardFooter>
        </Card>
      </Link>
    );
  },
  (prevProps, nextProps) => prevProps.item.id === nextProps.item.id,
);
