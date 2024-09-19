import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Item = {
  title: string;
  image: string;
  price: number;
  description?: string;
  id: number;
};

export type SearchResultsType = Array<{
  group: string;
  title: string;
  keywords: Array<string>;
  href: string;
  image?: string;
}>;

export type MockDataSingleType = {
  id: number;
  product_name: string;
  product_type: string;
  price: number;
  quantity: number;
  supplier: string;
  image: string;
};

export type MockDataType = Array<{
  id: number;
  product_name: string;
  product_type: string;
  price: number;
  quantity: number;
  supplier: string;
  image: string;
}>;
