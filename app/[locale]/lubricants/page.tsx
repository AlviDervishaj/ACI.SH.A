"use client";
import { Filters } from "@/components/lubricants/Filters";
import { LubricantItem } from "@/components/lubricants/LubricantItem";
import { title } from "@/components/primitives";
import { Link, usePathname, useRouter } from "@/config/routing";
import { MockData } from "@/mock_data";
import { MockDataType } from "@/types";
import { Pagination, Selection } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useIsomorphicLayoutEffect } from "usehooks-ts";

export default function LubricantsPage() {
  // if 16 pages then get number of items per page
  const itemsPerPage: number = 15;
  const totalPages: number = MockData.length / itemsPerPage;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fullData] = useState<typeof MockData>(MockData);
  const [items, setItems] = useState<typeof MockData>(MockData);
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["Sort By"]));
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  useIsomorphicLayoutEffect(() => {
    const searchParamsCurrentPage = Number(searchParams.get('page')) || 1;
    setCurrentPage(searchParamsCurrentPage)
    setIsLoading(false);
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

  function getXItemsFromArray(size: number, itemsToSkip: number, arr?: MockDataType) {
    setIsLoading(true);
    const results = [];
    const array = arr ? arr : fullData
    console.log({ arr });
    if (itemsToSkip >= array.length || size > array.length) {
      setIsLoading(false);
      return [];
    };

    for (let i = itemsToSkip; i <= size + itemsToSkip - 1; i++) {
      const _dummy = array[i] ?? null;
      results.push(_dummy);
    }
    setIsLoading(true);
    return results;
  }

  function filterPriceHighestToLowest() {
    const rawData = fullData.toSorted((a, b) => {
      if (b.price < a.price) {
        return -1;
      }
      if (b.price > a.price) {
        return 1;
      }
      return 0;
    });
    return rawData;
  }

  function filterPriceLowestToHighest() {
    const rawData = fullData.toSorted((a, b) => {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    });
    return rawData;
  }

  useEffect(() => {
    setIsLoading(true);
    let rawData = fullData;
    if (selectedValue === "default") {
      rawData = fullData;
    }
    if (selectedValue === "newest") { }
    else if (selectedValue === "price-high-low") {
      rawData = filterPriceHighestToLowest();
    }
    else if (selectedValue === "price-low-high") {
      rawData = filterPriceLowestToHighest();
    }
    // sort items
    const results = getXItemsFromArray(itemsPerPage, (currentPage - 1) * itemsPerPage, rawData);
    setItems(results);
    setIsLoading(false);
  }, [currentPage, selectedValue]);

  return (
    <div className="w-full h-full flex flex-col items-center content-center justify-between">
      <h1 className={title()}>Lubricants</h1>
      <Pagination
        total={Math.ceil(totalPages)}
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
      <div className="self-end pt-2 md:p-0">
        <Filters isLoading={isLoading} selectedValue={selectedValue} selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys} />
      </div>
      <div className="py-2 md:py-8">
        {items.length >= 1 ?
          <div className="w-full h-full grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {items.map((item) => item ? <LubricantItem {...item} /> : null)}
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
