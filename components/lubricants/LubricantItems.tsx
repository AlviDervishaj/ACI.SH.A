"use client";

import { TryAgainLater } from "../_layout/TryAgainLater";

import LubricantItem from "./LubricantItem";

import { Quotes } from "@/lib/quotes";
import { useGetProducts } from "@/hooks/useGetProducts";

export const LubricantItems = () => {
  const { products, error, isLoading } = useGetProducts();

  return (
    <div className="py-2 md:py-8 w-full">
      {isLoading && <p className="text-xl text-center p-1">{Quotes[1]}</p>}
      {error && <TryAgainLater />}
      {products.length >= 1 && (
        <div className="w-full h-full grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center">
          {products.map(
            (product) =>
              product && <LubricantItem {...product} key={product.id} />,
          )}
        </div>
      )}
    </div>
  );
};
