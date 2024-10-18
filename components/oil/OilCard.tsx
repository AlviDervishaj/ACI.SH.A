"use client";
import Image from "next/image";
import { memo } from "react";

import { Card, CardHeader } from "@/components/ui/card";
import { Link } from "@/config/routing";

type OilProps = {
  item: {
    title: string;
    image: string;
    description?: string;
  };
};

export const OilCard = memo(
  function OilCard({ item }: OilProps) {
    return (
      <Link className="w-fit h-fit" href={`/oil/${item.title.toLowerCase()}/`}>
        <Card className="p-0 w-[7.856rem] lg:w-[12rem] h-fit group overflow-hidden">
          <CardHeader className="p-0 absolute z-10 flex-col items-start">
            <p className="p-1 text-tiny text-white/60 uppercase font-bold">
              {item.description}
            </p>
            <h4 className="pl-3 text-white font-bold tracking-wide text-2xl group-hover:text-yellow-500 transition-colors duration-300 ease-in-out">
              {item.title}
            </h4>
          </CardHeader>
          <Image
            alt="Card example background"
            className="object-cover w-[140px] h-[140px] md:h-48 md:w-48 transition-transform duration-500 ease-in-out group-hover:scale-110 z-0"
            height={200}
            loading="lazy"
            quality={100}
            src={item.image}
            width={200}
          />
        </Card>
      </Link>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.item.title === nextProps.item.title;
  },
);
