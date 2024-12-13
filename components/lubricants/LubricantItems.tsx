import { TryAgainLater } from "../_layout/TryAgainLater";

import LubricantItem from "./LubricantItem";
import { LubricanPagination } from "./LubricantPagination";

import { getAllProducts } from "@/actions/getAllProducts";

type LubricantItemsProps = {
  page: number;
};

export const LubricantItems = async ({ page }: LubricantItemsProps) => {
  const { products, error } = await getAllProducts(page);

  if (!products || !products.data || products.data.length === 0)
    return <TryAgainLater />;
  const totalPages = products.pagination.next
    ? Math.ceil(products.pagination.count / products.data.length)
    : page;
  const isNextPageAvailable = products.pagination.next !== null;
  const isPreviousPageAvailable = products.pagination.previous !== null;

  return (
    <>
      <div className="py-2 md:py-8 w-full">
        {error && <TryAgainLater />}
        {products.data.length >= 1 ? (
          <div className="w-full h-full grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center">
            {products.data.map(
              (product) =>
                product && <LubricantItem {...product} key={product.id} />,
            )}
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center content-center justify-center">
            <p className="text-base dark:text-gray-300 text-gray-700 font-bold">
              No products found.
            </p>
            <p className="text-base dark:text-gray-300 text-gray-700 font-bold">
              Please try again later.
            </p>
          </div>
        )}
      </div>
      <LubricanPagination
        isNextPageAvailable={isNextPageAvailable}
        isPreviousPageAvailable={isPreviousPageAvailable}
        page={page}
        totalPages={totalPages}
      />
    </>
  );
};
