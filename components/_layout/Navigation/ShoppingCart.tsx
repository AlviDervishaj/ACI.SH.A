import { ShoppingCart as SCIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ShoppingCart() {
  return (
    <Button
      className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 dark:text-gray-200 dark:hover:text-slate-900 dark:hover:bg-slate-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      size={"icon"}
      variant="ghost"
    >
      <SCIcon size={24} />
    </Button>
  );
}
