"use client";
import { useShoppingCart } from "@/providers/ShoppingCartProvider"
import { Card } from "../ui/card"
import { useFormatter, useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { OrderItem } from "./OrderItem";

export const OrderSummary = () => {
  const { products: cartItems, totalPrice, increaseQuantity, decreaseQuantity } = useShoppingCart();
  const t = useTranslations("Cart");
  const numberF = useFormatter();

  const handleCheckout = () => {
    // TODO: Implement checkout
    return;

  }

  return (
    <section className="sm:pb-12">
      {cartItems.length < 1 && <p className="text-lg text-center font-medium tracking-wide">{t("empty_cart")}</p>}
      {cartItems.length >= 1 &&
        <Card className="max-w-2xl mx-auto">
          <ScrollArea className="h-96">
            {cartItems.map((cartItem) => <OrderItem
              key={cartItem.product.id}
              item={cartItem}
              increaseQuantityAction={increaseQuantity}
              decreaseQuantityAction={decreaseQuantity}
            />)}
          </ScrollArea>
          <div className="w-11/12 mx-auto pb-1 pt-2 flex items-center content-center justify-between">
            <p className="text-lg font-medium">Total </p>
            <p className="inline font-bold tracking-wide text-xl">
              {numberF.number(totalPrice, {
                style: "currency",
                currency: "usd",
              })}
            </p>
          </div>
          <div className="w-11/12 mx-auto pb-3">
            <Button
              className="w-full mt-4 bg-orange-600/80 hover:bg-orange-600 cursor-pointer"
              onClick={handleCheckout}
            >
              {t("checkout")}
            </Button>
          </div>
        </Card>
      }
    </section>
  )
}


