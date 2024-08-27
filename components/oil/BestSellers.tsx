import { useFormatter, useTranslations } from "next-intl";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useEffect, useState } from "react";
type Item = { title: string, image: string, price: number, description?: string }
type Props = {
  items: Array<Item>
}

export function BestSellers({ items }: Props) {
  const t = useTranslations("Home");
  const numberF = useFormatter();

  const [sortedItems, setSortedItems] = useState<typeof items>([]);

  useEffect(() => {
    items.sort((a, b) => {
      if (a.price > b.price) {
        console.log("a bigger", a);
        return 1;
      }
      else if (a.price < b.price) {
        console.log("b bigger", b);
        return -1;
      }
      else return 0;
    })
    setSortedItems(items);
  }, [items])

  return (
    <div
      className="py-8 lg:w-[850px] space-y-4"
    >
      <h2
        className={"tracking-wide inline font-bold text-center text-[2.3rem] lg:text-5xl leading-9 p-4"}>
        {t("best_sellers")}
      </h2>
      <section className={`gap-2 grid p-2 w-full grid-cols-${items.length} px-4 py-6`}>
        {sortedItems.length >= 1 ?
          items.map((item, index) => {
            return (
              <Card
                shadow="lg"
                isPressable
                isHoverable
                key={`${item.title} ${item.description} ${index}`}
                onPress={() => { }}
                className={"w-fit h-fit"}
              >
                <CardBody className="overflow-visible p-0">
                  <Image
                    className="w-full object-cover w-[140px] h-[140px] md:h-48 md:w-48"
                    shadow={"sm"}
                    radius={"lg"}
                    width="100%"
                    alt={item.title}
                    src={item.image}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b className="font-bold tracking-wider">{item.title}</b>
                  <p className="text-default-500">{numberF.number(item.price, { style: "currency", currency: "USD" })}</p>
                </CardFooter>
              </Card>
            )
          })
          : null
        }
      </section>
    </div>
  )
} 
