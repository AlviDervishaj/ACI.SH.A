import dynamic from "next/dynamic";
const BestSellers = dynamic(() => import("@/components/home/BestSellers"));
const AvailableLubricants = dynamic(() => import("@/components/home/AvailableLubricants"));
const MainHeaderBackground = dynamic(() => import("@/components/home/MainHeaderBackground"));

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 h-full relative">
      <MainHeaderBackground />
      <BestSellers />
      <AvailableLubricants />
    </section>
  );
}
