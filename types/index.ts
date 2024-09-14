import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Item = { title: string, image: string, price: number, description?: string, id: number };

export type SearchResultsType = Array<{
  group: string,
  title: string,
  keywords: Array<string>,
  href: string,
  image?: string,
}>

export type MockDataType = Array<
  {
    id: number,
    product_name: string,
    product_type: string,
    price: number,
    quantity: number,
    supplier: string,
    purchase_date: string,
    expiration_date: string,
    density: number,
    flash_point: number,
    octane_rating: number,
    image: string,
  }
>
