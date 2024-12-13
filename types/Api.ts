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
