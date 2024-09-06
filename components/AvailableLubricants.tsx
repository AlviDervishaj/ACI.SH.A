import { OilCompaniesHeader } from "./oil/OilCompaniesHeader";
import { RenderOilCompanies } from "./oil/RenderOilCompanies";

export function AvailableLubricants() {
  return (
    <div className="lg:py-8 lg:w-[850px]">
      <OilCompaniesHeader />
      <RenderOilCompanies />
    </div>
  )
}
