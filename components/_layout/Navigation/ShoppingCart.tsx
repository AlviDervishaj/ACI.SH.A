"use client";
import { ShoppingCart as SCIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useShoppingCart } from "@/providers/ShoppingCartProvider";
import { useRouter } from "@/i18n/routing";

export default function ShoppingCart() {
  const { totalQuantity } = useShoppingCart();
  const router = useRouter();
  return (
    <Button
      size="icon"
      variant="outline"
      className="relative"
      onClick={() => router.push("/cart")}
    >
      {totalQuantity > 0 && <Badge className="absolute -top-2 -right-3 bg-orange-600/50" variant="secondary">{totalQuantity}</Badge>}
      <SCIcon className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
