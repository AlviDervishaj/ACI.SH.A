"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpDown } from "lucide-react";

import { useRouter, usePathname } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type SortOption = {
  label: string;
  value: string;
};

const SORT_OPTIONS: SortOption[] = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Popularity", value: "popularity" },
];

export const PriceSorter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [currentSort, setCurrentSort] = useState<string>("newest");

  // Initialize from URL params
  useEffect(() => {
    const sort = searchParams.get("sort");

    if (sort && SORT_OPTIONS.some((option) => option.value === sort)) {
      setCurrentSort(sort);
    }
  }, [searchParams]);

  const handleSortChange = (value: string) => {
    // Create new search params object preserving existing params
    const params = new URLSearchParams(searchParams.toString());

    // Update or add sort parameter
    params.set("sort", value);

    // Update the URL
    router.push(`${pathname}?${params.toString()}`);

    // Update local state
    setCurrentSort(value);
  };

  // Get current sort option label
  const currentSortLabel =
    SORT_OPTIONS.find((option) => option.value === currentSort)?.label ||
    "Sort By";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="gap-2" variant="outline">
          <ArrowUpDown className="h-4 w-4" />
          <span>{currentSortLabel}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[180px]">
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            className={
              currentSort === option.value
                ? "bg-slate-100 dark:bg-slate-800 font-medium"
                : ""
            }
            onClick={() => handleSortChange(option.value)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
