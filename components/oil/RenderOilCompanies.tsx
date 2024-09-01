import { OilCard } from "./OilCard";
export function RenderOilCompanies() {
  return (
    <div className="grid gap-2 p-2 w-full grid-cols-3 px-4 py-6">
      <OilCard image={"/images/galp.png"} title={"Galp"} />
      <OilCard image={"/images/repsol-car.jpg"} title={"Repsol"} />
      <OilCard image={"/images/prefix.jpg"} title={"Prefix"} />
    </div>
  );
}
