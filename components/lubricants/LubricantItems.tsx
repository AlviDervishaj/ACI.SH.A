import clsx from "clsx";

import { getAllProducts } from "@/actions/getAllProducts";
import Filters from "@/components/lubricants/Filters";

import { TryAgainLater } from "../_layout/TryAgainLater";

import LubricantItem from "./LubricantItem";
import { LubricanPagination } from "./LubricantPagination";

type LubricantItemsProps = {
  page: number;
};

export const LubricantItems = async ({ page }: LubricantItemsProps) => {
  const { products, error } = await getAllProducts(page);

  const totalPages = products.pagination.next
    ? Math.ceil(products.pagination.count / products.data.length)
    : page;
  const isNextPageAvailable = products.pagination.next !== null;
  const isPreviousPageAvailable = products.pagination.previous !== null;

  return (
    <>
      <div
        className={clsx(
          "w-full !h-full block",
          (error || !products || products.data.length === 0) && ":pt-12",
        )}
      >
        {(error || !products || products.data.length === 0) && (
          <TryAgainLater />
        )}
        {products.data.length >= 1 && (
          <div className="flex h-full flex-col items-stretch content-center justify-center gap-3">
            <div className="self-end pt-6 md:p-0">
              <Filters />
            </div>

            <div className="w-full h-full grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center">
              {products.data.map(
                (product) =>
                  product && <LubricantItem {...product} key={product.id} />,
              )}
            </div>
            <section className="justify-self-end">
              <LubricanPagination
                isNextPageAvailable={isNextPageAvailable}
                isPreviousPageAvailable={isPreviousPageAvailable}
                page={page}
                totalPages={totalPages}
              />
            </section>
          </div>
        )}
      </div>
    </>
  );
};
