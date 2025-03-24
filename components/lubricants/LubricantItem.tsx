"use client";
import Image from "next/image";
import { useFormatter } from "next-intl";
import { useMemo } from "react";
import { Minus, Plus } from "lucide-react";

import { useShoppingCart } from "@/providers/ShoppingCartProvider";
import { Link } from "@/i18n/routing";
import type { Product } from "@/types/Product";

import { Button } from "../ui/button";
import { card, flex, text } from "../primitives";

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
  }, [products, item.id]);

  return (
    <section
      key={`${item.id} ${item.name}`}
      className={card({
        variant: "elevated",
        padding: "none",
        hover: "shadow",
        className: "min-w-32 w-full h-full group relative sm:w-8/12 md:w-[12.25rem] md:h-fit border border-slate-200 dark:border-slate-700 overflow-hidden"
      })}
    >
      <div className="flex items-center justify-center w-full pt-4 pb-2">
        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden
          bg-gradient-to-br from-white to-slate-100 dark:from-slate-800 dark:to-slate-900
          flex items-center justify-center shadow-sm border border-slate-200/50 dark:border-slate-700/50">
          <Image
            alt={item.name}
            className="object-contain w-full h-full p-2
            transition-transform duration-300 group-hover:scale-105"
            height={150}
            src={item.main_image || "/images/no-image.avif"}
            width={150}
            priority={false}
            quality={90}
          />
        </div>
      </div>
      <div className="w-full px-3 pb-2 flex flex-col justify-between items-center">
        <Link
          className={text({
            color: "accent",
            size: "xs",
            weight: "medium",
            tracking: "wide",
            className: "text-center hover:border-b-foreground dark:hover:border-b-orange-400 border-b border-b-transparent transition-all duration-300 w-full truncate"
          })}
          href={`/lubricants/${item.name}/`}
        >
          {item.name}
        </Link>
        <p className={text({
          weight: "semibold",
          tracking: "wide",
          size: "sm",
          className: "py-2 dark:text-slate-200"
        })}>
          {item.has_discount ? (
            <>
              <span className={text({
                size: "xs",
                color: "danger",
                className: "line-through mr-1"
              })}>
                {numberF.number(item.sell_price, "currency")}
              </span>
              <span className="text-emerald-600 dark:text-emerald-400">
                {numberF.number(item.total_discount, "currency")}
              </span>
            </>
          ) : (
            numberF.number(item.sell_price, "currency")
          )}
        </p>
      </div>
      <section className="w-full h-12 px-3 pb-3 flex items-center justify-center">
        {isProductInCart(item) ? (
          <div className={flex({ 
            justify: "between",
            fullWidth: true,
            gap: "sm",
            className: "h-9" 
          })}>
            <Button
              size="sm"
              variant="outline"
              onClick={() => decreaseQuantity(item)}
              className="dark:border-slate-600 dark:bg-slate-800/70 dark:hover:bg-slate-700 dark:text-slate-100 h-9"
            >
              <Minus className="dark:stroke-slate-200" />
            </Button>
            <p className={text({
              align: "center",
              size: "lg",
              weight: "medium",
              className: "min-w-6 dark:text-slate-200"
            })}>
              {itemQuantity}
            </p>
            <Button
              size="sm"
              variant="outline"
              onClick={() => increaseQuantity(item)}
              className="dark:border-slate-600 dark:bg-slate-800/70 dark:hover:bg-slate-700 dark:text-slate-100 h-9"
            >
              <Plus className="dark:stroke-slate-200" />
            </Button>
          </div>
        ) : (
          <Button
            className="w-full hover:border-orange-600 hover:bg-orange-500/60 
            transition-colors ease-in-out duration-200 active:bg-orange-500
            dark:bg-slate-800/90 dark:text-slate-100 dark:hover:bg-slate-700
            dark:border-slate-600 dark:hover:border-orange-400 font-medium h-9"
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
