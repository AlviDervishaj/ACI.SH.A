"use client";
import { ShoppingCart as SCIcon } from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useShoppingCart } from "@/providers/ShoppingCartProvider";
import { useRouter } from "@/i18n/routing";

export default function ShoppingCart() {
  const { totalQuantity } = useShoppingCart();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  
  // Only show the badge after component has mounted on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Button
      className="relative"
      size="icon"
      variant="outline"
      onClick={() => router.push("/cart")}
    >
      {/* Only render the badge on the client side */}
      {isMounted && totalQuantity > 0 && (
        <Badge
          className="absolute -top-2 -right-3 bg-orange-600/50"
          variant="secondary"
        >
          {totalQuantity}
        </Badge>
      )}
      <SCIcon className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
