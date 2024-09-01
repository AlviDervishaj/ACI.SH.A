import { AvailableLubricants } from "@/components/AvailableLubricants";
import { MainHeaderBackground } from "@/components/MainHeaderBackground";
import { BestSellers } from "@/components/oil/BestSellers";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 h-full relative">
      <MainHeaderBackground />
      <BestSellers />
      <AvailableLubricants />
    </section >
  );
}
