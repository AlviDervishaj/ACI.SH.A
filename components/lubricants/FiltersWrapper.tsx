"use client";

import { useForm } from "react-hook-form";
import Filters, { filterOptions, Option } from "./Filters";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/routing";
import { Button } from "../ui/button";
import { useEffect } from "react";

type FormType = {
  filter_by: { name: string; value: string }[];
};

export const FiltersWrapper = () => {
  const form = useForm<FormType>();
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const filter = searchParams.get('filter');
    if (filter) {
      if (filter.includes(',')) {
        const filters = filter.split(',').map((f) => filterOptions.find(option => option.value === f) as Option);
        form.setValue('filter_by', filters);
      }
      else {
        const filters = filterOptions.find(option => option.value === filter) as Option;
        form.setValue('filter_by', [filters]);
      }
    }
  }, [searchParams]);

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(name, value);

    return params.toString();
  }

  const handleOnSubmit = (data: FormType) => {
    if (data.filter_by) {
      const filter = data.filter_by.map((f) => f.value).join(',');
      router.push(pathname + '?' + createQueryString('filter', filter));
      return;
    }
    else {
      router.push(pathname);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleOnSubmit)} className="flex flex-row items-center content-center justify-star gap-4">
        <FormField
          control={form.control}
          name="filter_by"
          rules={{ required: false }}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Filters
                  placeholder="Filter By"
                  emptyMessage="No filters found."
                  field={field}
                  setValue={form.setValue}
                  multiple
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Apply</Button>
      </form>
    </Form>
  )
}
