import type { ListProducts } from "@/types/Api";

import { TryAgainLater } from "../_layout/TryAgainLater";
import { SearchWrapper } from "../_layout/SearchWrapper";

import { LubricanPagination } from "./LubricantPagination";
import { FiltersWrapper } from "./FiltersWrapper";
import LubricantItem from "./LubricantItem";
import { AdvancedFilterMenu } from "./AdvancedFilterMenu";
import { PriceSorter } from "./PriceSorter";

type LubricantItemsProps = {
  page: number;
  products: ListProducts;
  error: string | null;
  totalPages: number;
  isNextPageAvailable: boolean;
  isPreviousPageAvailable: boolean;
};

export const LubricantItems = async ({
  products,
  error,
  page,
  totalPages,
  isNextPageAvailable,
  isPreviousPageAvailable,
}: LubricantItemsProps) => {
  return (
    <div className={"w-full !h-full block"}>
      <div className="flex h-full flex-col items-stretch content-center justify-center gap-3">
        <div className="w-full h-fit pt-4">
          <SearchWrapper />
        </div>
        
        {/* Filters and Sorting Section */}
        <div className="w-full flex flex-wrap items-center justify-between gap-4 pt-5 pb-3 border-b-2 border-slate-400 dark:border-slate-700">
          {/* Left section - Basic & Advanced filters */}
          <div className="flex items-center gap-3">
            <FiltersWrapper />
            <AdvancedFilterMenu />
          </div>
          
          {/* Right section - Sorting */}
          <div className="ml-auto">
            <PriceSorter />
          </div>
        </div>

        {(error || !products || products.data.length === 0) && (
          <TryAgainLater isSearchError />
        )}
        {products.data.length >= 1 && (
          <>
            <div className="w-full h-full grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center">
              {products.data.map(
                (product) =>
                  product && <LubricantItem {...product} key={product.id} />,
              )}
            </div>
            <div className="w-full mt-4 border-t border-slate-300 dark:border-slate-700">
              <LubricanPagination
                isNextPageAvailable={isNextPageAvailable}
                isPreviousPageAvailable={isPreviousPageAvailable}
                page={page}
                pagination={products.pagination}
                totalPages={totalPages}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
