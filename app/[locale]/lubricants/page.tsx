import { title } from "@/components/primitives";
import Filters from "@/components/lubricants/Filters";
import { LubricantItems } from "@/components/lubricants/LubricantItems";

export default async function LubricantsPage() {
  return (
    <div className="w-full h-full flex flex-col items-center content-center justify-between">
      <h1 className={title()}>Lubricants</h1>
      <div className="self-end pt-2 md:p-0">
        <Filters />
      </div>
      <LubricantItems />
    </div>
  );
}
