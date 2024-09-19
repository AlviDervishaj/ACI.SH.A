import { MockData } from "@/mock_data";
import { MockDataType } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

export const STAGGER_DELAY = 0.3; //0.3 seconds or 300 milliseconds

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertSecondsToMilliseconds(seconds: number) {
  return seconds * 1000;
}

export function convertMillisecondsToSeconds(milliseconds: number) {
  return milliseconds / 1000;
}


export function handlePageChange(page: number, setCurrentPage: Dispatch<SetStateAction<number>>, searchParams: ReadonlyURLSearchParams, router: AppRouterInstance, pathname: string) {
  setCurrentPage(page);
  // set page url
  if (page >= 1) {
    createPageURL(page, searchParams, router, pathname);

    return;
  } else return;
}

export const createPageURL = (pageNumber: number | string, searchParams: ReadonlyURLSearchParams, router: AppRouterInstance, pathname: string) => {
  const params = new URLSearchParams(searchParams);

  params.set("page", pageNumber.toString());
  router.replace(`${pathname}?${params.toString()}`);
};

export function getXItemsFromArray(
  size: number,
  itemsToSkip: number,
  arr?: MockDataType,
) {
  const results = [];
  const array = arr ? arr : MockData;

  if (itemsToSkip >= array.length || size > array.length) {
    return [];
  }

  for (let i = itemsToSkip; i <= size + itemsToSkip - 1; i++) {
    const _dummy = array[i] ?? null;
    results.push(_dummy);
  }
  return results;
}

export function filterPriceHighestToLowest() {
  const rawData = MockData.toSorted((a, b) => {
    if (b.price < a.price) {
      return -1;
    }
    if (b.price > a.price) {
      return 1;
    }

    return 0;
  });

  return rawData;
}

export function filterPriceLowestToHighest() {
  const rawData = MockData.toSorted((a, b) => {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }

    return 0;
  });

  return rawData;
}

