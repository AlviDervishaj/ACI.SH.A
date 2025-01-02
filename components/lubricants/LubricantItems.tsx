import clsx from "clsx";

import { getAllProducts } from "@/actions/getAllProducts";
import Sorters from "@/components/lubricants/Sorters";
import Filters from "@/components/lubricants/Filters";

import { TryAgainLater } from "../_layout/TryAgainLater";

import LubricantItem from "./LubricantItem";
import { LubricanPagination } from "./LubricantPagination";
import CategoryFilters from "./CategoryFilters";

type LubricantItemsProps = {
  page: number;
  brand: number;
};

export const LubricantItems = async ({ page, brand }: LubricantItemsProps) => {
  // Also get by brand id if provided
  let sorting_opts = {
    sort: "",
    filter: "",
  };
  const { products, error } = await getAllProducts(page, brand);

  const totalPages = products.pagination.next
    ? Math.ceil(products.pagination.count / products.data.length)
    : page;
  const isNextPageAvailable = products.pagination.next !== null;
  const isPreviousPageAvailable = products.pagination.previous !== null;

  async function setSortingAction({ type, value }: { type: "sort" | "filter", value: string }) {
    "use server";
    sorting_opts[type] = value;
    // TODO: Implement sorting and filtering. Send to backend in proper format.
  };

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
            <div className="flex flex-row items-center content-center justify-start lg:justify-between gap-5 pt-5 pb-3 max-w-lg lg:ml-auto">
              <Filters setSortingAction={setSortingAction} />
              <Sorters setSortingAction={setSortingAction} />
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
