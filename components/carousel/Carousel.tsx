"use client";
import type { Product } from "@/types/Product";

import { memo } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import LubricantItem from "../lubricants/LubricantItem";

type PropType = {
  items: Product[];
};

export const CarouselWrapper = memo(
  function CarouselGeneric({ items }: PropType) {
    return (
      <Carousel
        className="w-[24rem] md:w-9/12 mx-auto pb-4 pt-3"
        opts={{
          align: "start",
          loop: true,
          axis: "x",
        }}
      >
        <CarouselContent className="-ml-1">
          {items.map((item) => (
            <CarouselItem key={item.id} className="pl-1 basis-1/2 lg:basis-1/3">
              <LubricantItem {...item} />
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
