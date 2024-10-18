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
    <div className="py-8 md:w-full lg:w-[53rem]">
      <OilCompaniesHeader />
      <RenderOilCompanies />
    </div>
  );
}
