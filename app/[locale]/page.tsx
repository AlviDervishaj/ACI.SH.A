import dynamic from "next/dynamic";

const AvailableLubricants = dynamic(() =>
  import("@/components/home/AvailableLubricants").then(
    (mod) => mod.AvailableLubricants,
  ),
);
const MainHeaderBackground = dynamic(() =>
  import("@/components/home/MainHeaderBackground").then(
    (mod) => mod.MainHeaderBackground,
  ),
);
const BestSellers = dynamic(() => import("@/components/home/BestSellers"));

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 h-full relative">
      <MainHeaderBackground />
      <BestSellers />
      <AvailableLubricants />
    </section>
  );
}
