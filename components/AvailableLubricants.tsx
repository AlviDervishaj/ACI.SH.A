import { OilCompaniesHeader } from "./oil/OilCompaniesHeader";
import { RenderOilCompanies } from "./oil/RenderOilCompanies";

export function AvailableLubricants() {
  return (
    <div className="py-8 lg:w-[850px] space-y-4">
      <OilCompaniesHeader />
      <RenderOilCompanies />
    </div>
  )
}
