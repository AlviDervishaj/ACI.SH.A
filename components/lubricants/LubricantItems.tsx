import { Suspense } from 'react';
import { LubricanPagination } from "./LubricantPagination";
import { TryAgainLater } from "../_layout/TryAgainLater";
import { FiltersWrapper } from './FiltersWrapper';
import { ListProducts } from "@/types/Api";
import LubricantItem from "./LubricantItem";
import { SearchWrapper } from '../_layout/SearchWrapper';

type LubricantItemsProps = {
  page: number;
  products: ListProducts
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
  isPreviousPageAvailable
}: LubricantItemsProps) => {
  return (
    <>
      <div className={"w-full !h-full block"} >
        <div className="flex h-full flex-col items-stretch content-center justify-center gap-3">
          <div className="w-full h-fit pt-4">
            <SearchWrapper />
          </div>
          <div className="flex flex-row items-center content-center justify-start lg:justify-end gap-5 pt-5 pb-3 w-full">
            <FiltersWrapper />
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
              <section className="justify-self-end">
                <LubricanPagination
                  isNextPageAvailable={isNextPageAvailable}
                  isPreviousPageAvailable={isPreviousPageAvailable}
                  page={page}
                  totalPages={totalPages}
                />
              </section>
            </>
          )}
        </div>
      </div>
    </>
  );
};

