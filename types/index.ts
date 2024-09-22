import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Item = {
  id: string;
  sku_code: string;
  buy_price: string;
  sell_price: string;
  description: string;
  main_image: string;
  stock: number;
  discount: string;
  has_discount: boolean;
  name: string;
};
