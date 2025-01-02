"use client";

import Image from "next/image";
import { memo } from "react";

import { Card, CardHeader } from "@/components/ui/card";
import { Link } from "@/i18n/routing";

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
      <Link href={`/lubricants?oil=${item.title}`}>
        <Card className="w-fit select-none transition-transform duration-500 ease-in-out hover:scale-110 dark:bg-slate-800 overflow-hidden">
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
            className="object-cover aspect-square w-auto bg-transparent z-0"
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
