import dynamic from "next/dynamic";

const OilCompaniesHeader = dynamic(() =>
  import("@/components/oil/OilCompaniesHeader").then(
    (mod) => mod.OilCompaniesHeader,
  ),
);
const OilCompanies = dynamic(() =>
  import("@/components/oil/OilCompanies").then((mod) => mod.OilCompanies),
);

export function AvailableLubricants() {
  return (
    <div className="py-8 w-full md:w-full lg:w-[53rem]">
      <OilCompaniesHeader />
      <OilCompanies />
    </div>
  );
}
