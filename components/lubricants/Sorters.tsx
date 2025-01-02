"use client";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const sorters = [
  {
    value: "default",
    label: "Default",
  },
  {
    value: "popular",
    label: "Popular",
  },
  {
    value: "name",
    label: "Name",
  },
  {
    value: "price-highest-to-lowest",
    label: "Price: Highest to Lowest",
  },
  {
    value: "price-lowest-to-highest",
    label: "Price: Lowest to Highest",
  },
];

export default function Sorters({ setSortingAction }: { setSortingAction: ({ type, value }: { type: "sort" | "filter", value: string }) => void }) {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="w-[140px] lg:w-[200px] justify-between"
          role="combobox"
          variant="outline"
        >
          {value
            ? sorters.find((filter) => filter.value === value)?.label
            : "Sort by"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 !bg-white">
        <Command>
          <CommandInput placeholder="Sort by" />
          <CommandList>
            <CommandEmpty>No sorting found.</CommandEmpty>
            <CommandGroup>
              {sorters.map((filter) => (
                <CommandItem
                  key={filter.value}
                  value={filter.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setSortingAction({ type: "sort", value: currentValue === value ? "" : currentValue });
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === filter.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {filter.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover >
  );
}
