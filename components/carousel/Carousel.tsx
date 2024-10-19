"use client";
import type { Item } from "@/types";

import { memo } from "react";

import { BestSellerCard } from "../home/BestSellerCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

type PropType = {
  items: Item[];
};

export const CarouselWrapper = memo(
  function CarouselGeneric({ items }: PropType) {
    return (
      <Carousel
        className="min-w-md w-[24rem] md:w-9/12 mx-auto pb-4"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {items.map((item) => (
            <CarouselItem key={item.id} className="pl-1 basis-1/2 lg:basis-1/3">
              <BestSellerCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.items.length === nextProps.items.length;
  },
);
