import { useMemo } from "react";

import { TryAgainLater } from "@/components/_layout/TryAgainLater";
import { Carousel } from "@/components/carousel/Carousel";
import { OilCard } from "@/components/oil/OilCard";

export function RenderOilCompanies() {
  type OilCardProps = { image: string; title: string; id: number };

  const items: Array<OilCardProps> = useMemo(
    () => [
      {
        id: 1,
        image: "/images/galp.png",
        title: "Galp",
      },
      {
        id: 2,
        image: "/images/repsol-car.jpg",
        title: "Repsol",
      },
      {
        id: 3,
        image: "/images/prefix.jpg",
        title: "Prefix",
      },
    ],
    [],
  );

  return (
    <div className="grid gap-2 w-full grid-cols-auto">
      {items.length >= 1 ? (
        <Carousel
          Component={OilCard}
          options={{ loop: true, axis: "x", align: "start", slidesToScroll: 2 }}
          slides={items}
        />
      ) : (
        <TryAgainLater />
      )}
    </div>
  );
}
