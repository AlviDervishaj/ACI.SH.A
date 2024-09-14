"use client";
import { BestSellerCard } from "@/components/BestSellerCard";
import { LubricantItem } from "@/components/lubricants/LubricantItem";
import { title } from "@/components/primitives";
import { Link, usePathname, useRouter } from "@/config/routing";
import { MockData } from "@/mock_data";
import { Pagination } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useIsomorphicLayoutEffect } from "usehooks-ts";
// if 16 pages then get number of items per page
const itemsPerPage: number = 15;
const totalPages: number = MockData.length / itemsPerPage;

export default function LubricantsPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [items, setItems] = useState<typeof MockData>([]);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useIsomorphicLayoutEffect(() => {
    const searchParamsCurrentPage = Number(searchParams.get('page')) || 1;
    setCurrentPage(searchParamsCurrentPage)
  }, [searchParams]);


  function handlePageChange(page: number) {
    setCurrentPage(page);
    // set page url
    if (page >= 1) {
      createPageURL(page);
      return;
    }
    else return;
  }

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };

  function getXItemsFromArray(size: number, itemsToSkip: number) {
    setIsLoading(true);
    const results = [];
    if (itemsToSkip >= MockData.length || size > MockData.length) {
      setIsLoading(false);
      return [];
    };

    for (let i = itemsToSkip; i <= size + itemsToSkip - 1; i++) {
      const _dummy = MockData[i];
      results.push(_dummy);
    }
    setIsLoading(true);
    return results;
  }

  useEffect(() => {
    // fetch new items for the page.
    setIsLoading(true);
    const results = getXItemsFromArray(itemsPerPage, (currentPage - 1) * itemsPerPage);
    setItems(results);
    setIsLoading(false);
  }, [currentPage]);

  return (
    <div className="w-full h-full flex flex-col items-center content-center justify-between">
      <h1 className={title()}>Lubricants</h1>
      <Pagination
        total={Math.floor(totalPages)}
        variant="flat"
        radius="full"
        showShadow
        isCompact
        page={currentPage}
        onChange={(page: number) => handlePageChange(page)}
        className="lg:hidden block mt-3"
        color="warning"
        showControls
      />
      <div className="py-8">
        {items.length >= 1 ?
          <div className="w-full h-full grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {items.map((item) => <LubricantItem {...item} />)}
          </div>
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
      <Pagination
        total={Math.floor(totalPages)}
        variant="flat"
        radius="full"
        showShadow
        isCompact
        page={currentPage}
        onChange={(page: number) => handlePageChange(page)}
        className="hidden lg:block"
        color="warning"
        showControls
      />
    </div>
  );
}
