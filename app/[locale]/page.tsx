import BestSellers from "@/components/home/BestSellers";
import AvailableLubricants from "@/components/home/AvailableLubricants";
import MainHeaderBackground from "@/components/home/MainHeaderBackground";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 h-full relative">
      <MainHeaderBackground />
      <BestSellers />
      <AvailableLubricants />
    </section>
  );
}
