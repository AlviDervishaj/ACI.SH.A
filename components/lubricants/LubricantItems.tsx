import { TryAgainLater } from "../_layout/TryAgainLater";

import LubricantItem from "./LubricantItem";

export const LubricantItems = async () => {
  const items = await getItems();

  return (
    <div className="py-2 md:py-8 w-full">
      {items.length >= 1 ? (
        <div className="w-full h-full grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center">
          {items.map((item) =>
            item ? <LubricantItem {...item} key={item.id} /> : null,
          )}
        </div>
      ) : (
        <TryAgainLater />
      )}
    </div>
  );
};

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
