"use client";
import { Link } from "@/config/routing";
import { Card, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import clsx from "clsx";

type OilProps = {
  title: string;
  image: string;
  description?: string;
  imageStyle?: string;
};

export function OilCard({ title, description, image, imageStyle }: OilProps) {
  return (
    <Link href={`/oil/${title.toLowerCase()}/`} className="w-fit h-fit">
      <Card
        className="group w-fit h-fit border-3 border-transparent hover:border-yellow-600 transition-transform-colors duration-1000 ease-in-out"
      >
        <CardHeader className="absolute z-10 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {description}
          </p>
          <h4 className="text-white font-bold tracking-wide text-2xl group-hover:text-yellow-500 transition-colors duration-300 ease-in-out">
            {title}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className={clsx(
            "z-0 object-cover md:w-[250px] md:h-[250px] w-[150px] h-[150px] ",
            imageStyle,
          )}
          src={image}
        />
      </Card>
    </Link>
  );
}
