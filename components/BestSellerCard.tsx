// import { useRouter } from "@/config/routing";
import { Item } from "@/types";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useFormatter } from "next-intl";

export function BestSellerCard({ item }: { item: Item }) {
  const numberF = useFormatter();
  // const router = useRouter();
  return (
    <Card
      isPressable
      isHoverable
      isFooterBlurred
      shadow="lg"
      key={`${item.title} ${item.description} ${item.id}`}
      className={"w-[7.856rem] lg:w-[12rem] h-fit group"}
    // on click ?
    >
      <CardBody className="overflow-visible p-0">
        <Image
          className="w-full object-cover w-[140px] h-[140px] md:h-48 md:w-48 transition-transform duration-500 ease-in-out group-hover:scale-110"
          shadow={"sm"}
          radius={"lg"}
          width="100%"
          alt={item.title}
          src={item.image}
        />
      </CardBody>
      <CardFooter className="flex flex-row p-2 m-0 absolute bottom-0 border-t-1 border-zinc-200/50 bg-black/15 dark:bg-black/50 z-10 justify-between text-small justify-between">
        <h3 className="font-medium tracking-wider text-slate-100 text-lg lg:text-xl">{item.title}</h3>
        <p className="dark:text-default-900 text-default-100 text-base font-bold tracking-wide">{numberF.number(item.price, { style: "currency", currency: "usd" })}</p>
      </CardFooter>
    </Card>
  );
}
