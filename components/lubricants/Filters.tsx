import { Check, ChevronsUpDown } from "lucide-react";
import { useEffect, useCallback } from "react";
import type { ControllerRenderProps, UseFormSetValue } from "react-hook-form";

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

import { FormControl, FormItem, FormMessage } from "../ui/form";

export type Option = {
  name: string;
  value: string;
};

type FiltersProps = {
  multiple?: boolean;
  emptyMessage?: string;
  placeholder?: string;
  field: ControllerRenderProps<{ filter_by: Option[] }, "filter_by">;
  setValue: UseFormSetValue<{ filter_by: Option[] }>;
};

// Define mutually exclusive filter groups
const MUTUALLY_EXCLUSIVE_GROUPS = [
  ["discount", "not_discount"] // These options cannot be selected together
];

export const filterOptions: Option[] = [
  { name: "discounted", value: "discount" },
  { name: "not discounted", value: "not_discount" },
  { name: "popular", value: "popular" },
  { name: "new", value: "new" },
];

export function Filters({
  multiple = false,
  emptyMessage = "No filters found.",
  placeholder = "Select filters...",
  field,
  setValue,
}: FiltersProps) {
  const selectedValues = Array.isArray(field.value)
    ? field.value
    : field.value
      ? [field.value]
      : [];

  // Check if option belongs to a mutually exclusive group
  const getExclusiveGroups = (optionValue: string) => {
    return MUTUALLY_EXCLUSIVE_GROUPS.filter(group => 
      group.includes(optionValue)
    );
  };

  // Helper function to check if an option should be disabled
  const isOptionDisabled = (optionValue: string): boolean => {
    const belongingGroups = getExclusiveGroups(optionValue);
    
    // If this option doesn't belong to any mutually exclusive group, it's never disabled
    if (belongingGroups.length === 0) return false;
    
    // Check if any option from the same group(s) is already selected
    return belongingGroups.some(group => 
      selectedValues.some(selectedOption => 
        group.includes(selectedOption.value) && selectedOption.value !== optionValue
      )
    );
  };

  // Helper function to resolve conflicts in selected options
  const resolveConflicts = useCallback((options: Option[]): Option[] => {
    if (!options.length) return options;
    
    const result = [...options];
    let hasConflict = false;

    // Check each mutually exclusive group
    for (const group of MUTUALLY_EXCLUSIVE_GROUPS) {
      const matchingOptions = options.filter(
        option => group.includes(option.value)
      );
      
      // If more than one option from the same group is selected, keep only the first one
      if (matchingOptions.length > 1) {
        hasConflict = true;
        
        // Remove all options from this group except the first one
        for (let i = 1; i < matchingOptions.length; i++) {
          const indexToRemove = result.findIndex(
            option => option.value === matchingOptions[i].value
          );
          if (indexToRemove !== -1) {
            result.splice(indexToRemove, 1);
          }
        }
      }
    }
    
    return hasConflict ? result : options;
  }, []);

  // Enforce mutually exclusive filters when component mounts or when selected values change
  useEffect(() => {
    if (!selectedValues.length) return;
    
    const resolvedValues = resolveConflicts(selectedValues);
    
    // Update the field value if conflicts were resolved
    if (resolvedValues.length !== selectedValues.length) {
      setValue(field.name, resolvedValues);
    }
  }, [selectedValues, field.name, setValue, resolveConflicts]);

  // Handle selecting an option
  const handleSelect = (option: Option) => {
    if (multiple) {
      const isSelected = selectedValues.some(v => v.value === option.value);
      
      // If already selected, remove it
      if (isSelected) {
        setValue(
          field.name,
          selectedValues.filter(v => v.value !== option.value)
        );
        return;
      }
      
      // Add the new option
      const newValues = [...selectedValues, option];
      
      // Check for mutually exclusive conflicts
      const belongingGroups = getExclusiveGroups(option.value);
      
      if (belongingGroups.length > 0) {
        // Find values to remove
        const valuesToRemove = new Set<string>();
        
        for (const group of belongingGroups) {
          for (const selectedOption of selectedValues) {
            if (group.includes(selectedOption.value)) {
              valuesToRemove.add(selectedOption.value);
            }
          }
        }
        
        // Filter out conflicting values and add the new option
        setValue(
          field.name, 
          [...selectedValues.filter(v => !valuesToRemove.has(v.value)), option]
        );
      } else {
        // No conflicts, just add the new option
        setValue(field.name, newValues);
      }
    } else {
      // Single selection mode
      setValue(field.name, [option]);
    }
  };

  return (
    <FormItem className="flex flex-col">
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-between capitalize",
                !field.value && "text-muted-foreground"
              )}
            >
              {selectedValues.length > 0
                ? selectedValues.map((v) => v.name).join(", ")
                : placeholder}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder={placeholder} />
            <CommandList>
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              <CommandGroup>
                {filterOptions.map((option) => {
                  const isDisabled = isOptionDisabled(option.value);
                  const isSelected = selectedValues.some(v => v.value === option.value);
                  
                  return (
                    <CommandItem
                      key={option.name}
                      className={cn(
                        "capitalize",
                        isDisabled && !isSelected && "opacity-50 cursor-not-allowed"
                      )}
                      value={option.value}
                      disabled={isDisabled && !isSelected}
                      onSelect={() => handleSelect(option)}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          isSelected ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {option.name}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  );
}

export default Filters;
