"use client";
import { MainHeaderBackground } from "@/components/MainHeaderBackground";
import { BestSellers } from "@/components/oil/BestSellers";
type Item = { title: string, image: string, price: string, description?: string }

const bestSellers: Array<Item> = [
  { title: "Oil 1", image: "/images/repsol-car.jpg", price: "$19.99" },
  { title: "Oil 1", image: "/images/prefix.jpg", price: "$19.99" },
  { title: "Oil 1", image: "/images/galp.png", price: "$19.99" },
]


export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 h-full relative">
      <MainHeaderBackground />
      {/*
        <OilCompaniesHeader />
        <RenderOilCompanies />
        */}
      <BestSellers items={bestSellers} />
    </section >
  );
}
