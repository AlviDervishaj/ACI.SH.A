"use client";
import { MainHeaderBackground } from "@/components/MainHeaderBackground";
import { RenderOilCompanies } from "@/components/oil/RenderOilCompanies";
import { OilCompaniesHeader } from "@/components/oil/OilCompaniesHeader";
import { BestSellers } from "@/components/oil/BestSellers";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 h-full relative">
      <MainHeaderBackground />
      <OilCompaniesHeader />
      <RenderOilCompanies />
      <BestSellers />
    </section >
  );
}
