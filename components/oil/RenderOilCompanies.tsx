"use client";
import { AnimatePresence } from "framer-motion";
import { OilCard } from "./OilCard";
export function RenderOilCompanies() {

  return (
    <AnimatePresence>
      <div className="w-full gap-2 flex flex-col md:flex-row items-center content-center justify-evenly p-8 my-8">
        <OilCard delay={0.3} image={"/images/galp.png"} title={"Galp"} />
        <OilCard delay={0.6} image={"/images/repsol-car.jpg"} title={"Repsol"} />
        <OilCard
          delay={0.9}
          image={"/images/prefix.jpg"}
          imageStyle={"-translate-x-8"}
          title={"Prefix"}
        />
      </div>
    </AnimatePresence>
  );
}
