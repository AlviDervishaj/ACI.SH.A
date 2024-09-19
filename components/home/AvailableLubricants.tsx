import { OilCompaniesHeader } from "@/components/oil/OilCompaniesHeader";
import { RenderOilCompanies } from "@/components/oil/RenderOilCompanies";

export default function AvailableLubricants() {
  return (
    <div className="lg:py-8 lg:w-[850px]">
      <OilCompaniesHeader />
      <RenderOilCompanies />
    </div>
  );
}
