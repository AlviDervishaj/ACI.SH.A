"use client";
import { useTranslations } from "next-intl";

import { useShoppingCart } from "@/providers/ShoppingCartProvider";

import { Card } from "../ui/card";
import { Button } from "../ui/button";

import { createOrder } from "@/actions/createOrder";
import { useState } from "react";
import { toast } from "sonner";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { OrderUserInformation } from "./OrderUserInformation";
import { OrderOverview } from "./OrderOverview";

const maxSteps = 1;

export const OrderSummary = () => {
  const {
    products: cartItems,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useShoppingCart();
  const t = useTranslations("Cart");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [userData, setUserData] = useState<{name: string, email:string, address: string}>({ name: "", email: "", address: "" });

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
      paid: false,
      is_paid_online: false,
      is_admin: false,
      printed_receipt: false,
      ...userData,
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
          {currentStep === 0 && <OrderOverview
            totalPrice={totalPrice}
            cartItems={cartItems}
            increaseQuantityAction={increaseQuantity}
            decreaseQuantityAction={decreaseQuantity} />
          }
          {currentStep === 1 && (
            <OrderUserInformation
              userData={userData}
              setUserData={setUserData}
            />
          )}
          <div className="w-11/12 mx-auto pb-3 flex flex-row items-center content-center gap-4">
            {currentStep < maxSteps && (
              <Button
                className="w-full mt-4 bg-sky-600/80 hover:bg-sky-600 cursor-pointer"
                onClick={() => setCurrentStep(prev => prev + 1)}
              >
                Next Step <ChevronRight className="w-5 h-5" />
              </Button>
            )}
            {currentStep > 0 && (
              <Button
                className="w-full mt-4 bg-sky-600/80 hover:bg-sky-600 cursor-pointer"
                onClick={() => setCurrentStep(prev => prev - 1)}
              >
                <ChevronLeft className="w-5 h-5" /> Previous Step
              </Button>
            )}
            {currentStep === 1 && (
              <Button
                disabled={isLoading}
                className="w-full mt-4 bg-orange-600/80 hover:bg-orange-600 cursor-pointer"
                onClick={handleCreateOrder} >
                {isLoading ? "Loading..." : t("checkout")}
              </Button>
            )}
          </div>
        </Card>
      )}
    </section >
  );
};

