import { useTranslations } from "next-intl";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
type Item = { title: string, image: string, price: string, description?: string }
type Props = {
  items: Array<Item>
}

export function BestSellers({ items }: Props) {
  const t = useTranslations("Home");
  return (
    <div
      className="py-8"
    >
      <h2
        className={"tracking-wide inline font-bold text-center text-[2.3rem] lg:text-5xl leading-9 p-4"}>
        {t("best_sellers")}
      </h2>
      <section className={`gap-2 grid p-2 grid-cols-${items.length} px-4 py-6`}>
        {items.length >= 1 ?
          items.map((item) => {
            return (
              <Card
                shadow="lg"
                isPressable
                key={`${item.title} ${item.description}`}
                onPress={() => { }}>
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow={"sm"}
                    radius={"lg"}
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover w-[140px] h-[140px] md:h-48 md:w-48"
                    src={item.image}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{item.title}</b>
                  <p className="text-default-500">{item.price}</p>
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
