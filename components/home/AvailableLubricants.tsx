import dynamic from "next/dynamic";

const OilCompaniesHeader = dynamic(() =>
  import("@/components/oil/OilCompaniesHeader").then(
    (mod) => mod.OilCompaniesHeader,
  ),
);
const RenderOilCompanies = dynamic(() =>
  import("@/components/oil/RenderOilCompanies").then(
    (mod) => mod.RenderOilCompanies,
  ),
);

export default function AvailableLubricants() {
  return (
    <div className="lg:py-8 lg:w-[850px]">
      <OilCompaniesHeader />
      <RenderOilCompanies />
    </div>
  );
}
