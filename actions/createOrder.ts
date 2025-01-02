"use server-only";
import { PRODUCTS_API } from "@/config/api";
import { CreateOrderType } from "@/types/Api";

type CreateOrderReturnType = {
  error: boolean;
  message: string;
}

export const createOrder = async (
  { order_products, name, email, address, is_admin }: CreateOrderType
): Promise<CreateOrderReturnType> => {
  const endpoint = PRODUCTS_API.ORDER.POST;
  const body: CreateOrderType = {
    order_products,
    client_secret: "",
    is_paid_online: false,
    paid: false,
    printed_receipt: false,
    name,
    email,
    address,
    is_admin,
  };

  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return { error: true, message: "Failed to create order" };
  }
  return { error: false, message: "Order created successfully" };

}

