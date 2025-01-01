import { OrderSummary } from "@/components/cart/OrderSummary";
import { OrderSummaryHeader } from "@/components/cart/OrderSummaryHeader";

export default function Cart() {
  return (
    <section>
      <OrderSummaryHeader />
      <OrderSummary />
    </section>
  );
}
