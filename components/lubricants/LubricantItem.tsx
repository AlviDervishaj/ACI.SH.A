import Image from "next/image";
import { useFormatter } from "next-intl";

import { Button } from "@/components/ui/button";
import { Link } from "@/config/routing";
import { Item } from "@/types";

export default function LubricantItem(item: Item) {
  const numberF = useFormatter();

  return (
    <Link className="w-fit h-fit" href={`/oil/${item.id.toLowerCase()}/`}>
      <Button
        key={`${item.id} ${item.name}`}
        className="min-w-32 w-full h-full transition-colors-opacity
      duration-500 ease-in-out group relative flex flex-col
      items-center content-center rounded-lg
      md:w-[12.25rem] md:h-fit p-0 m-0"
        variant="outline"
      >
        <Image
          alt={item.name}
          className="object-cover aspect-square w-[7rem] h-[7rem] md:w-[8.25rem] md:h-[8.25rem] transition-transform duration-500 ease-in-out group-hover:scale-110"
          height={150}
          src={item.main_image}
          width={150}
        />
        <div className="lg:p-2 w-11/12 lg:w-full flex flex-col justify-between items-center content-center">
          <h3 className="text-left text-xm md:text-sm font-medium tracking-wide self-end w-full truncate inline word-break">
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
