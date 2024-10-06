import Image from "next/image";
import { useFormatter } from "next-intl";
import { useIsomorphicLayoutEffect } from "usehooks-ts";

import { Link } from "@/config/routing";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Item } from "@/types";
import { useRouter } from "@/config/routing";

export function BestSellerCard({ item }: { item: Item }) {
  const numberF = useFormatter();
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    router.prefetch(`/oil/${item.id}`);
  }, []);

  return (
    <Link href={`/oil/${item.id}`}>
      <Card
        key={item.id}
        className="w-[7.856rem] lg:w-[12rem] select-none h-fit group dark:bg-slate-800"
        onClick={() => router.push(`/oil/${item.id}`)}
      >
        <CardContent className="flex flex-row items-center content-center justify-center p-0 group">
          <Image
            alt={item.name}
            className="object-cover w-[100px] h-[100px] md:h-48 md:w-48 transition-transform duration-500 ease-in-out group-hover:scale-90"
            height={200}
            src={item.main_image}
            width={200}
          />
        </CardContent>
        <CardFooter className="p-3 text-small flex flex-col justify-center gap-1 items-center content-center">
          <h3 className="font-bold text-left text-xs truncate w-full md:text-sm">
            {item.name}
          </h3>
          <p className="text-xs lg:text-base font-medium tracking-wide self-end">
            {numberF.number(parseFloat(item.sell_price), {
              style: "currency",
              currency: "usd",
            })}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
