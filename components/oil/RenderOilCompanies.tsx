import { Link } from "@/config/routing";
import { Carousel } from "../carousel/Carousel";
import { OilCard } from "./OilCard";
export function RenderOilCompanies() {
  type OilCardProps = { image: string, title: string, id: number };

  const items: Array<OilCardProps> = [{
    id: 1,
    image: "/images/galp.png",
    title: "Galp"
  },
  {
    id: 2,
    image: "/images/repsol-car.jpg",
    title: "Repsol"
  },
  {
    id: 3,
    image: "/images/prefix.jpg",
    title: "Prefix"
  }]
  return (
    <div className="grid gap-2 w-full grid-cols-auto">
      {items.length >= 1 ?
        <Carousel slides={items} options={{ loop: true, axis: "x", align: "start", slidesToScroll: 2 }} Component={OilCard} />
        :
        <section className="w-full h-full p-2 grid place-items-center gap-3">
          <h2 className="text-4xl">No items are available at this time. </h2>
          <p className="text-3xl">Please try again later. </p>
          <small className="text-lg">If you think this is an bug / issue then contact {' '}
            <Link className="text-sky-500" href="mailto://alvidervishaj9@gmail.com">Support Team</Link>
          </small>
        </section>
      }
    </div>
  );
}
