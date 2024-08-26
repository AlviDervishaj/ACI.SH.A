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
    <Link href={`/oil/${title.toLowerCase()}/`}>
      <Card
        className="md:w-[250px] md:h-[250px] w-[250px] h-[250px] group col-span-12 sm:col-span-5 border-3 border-transparent hover:border-yellow-600 transition-transform-colors duration-1000 ease-in-out"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
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
            "z-0 w-full h-full scale-125 translate-y-7 translate-x-0 object-cover",
            imageStyle,
          )}
          src={image}
        />
      </Card>
    </Link>
  );
}
