import { TryAgainLater } from "@/components/_layout/TryAgainLater";
import { OilCard } from "@/components/oil/OilCard";
type OilCardProps = { image: string; title: string; id: number };
const items: Array<OilCardProps> = [
  {
    id: 1,
    image: "/images/galp.png",
    title: "Galp",
  },
  {
    id: 2,
    image: "/images/repsol-car.jpg",
    title: "Repsol",
  },
  {
    id: 3,
    image: "/images/prefix.jpg",
    title: "Prefix",
  },
];

export function OilCompanies() {
  return (
    <div className="w-full h-fit py-3 mx-auto flex flex-col md:flex-row items-center content-center justify-evenly gap-4">
      {items.length >= 1 ? (
        items.map((item) => <OilCard key={item.id} item={item} />)
      ) : (
        <TryAgainLater />
      )}
    </div>
  );
}
