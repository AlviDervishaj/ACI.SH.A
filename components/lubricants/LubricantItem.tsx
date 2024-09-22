import Image from "next/image";
import { useFormatter } from "next-intl";

import { Button } from "@/components/ui/button";
import { Link } from "@/config/routing";
import { Item } from "@/types";

const Images = [
  "/images/oils/galp-oil-1.png",
  "/images/oils/galp-oil-2.png",
  "/images/oils/galp-oil-3.png",
  "/images/oils/galp-oil-4.png",
  "/images/oils/galp-oil-5.png",
];

export default function LubricantItem(item: Item) {
  const numberF = useFormatter();
  const randomNumber = Math.floor(Math.random() * Images.length);

  return (
    <Link className="w-fit h-fit" href={`/oil/${item.name.toLowerCase()}/`}>
      <Button
        key={`${item.id} ${item.name}`}
        className="min-w-28 w-full h-full transition-colors-opacity
      duration-500 ease-in-out group relative flex flex-col
      items-center content-center rounded-lg justify-between
      md:w-[12.25rem] md:h-[12.25rem] p-0"
        variant="outline"
      >
        <Image
          alt={item.name}
          className="object-cover aspect-square w-[6.25rem] h-[6.25rem] md:w-[8.25rem] md:h-[8.25rem] transition-transform duration-500 ease-in-out group-hover:scale-110"
          height={150}
          src={Images[randomNumber]}
          width={150}
        />
        <div className="text-small p-1 lg:p-2 w-11/12 lg:w-full flex flex-col justify-between items-center content-center">
          <h3 className="text-left text-xs md:text-sm font-medium tracking-wide self-end w-full truncate inline word-break">
            {item.name}
          </h3>
          <p className="font-semibold tracking-wide self-end text-sm md:text-base">
            {numberF.number(parseFloat(item.sell_price), {
              style: "currency",
              currency: "usd",
            })}
          </p>
        </div>
      </Button>
    </Link>
  );
}
