import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Item = { title: string, image: string, price: number, description?: string, id: number };
