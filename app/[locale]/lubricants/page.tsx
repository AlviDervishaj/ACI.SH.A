"use client";
import { title } from "@/components/primitives";
import { usePathname, useRouter } from "@/config/routing";
import { MockData } from "@/mock_data";
import { Pagination } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useIsomorphicLayoutEffect } from "usehooks-ts";
// if 10 pages then get number of items per page
const itemsPerPage = MockData.length / 10;

export default function LubricantsPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const { replace } = router;
  const searchParams = useSearchParams();

  useIsomorphicLayoutEffect(() => {
    const searchParamsCurrentPage = Number(searchParams.get('page')) || 1;
    setCurrentPage(searchParamsCurrentPage)
  }, [searchParams])

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  function getXItemsFromArray(size: number, itemsToSkip?: number) {
    setIsLoading(true);
    const results = [];
    if (itemsToSkip) {
      if (itemsToSkip >= MockData.length) {
        setIsLoading(false);
        return [];
      };
      for (let i = itemsToSkip; i <= size; i++) {
        results.push(MockData[i]);
      }
      setIsLoading(true);
      console.log({ ITSresults: results });
      return results;
    }

    for (let i = 0; i <= size; i++) {
      results.push(MockData[i]);
    }
    setIsLoading(true);
    console.log({ results });
    return results;
  }

  return (
    <div>
      <h1 className={title()}>Lubricants</h1>
      <div className="w-full h-fit p-2"></div>
      <Pagination
        total={10}
        variant="flat"
        radius="full"
        showShadow
        isCompact
        page={currentPage}
        onChange={setCurrentPage}
        color="warning"
        showControls
      />
    </div>
  );
}
