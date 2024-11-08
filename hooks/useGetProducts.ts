"use client";
import { useCallback, useEffect, useState } from "react";

import { Product } from "@/types";

const _products: Product[] = [
  {
    id: "0",
    stock: 100,
    discount: "0",
    sku_code: "sku_code",
    buy_price: "70",
    main_image: "/images/oils/galp-oil-1.png",
    sell_price: "90",
    description: "Description Here",
    has_discount: false,
    name: "Item 0",
  },
  {
    id: "1",
    stock: 100,
    discount: "0",
    sku_code: "sku_code",
    buy_price: "30",
    main_image: "/images/oils/galp-oil-2.png",
    sell_price: "50",
    description: "Description Here",
    has_discount: false,
    name: "Item 1",
  },
  {
    id: "2",
    stock: 100,
    discount: "0",
    sku_code: "sku_code",
    buy_price: "20",
    main_image: "/images/oils/galp-oil-3.png",
    sell_price: "35",
    description: "Description Here",
    has_discount: false,
    name: "Item 2",
  },
  {
    id: "3",
    stock: 100,
    discount: "0",
    sku_code: "sku_code",
    buy_price: "35",
    main_image: "/images/oils/galp-oil-4.png",
    sell_price: "40",
    description: "Description Here",
    has_discount: false,
    name: "Item 3",
  },
  {
    id: "4",
    stock: 100,
    discount: "0",
    sku_code: "sku_code",
    buy_price: "22",
    main_image: "/images/oils/galp-oil-5.png",
    sell_price: "39",
    description: "Description Here",
    has_discount: false,
    name: "Item 4",
  },
];

export const useGetProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getProducts = useCallback(async () => {
    setError("");
    setIsLoading(true);
    try {
      const response = await fetch("/api/products");
      const data = (await response.json()) as Product[];

      setProducts(data);
    } catch (error) {
      console.log({ error });
      setProducts(_products);
      // An error occurred while fetching products.
      setError("");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return {
    products,
    error,
    isLoading,
    getProducts,
  };
};
