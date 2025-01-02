import { useShoppingCart } from "@/providers/ShoppingCartProvider";
import { useFormatter } from "next-intl";
import { ScrollArea } from "../ui/scroll-area";
import { OrderItem } from "./OrderItem";
interface OrderOverviewParams {
  cartItems: Pick<ReturnType<typeof useShoppingCart>, "products">["products"];
  increaseQuantityAction: Pick<ReturnType<typeof useShoppingCart>, "increaseQuantity">["increaseQuantity"];
  decreaseQuantityAction: Pick<ReturnType<typeof useShoppingCart>, "decreaseQuantity">["decreaseQuantity"];
  totalPrice: Pick<ReturnType<typeof useShoppingCart>, "totalPrice">["totalPrice"];
}
export const OrderOverview = ({ cartItems, decreaseQuantityAction, increaseQuantityAction, totalPrice }: OrderOverviewParams) => {
  const numberF = useFormatter();
  return (
    <>
      <ScrollArea className="h-96">
        {cartItems.map((cartItem) => (
          <OrderItem
            key={cartItem.product.id}
            decreaseQuantityAction={decreaseQuantityAction}
            increaseQuantityAction={increaseQuantityAction}
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
    </>
  )
}

