"use client";
import { OilCard } from "./OilCard";
export function RenderOilCompanies() {

  return (
    <div className="xl:w-1/2 gap-2 md:gap-5 grid grid-cols-3">
      <OilCard image={"/images/galp.png"} title={"Galp"} />
      <OilCard image={"/images/repsol-car.jpg"} title={"Repsol"} />
      <OilCard image={"/images/prefix.jpg"} title={"Prefix"} />
    </div>
  );
}
