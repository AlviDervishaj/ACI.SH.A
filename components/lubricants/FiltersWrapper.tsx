"use client";

import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { usePathname, useRouter } from "@/i18n/routing";

import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Button } from "../ui/button";

import Filters, { filterOptions, type Option } from "./Filters";

type FormType = {
  filter_by: { name: string; value: string }[];
};

export const FiltersWrapper = () => {
  const form = useForm<FormType>();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const filter = searchParams.get("filter");

    if (filter) {
      if (filter.includes(",")) {
        const filters = filter
          .split(",")
          .map(
            (f) => filterOptions.find((option) => option.value === f) as Option,
          );

        form.setValue("filter_by", filters);
      } else {
        const filters = filterOptions.find(
          (option) => option.value === filter,
        ) as Option;

        form.setValue("filter_by", [filters]);
      }
    }
  }, [searchParams, form]);

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(name, value);

    return params.toString();
  };

  const handleOnSubmit = (data: FormType) => {
    if (data.filter_by && data.filter_by.length > 0) {
      const filter = data.filter_by.map((f) => f.value).join(",");

      router.push(`${pathname}?${createQueryString("filter", filter)}`);
    } else {
      // If no filters, remove filter param and keep other params if any
      const params = new URLSearchParams(searchParams.toString());

      params.delete("filter");
      const queryString = params.toString();

      router.push(`${pathname}${queryString ? `?${queryString}` : ""}`);
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-row items-center content-center justify-star gap-4"
        onSubmit={form.handleSubmit(handleOnSubmit)}
      >
        <FormField
          control={form.control}
          name="filter_by"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Filters
                  multiple
                  emptyMessage="No filters found."
                  field={field}
                  placeholder="Filter By"
                  setValue={form.setValue}
                />
              </FormControl>
            </FormItem>
          )}
          rules={{ required: false }}
        />
        <Button type="submit">Apply</Button>
      </form>
    </Form>
  );
};
