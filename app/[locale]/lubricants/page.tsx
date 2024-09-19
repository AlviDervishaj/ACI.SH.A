"use client";
import { CircularProgress, Pagination, Selection } from "@nextui-org/react";
import { useIsomorphicLayoutEffect } from "usehooks-ts";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { title } from "@/components/primitives";
import { Link, usePathname, useRouter } from "@/config/routing";
import { MockData } from "@/mock_data";
import { filterPriceHighestToLowest, filterPriceLowestToHighest, getXItemsFromArray, handlePageChange } from "@/lib/utils";
import dynamic from "next/dynamic";
const Filters = dynamic(() => import('@/components/lubricants/Filters'))
const LubricantItem = dynamic(() => import('@/components/lubricants/LubricantItem'))

export default function LubricantsPage() {
  // if 16 pages then get number of items per page
  const itemsPerPage: number = 15;
  const totalPages: number = Math.ceil(MockData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isActionLoading, setIsActionLoading] = useState<boolean>(false);
  const [items, setItems] = useState<typeof MockData>(MockData);
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(["Sort By"]),
  );
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useIsomorphicLayoutEffect(() => {
    const searchParamsCurrentPage = Number(searchParams.get("page")) || 1;
    setCurrentPage(searchParamsCurrentPage);
    setIsActionLoading(false);
    setTimeout(() => setIsLoading(false), 1000)
  }, [searchParams]);

  useEffect(() => {
    setIsActionLoading(true);
    let rawData = MockData;

    if (selectedValue === "default") {
      rawData = MockData;
    }
    if (selectedValue === "newest") {
    } else if (selectedValue === "price-high-low") {
      rawData = filterPriceHighestToLowest();
    } else if (selectedValue === "price-low-high") {
      rawData = filterPriceLowestToHighest();
    }
    // sort items
    const results = getXItemsFromArray(
      itemsPerPage,
      (currentPage - 1) * itemsPerPage,
      rawData,
    );

    setItems(results);
    setIsActionLoading(false);
  }, [currentPage, selectedValue]);

  if (isLoading) {
    return (
      <div className="w-full h-[30rem] flex flex-col items-center content-center justify-between">
        <h1 className={title()}>Lubricants</h1>
        <div className="py-2 md:py-8 grid place-items-center h-full w-full">
          <CircularProgress aria-label="Loading..." color={"primary"} size={"lg"} />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col items-center content-center justify-between">
      <h1 className={title()}>Lubricants</h1>
      <Pagination
        isCompact
        showControls
        showShadow
        className="lg:hidden block mt-3"
        color="warning"
        page={currentPage}
        radius="full"
        total={totalPages}
        variant="flat"
        onChange={(page: number) => handlePageChange(page, setCurrentPage, searchParams, router, pathname)}
      />
      <div className="self-end pt-2 md:p-0">
        <Filters
          isLoading={isActionLoading}
          selectedKeys={selectedKeys}
          selectedValue={selectedValue}
          setSelectedKeys={setSelectedKeys}
        />
      </div>
      <div className="py-2 md:py-8">
        {items.length >= 1 ? (
          <div className="w-full h-full grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {items.map((item) =>
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
      <Pagination
        isCompact
        showControls
        showShadow
        className="hidden lg:block"
        color="warning"
        page={currentPage}
        radius="full"
        total={totalPages}
        variant="flat"
        onChange={(page: number) => handlePageChange(page, setCurrentPage, searchParams, router, pathname)}
      />
    </div>
  );
}
