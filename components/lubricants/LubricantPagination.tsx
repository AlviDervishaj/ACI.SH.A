"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { useRouter } from "@/i18n/routing";

import { Button } from "../ui/button";

type LubricanPaginationProps = {
  page: number;
  totalPages: number;
  isNextPageAvailable: boolean;
  isPreviousPageAvailable: boolean;
};
export const LubricanPagination = ({
  page,
  totalPages,
  isNextPageAvailable,
  isPreviousPageAvailable,
}: LubricanPaginationProps) => {
  const router = useRouter();

  const handleNextPage = () => router.push(`/lubricants?page=${page + 1}`);
  const handlePreviousPage = () => router.push(`/lubricants?page=${page - 1}`);

  return (
    <section className="w-fit mx-auto p-2 flex items-center content-center justify-center gap-4 mb-auto">
      <Button
        disabled={!isPreviousPageAvailable}
        variant="ghost"
        onClick={handlePreviousPage}
      >
        <ArrowLeft />
      </Button>

      <div className="flex items-center">
        <p className="mx-2 text-orange-400 text-lg font-extrabold">{page}</p>

        {totalPages > 1 && page !== totalPages && (
          <>
            <span className="mx-2">...</span>
            <p className="mx-2 font-extrabold">{totalPages}</p>
          </>
        )}
      </div>

      <Button
        disabled={!isNextPageAvailable}
        variant="ghost"
        onClick={handleNextPage}
      >
        <ArrowRight />
      </Button>
    </section>
  );
};
