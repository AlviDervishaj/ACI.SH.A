import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FormControl, FormItem, FormMessage } from "../ui/form"
import { ControllerRenderProps, UseFormSetValue } from 'react-hook-form'

export type Option = {
  name: string
  value: string
}

type FiltersProps = {
  multiple?: boolean
  emptyMessage?: string
  placeholder?: string
  field: ControllerRenderProps<{ filter_by: Option[] }, "filter_by">
  setValue: UseFormSetValue<{ filter_by: Option[] }>
}



export const filterOptions: Option[] = [
  { name: 'discounted', value: 'discount' },
  { name: 'not discounted', value: 'not_discount' },
  { name: 'popular', value: 'popular' },
  { name: 'new', value: 'new' },
]

export function Filters({
  multiple = false,
  emptyMessage = "No filters found.",
  placeholder = "Select filters...",
  field,
  setValue,
}: FiltersProps) {
  const selectedValues = Array.isArray(field.value)
    ? field.value
    : (field.value ? [field.value] : []);

  return (
    <FormItem className="flex flex-col">
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              role="combobox"
              className={cn(
                "w-full justify-between capitalize",
                !field.value && "text-muted"
              )}
            >
              {selectedValues.length > 0
                ? selectedValues.map(v => v.name).join(", ")
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
                {filterOptions.map((option) => (
                  <CommandItem
                    value={option.value}
                    key={option.name}
                    onSelect={() => {
                      if (multiple) {
                        const isInSelectedValues = selectedValues.some(v => v.value === option.value)
                        // If is in selected values remove it, otherwise add it
                        const newValue = isInSelectedValues ? selectedValues.filter(v => v.value !== option.value)
                          : [...selectedValues, option];
                        setValue(field.name, newValue as any);
                      } else {
                        setValue(field.name, option as any);
                      }
                    }}
                    className="capitalize"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedValues.some(v => v.value === option.value) ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {option.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  )
}

export default Filters

