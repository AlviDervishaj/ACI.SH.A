"use client";

import type { SortingOptions } from "@/types/Api";
import type { Product } from "@/types/Product";

import { useTransition, useCallback, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type SortOption = {
  name: string;
  value: string;
};

type SortersProps = {
  setSortingAction: (params: {
    type: "sort" | "filter";
    value: string;
    page: number;
    brand: number;
    prevState: SortingOptions;
  }) => Promise<{
    products: Product[];
    error: Error | null;
    sorting_opts: SortingOptions;
  }>;
  page: number;
  brand: number;
  emptyMessage?: string;
  placeholder?: string;
};

const sortOptions: SortOption[] = [
  { name: "Price: Low to High", value: "price_asc" },
  { name: "Price: High to Low", value: "price_desc" },
  { name: "Newest", value: "newest" },
  { name: "Popularity", value: "popularity" },
];

export function Sorters({
  setSortingAction,
  page,
  brand,
  emptyMessage = "No sorting options found.",
  placeholder = "Sort by...",
}: SortersProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const handleSelect = useCallback(
    (currentValue: string) => {
      startTransition(() => {
        setValue(currentValue);
        const selectedOption = sortOptions.find(
          (option) => option.value === currentValue,
        );

        if (selectedOption) {
          setSortingAction({
            type: "sort",
            value: selectedOption.value,
            page,
            brand,
            prevState: { sort: [], filter: [] },
          }).catch((error) => {
            // eslint-disable-next-line no-console
            console.error("Error in setSortingAction:", error);
          });
        }
      });
    },
    [setSortingAction, page, brand],
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="w-[200px] justify-between"
          disabled={isPending}
          variant="outline"
        >
          {value
            ? sortOptions.find((option) => option.value === value)?.name
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search sorting options..." />
          <CommandEmpty>{emptyMessage}</CommandEmpty>
          <CommandGroup>
            {sortOptions.map((option) => (
              <CommandItem
                key={option.value}
                onSelect={() => handleSelect(option.value)}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === option.value ? "opacity-100" : "opacity-0",
                  )}
                />
                {option.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default Sorters;
