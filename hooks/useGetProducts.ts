"use client";
import { useCallback, useEffect, useState } from "react";

import { ListProducts } from "@/types/Api";

const apiEndpoint = process.env.NEXT_PUBLIC_ACI_ENDPOINT;

const _initialState: ListProducts = {
  data: [],
  pagination: { next: "", count: 0, previous: "" },
};

export const useGetProducts = () => {
  const [products, setProducts] = useState<ListProducts>(_initialState);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getProducts = useCallback(async () => {
    setError("");
    setIsLoading(true);
    try {
      const response = await fetch(`${apiEndpoint as string}/product/list`);

      const data = (await response.json()) as ListProducts;

      setProducts(data);
    } catch (error) {
      setProducts(_initialState);
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
