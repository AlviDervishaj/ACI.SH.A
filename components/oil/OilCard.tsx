"use client";
import { Link } from "@/config/routing";
import { Card, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

type OilProps = {
  item: {
    title: string;
    image: string;
    description?: string;
  }
};

export function OilCard({ item }: OilProps) {
  return (
    <Link href={`/oil/${item.title.toLowerCase()}/`} className="w-fit h-fit">
      <Card className="w-[7.856rem] lg:w-[12rem] h-fit group">
        <CardHeader className="absolute z-10 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {item.description}
          </p>
          <h4 className="text-white font-bold tracking-wide text-2xl group-hover:text-yellow-500 transition-colors duration-300 ease-in-out">
            {item.title}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          radius={"lg"}
          alt="Card example background"
          className={"w-full object-cover w-[140px] h-[140px] md:h-48 md:w-48 transition-transform duration-500 ease-in-out group-hover:scale-110 z-0"}
          src={item.image}
        />
      </Card>
    </Link>
  );
}
