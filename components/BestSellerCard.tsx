// import { useRouter } from "@/config/routing";
import { useRouter } from "@/config/routing";
import { Item } from "@/types";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useFormatter } from "next-intl";
import { useIsomorphicLayoutEffect } from "usehooks-ts";

export function BestSellerCard({ item }: { item: Item }) {
  const numberF = useFormatter();
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    router.prefetch(`/oil/${item.id}`)
  }, []);

  return (
    <Card
      className="w-[7.856rem] lg:w-[12rem] select-none h-fit group"
      shadow="sm" key={item.id} isPressable isHoverable onPress={() => router.push(`/oil/${item.id}`)}>
      <CardBody className="overflow-visible p-0 group">
        <Image
          className="object-cover w-[140px] h-[140px] md:h-48 md:w-48 transition-transform duration-500 ease-in-out group-hover:scale-90"
          radius={"lg"}
          alt={item.title}
          src={item.image}
        />
      </CardBody>
      <CardFooter className="text-small flex flex-row justify-between items-center content-center">
        <h3 className="font-bold text-left text-xs truncate w-full md:text-sm">{item.title}</h3>
        <p className="text-xs lg:text-base font-medium tracking-wide self-end">{numberF.number(item.price, { style: "currency", currency: "usd" })}</p>
      </CardFooter>
    </Card>
  );
}
/**
  return (
    <Card
      isPressable
      isHoverable
      key={`${item.title} ${item.description} ${item.id}`}
      className="w-[7.856rem] lg:w-[12rem] select-none h-fit group"
    // on click ?
    >
      <CardBody className="overflow-visible p-0">
        <Image
          className="object-cover w-[140px] h-[140px] md:h-48 md:w-48 transition-transform duration-500 ease-in-out group-hover:scale-110"
          shadow={"sm"}
          radius={"lg"}
          width="100%"
          alt={item.title}
          src={item.image}
        />
      </CardBody>
      <CardFooter className="p-1 m-0 flex flex-col backdrop-blur-md absolute bottom-0 border-t-1 border-zinc-200/50 bg-white/30 dark:bg-black/50 z-10 text-small">
        <h3 className="font-bold text-left text-xs truncate w-full md:text-base self-start m-auto inline">{item.title}</h3>
        <p className="text-xs lg:text-base font-medium tracking-wide self-end">{numberF.number(item.price, { style: "currency", currency: "usd" })}</p>
      </CardFooter>
    </Card>
  );
 * */
