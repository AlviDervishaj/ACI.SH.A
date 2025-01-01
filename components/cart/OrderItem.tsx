"use client";
import Image from "next/image";
import { ShoppingCartProductsType } from "@/types/Providers";
import { Minus, Plus } from "lucide-react";
import { Product } from "@/types/Product";
import { useFormatter } from "next-intl";
import { Button } from "../ui/button";

type OrderItemProps = {
  item: ShoppingCartProductsType,
  increaseQuantityAction: (product: Product) => boolean,
  decreaseQuantityAction: (product: Product) => boolean
}
export const OrderItem = ({ item, increaseQuantityAction, decreaseQuantityAction }: OrderItemProps) => {
  const numberF = useFormatter();
  return (
    <section
      className="w-full h-fit p-3 flex flex-row items-center content-center justify-between gap-x-3"
    >
      <div className="flex items-center content-center justify-start gap-3 w-3/5">
        <Image
          alt={item.product.name}
          className="w-24 h-24 aspect-square border border-black rounded-sm sm:w-auto"
          src={item.product.main_image || "/images/no-image.avif"}
          height={98}
          width={98}
        />
        <section className="w-full">
          <h1 className="pt-1 self-center truncate w-28 sm:w-40">{item.product.name}</h1>
          <p className="text-orange-700/50">{item.product.brand}</p>
        </section>
      </div>
      <div className="w-fit flex flex-col items-center content-center justify-center space-y-1 pl-3">
        <small className="text-center font-bold tracking-wide text-base">
          {numberF.number(item.product.sell_price * item.quantity, {
            style: "currency",
            currency: "usd",
          })}
        </small>
        <section className="flex flex-row items-center content-center justify-start">
          <Button size="icon" variant="outline"
            className="border-r-0 rounded-r-none w-8 h-8"
            onClick={() => decreaseQuantityAction(item.product)}
          >
            <Minus />
          </Button>
          <Button size="icon" variant="outline" className="rounded-none w-8 h-8">
            {item.quantity}
          </Button>
          <Button size="icon" variant="outline"
            className="border-l-0 rounded-l-none w-8 h-8"
            onClick={() => increaseQuantityAction(item.product)}
          >
            <Plus />
          </Button>
        </section>
      </div>
    </section>
  )
}

