import dynamic from "next/dynamic";

import { title } from "@/components/primitives";
import { Link } from "@/config/routing";
import { Item } from "@/types";
const Filters = dynamic(() => import("@/components/lubricants/Filters"));
const LubricantItem = dynamic(
  () => import("@/components/lubricants/LubricantItem"),
);

async function getItems() {
  return [
    {
      id: "0",
      stock: 100,
      discount: "0",
      sku_code: "sku_code",
      buy_price: "70",
      main_image: "/images/oils/galp-oil-1.png",
      sell_price: "90",
      description: "Description Here",
      has_discount: false,
      name: "Item 0",
    },
    {
      id: "1",
      stock: 100,
      discount: "0",
      sku_code: "sku_code",
      buy_price: "30",
      main_image: "/images/oils/galp-oil-2.png",
      sell_price: "50",
      description: "Description Here",
      has_discount: false,
      name: "Item 1",
    },
    {
      id: "2",
      stock: 100,
      discount: "0",
      sku_code: "sku_code",
      buy_price: "20",
      main_image: "/images/oils/galp-oil-3.png",
      sell_price: "35",
      description: "Description Here",
      has_discount: false,
      name: "Item 2",
    },
    {
      id: "3",
      stock: 100,
      discount: "0",
      sku_code: "sku_code",
      buy_price: "35",
      main_image: "/images/oils/galp-oil-4.png",
      sell_price: "40",
      description: "Description Here",
      has_discount: false,
      name: "Item 3",
    },
    {
      id: "4",
      stock: 100,
      discount: "0",
      sku_code: "sku_code",
      buy_price: "22",
      main_image: "/images/oils/galp-oil-5.png",
      sell_price: "39",
      description: "Description Here",
      has_discount: false,
      name: "Item 4",
    },
  ] as Item[];
}

export default async function LubricantsPage() {
  const items = await getItems();

  return (
    <div className="w-full h-full flex flex-col items-center content-center justify-between">
      <h1 className={title()}>Lubricants</h1>
      <div className="self-end pt-2 md:p-0">
        <Filters />
      </div>
      <div className="py-2 md:py-8 w-full">
        {items.length >= 1 ? (
          <div className="w-full h-full grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center">
            {[...items, ...items, ...items].map((item) =>
              item ? <LubricantItem {...item} key={item.id} /> : null,
            )}
          </div>
        ) : (
          <section className="w-full h-full p-2 grid place-items-center gap-3">
            <h2 className="text-4xl">No items are available at this time. </h2>
            <p className="text-3xl">Please try again later. </p>
            <small className="text-lg">
              If you think this is an bug / issue then contact{" "}
              <Link
                className="text-sky-500"
                href="mailto://alvidervishaj9@gmail.com"
              >
                Support Team
              </Link>
            </small>
          </section>
        )}
      </div>
    </div>
  );
}
