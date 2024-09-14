import { useRouter } from "@/config/routing";
import { MockData } from "@/mock_data";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useFormatter } from "next-intl";
import { useIsomorphicLayoutEffect } from "usehooks-ts";

type Props = typeof MockData[0];


const Images = [
  "/images/oils/galp-oil-1.png",
  "/images/oils/galp-oil-2.png",
  "/images/oils/galp-oil-4.png",
  "/images/oils/galp-oil-5.png",
];


export function LubricantItem(item: Props) {
  const numberF = useFormatter();
  const router = useRouter();
  const randomNumber = Math.floor(Math.random() * Images.length);

  useIsomorphicLayoutEffect(() => {
    router.prefetch(`/oil/${item.id}`)
  }, [item.id]);

  return (
    <section
      className="w-full h-full bg-default-300/30
      hover:bg-default-300/85
      transition-colors-opacity
      duration-500
      ease-in-out
      group relative flex flex-col 
      items-center content-center rounded-md justify-between
      md:w-[12.25rem] md:h-[12.25rem] pb-1"
      key={item.id} onClick={() => router.push(`/oil/${item.id}`)}>
      <Image
        isZoomed
        className="object-cover aspect-square w-[6.25rem] h-[6.25rem] md:w-[8.25rem] md:h-[8.25rem] transition-transform duration-500 ease-in-out group-hover:scale-110"
        radius={"md"}
        alt={item.product_name}
        src={Images[randomNumber]}
      />
      <div className="text-small p-1 lg:p-2 w-11/12 lg:w-full flex flex-col justify-between items-center content-center">
        <h3 className="font-semibold tracking-wide self-start text-left text-sm w-full truncate inline word-break md:text-base">{item.product_name}</h3>
        <p className="text-xs md:text-base font-medium tracking-wide self-end">{numberF.number(item.price, { style: "currency", currency: "usd" })}</p>
      </div>
    </section>
  );
}
