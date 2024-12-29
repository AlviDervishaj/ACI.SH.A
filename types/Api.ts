import { Product } from "./Product";

export type ListProducts = {
  data: Product[];
  pagination: Pagination;
};

export type Pagination = {
  count: number;
  next: string | null;
  previous: string | null;
};

export type AVAILABLE_QUERY_PARAMS = "gt_price" | "lt_price" | "filter" | "sort";

export type FILTER_MAP = { category: string[], brand: string, discount: boolean, name: string };
