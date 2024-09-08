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
      key={`${item.title} ${item.description} ${item.id}`}
      className="w-[7.856rem] lg:w-[12rem] select-none h-fit group"
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
      <CardFooter className="p-1 m-0 flex flex-col backdrop-blur-md absolute bottom-0 border-t-1 border-zinc-200/50 bg-white/15 dark:bg-black/50 z-10 text-small">
        <h3 className="font-bold text-left text-xs truncate w-full md:text-base self-start m-auto inline">{item.title}</h3>
        <p className="text-xs lg:text-base font-medium tracking-wide self-end">{numberF.number(item.price, { style: "currency", currency: "usd" })}</p>
      </CardFooter>
    </Card>
  );
}
