"use client";
import Image from "next/image";
import { useFormatter } from "next-intl";
import { useMemo } from "react";
import { Minus, Plus } from "lucide-react";

import { useShoppingCart } from "@/providers/ShoppingCartProvider";
import { Link } from "@/i18n/routing";
import { Product } from "@/types/Product";

import { Button } from "../ui/button";

export default function LubricantItem(item: Product) {
  const {
    products,
    addProduct,
    isProductInCart,
    increaseQuantity,
    decreaseQuantity,
  } = useShoppingCart();
  const numberF = useFormatter();

  const itemQuantity = useMemo(() => {
    return products.find((p) => p.product.id === item.id)?.quantity || 0;
  }, [products.find((p) => p.product.id === item.id)?.quantity]);

  return (
    <section
      key={`${item.id} ${item.name}`}
      className="min-w-32 bg-slate-100 w-full h-full p-0 m-0 group relative
      flex flex-col items-center content-center rounded-lg
      sm:w-8/12 md:w-[12.25rem] md:h-fit
      dark:bg-slate-800 transition-colors hover:bg-orange-500/30"
    >
      <Image
        alt={item.name}
        className="object-cover aspect-square w-[7rem] h-[7rem] md:w-[8.25rem] md:h-[8.25rem] pt-2"
        height={150}
        src={item.main_image || "/images/no-image.avif"}
        width={150}
      />
      <div className="lg:p-2 w-11/12 lg:w-full flex flex-col justify-between items-center content-center">
        <Link
          className="text-left text-xm md:text-sm font-medium tracking-wide self-end w-full truncate inline word-break"
          href={`/oil/${item.id}/`}
        >
          {item.name}
        </Link>
        <p className="font-semibold tracking-wide self-end text-sm md:text-base">
          {item.has_discount ? (
            <>
              <span className="line-through text-xs md:text-sm text-red-500">
                {numberF.number(item.sell_price, "currency")}
              </span>{" "}
              {numberF.number(item.total_discount, "currency")}
            </>
          ) : (
            numberF.number(item.sell_price, "currency")
          )}
        </p>
      </div>
      <section className="w-full h-fit px-4 pb-2 flex items-center content-center">
        {isProductInCart(item) ? (
          <div className="flex flex-row items-center content-center justify-between w-full">
            <Button
              size="sm"
              variant="outline"
              onClick={() => decreaseQuantity(item)}
            >
              <Minus />
            </Button>
            <p className="text-center text-lg">{itemQuantity}</p>
            <Button
              size="sm"
              variant="outline"
              onClick={() => increaseQuantity(item)}
            >
              <Plus />
            </Button>
          </div>
        ) : (
          <Button
            className="mx-auto hover:border-orange-600 hover:bg-orange-500/60 transition-colors ease-in-out duration-200 active:bg-orange-500"
            variant="outline"
            onClick={() => addProduct(item)}
          >
            Add To Cart
          </Button>
        )}
      </section>
    </section>
  );
}
