"use client";
import { useFormatter, useTranslations } from "next-intl";

import { useShoppingCart } from "@/providers/ShoppingCartProvider";

import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

import { OrderItem } from "./OrderItem";
import { createOrder } from "@/actions/createOrder";
import { useState } from "react";
import { toast } from "sonner";

export const OrderSummary = () => {
  const {
    products: cartItems,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useShoppingCart();
  const t = useTranslations("Cart");
  const numberF = useFormatter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCreateOrder = async () => {
    // TODO: Multi-step form. Register user's name and email and address.
    // Client Secret ?
    setIsLoading(true);
    const result = await createOrder({
      order_products: cartItems.map((item) => ({
        "product": item.product.id,
        "product_count": item.quantity,
      })),
      client_secret: "",
      name: "Alvinnn",
      email: "alvidervishaj9@gmail.com",
      paid: false,
      is_paid_online: false,
      is_admin: false,
      address: "Shemsie Haka",
      printed_receipt: false
    })
    console.log({ result });
    if (result.error) {
      toast.error("Failed to create order");
      return;
    }
    toast.success("Order created successfully");
    clearCart();
    setIsLoading(false);
  }

  return (
    <section className="sm:pb-12">
      {cartItems.length < 1 && (
        <p className="text-lg text-center font-medium tracking-wide">
          {t("empty_cart")}
        </p>
      )}
      {cartItems.length >= 1 && (
        <Card className="max-w-2xl mx-auto">
          <ScrollArea className="h-96">
            {cartItems.map((cartItem) => (
              <OrderItem
                key={cartItem.product.id}
                decreaseQuantityAction={decreaseQuantity}
                increaseQuantityAction={increaseQuantity}
                item={cartItem}
              />
            ))}
          </ScrollArea>
          <div className="w-11/12 mx-auto pb-1 pt-2 flex items-center content-center justify-between">
            <p className="text-lg font-medium">Total </p>
            <p className="inline font-bold tracking-wide text-xl">
              {numberF.number(totalPrice, "currency")}
            </p>
          </div>
          <div className="w-11/12 mx-auto pb-3">
            <Button
              disabled={isLoading}
              className="w-full mt-4 bg-orange-600/80 hover:bg-orange-600 cursor-pointer"
              onClick={handleCreateOrder} >
              {isLoading ? "Loading..." : t("checkout")}
            </Button>
          </div>
        </Card>
      )}
    </section >
  );
};
