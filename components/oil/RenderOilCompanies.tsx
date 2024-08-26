"use client";
import { AnimatePresence } from "framer-motion";
import { OilCard } from "./OilCard";
export function RenderOilCompanies() {

  return (
    <AnimatePresence>
      <div className="w-full gap-2 flex flex-col md:flex-row items-center content-center justify-evenly p-8 my-8">
        <OilCard image={"/images/galp.png"} title={"Galp"} />
        <OilCard image={"/images/repsol-car.jpg"} title={"Repsol"} />
        <OilCard image={"/images/prefix.jpg"} imageStyle={"-translate-x-8"} title={"Prefix"}
        />
      </div>
    </AnimatePresence>
  );
}
