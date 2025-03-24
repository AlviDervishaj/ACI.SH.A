"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { useRouter, usePathname } from "@/i18n/routing";

import { Button } from "../ui/button";
import type { Pagination } from "@/types/Api";

type LubricanPaginationProps = {
  page: number;
  totalPages: number;
  isNextPageAvailable: boolean;
  isPreviousPageAvailable: boolean;
  pagination: Pagination;
};

export const LubricanPagination = ({
  pagination,
  page,
  totalPages,
  isNextPageAvailable,
  isPreviousPageAvailable,
}: LubricanPaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Helper to create a query string that preserves existing params while updating page
  const createPaginationUrl = (targetPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", targetPage.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handlePageChange = (targetPage: number) => {
    router.push(createPaginationUrl(targetPage));
  };

  // Generate visible page numbers
  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    if (page <= 3) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    }
    
    if (page >= totalPages - 2) {
      return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    
    return [1, '...', page - 1, page, page + 1, '...', totalPages];
  };

  const visiblePages = getVisiblePages();
  
  // Estimate items per page based on current page and total count
  const estimatedItemsPerPage = 10; // Default fallback value
  const itemsPerPage = Math.min(estimatedItemsPerPage, pagination.count);

  return (
    <nav 
      className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pb-4" 
      aria-label="Pagination"
    >
      <div className="text-sm text-slate-600 dark:text-slate-400">
        {pagination.count > 0 && (
          <span>
            Showing {((page - 1) * itemsPerPage) + 1}-
            {Math.min(page * itemsPerPage, pagination.count)} of {pagination.count} items
          </span>
        )}
      </div>

      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-md bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
          disabled={!isPreviousPageAvailable}
          onClick={() => handlePageChange(page - 1)}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4 text-slate-700 dark:text-slate-300" />
        </Button>

        <div className="flex items-center">
          {visiblePages.map((pageNum, index) => 
            typeof pageNum === 'number' ? (
              <Button
                key={`page-${pageNum}`}
                variant={pageNum === page ? "default" : "outline"}
                size="sm"
                className={`h-8 w-8 rounded-md mx-0.5 ${
                  pageNum === page 
                    ? "bg-orange-500 hover:bg-orange-600 text-white dark:bg-orange-600 dark:hover:bg-orange-700" 
                    : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                }`}
                onClick={() => handlePageChange(pageNum)}
                aria-label={`Go to page ${pageNum}`}
                aria-current={pageNum === page ? "page" : undefined}
              >
                {pageNum}
              </Button>
            ) : (
              <span key={`ellipsis-${String(index)}`} className="px-1 text-slate-400 dark:text-slate-600">
                …
              </span>
            )
          )}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-md bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
          disabled={!isNextPageAvailable}
          onClick={() => handlePageChange(page + 1)}
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4 text-slate-700 dark:text-slate-300" />
        </Button>
      </div>
    </nav>
  );
};
