import dynamic from "next/dynamic";

import { title } from "@/components/primitives";
const Filters = dynamic(() => import("@/components/lubricants/Filters"));
const LubricantItems = dynamic(
  () =>
    import("@/components/lubricants/LubricantItems").then(
      (mod) => mod.LubricantItems,
    ),
  {
    loading: () => <p>Loading...</p>,
  },
);

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
