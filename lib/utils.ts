import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function convertSecondsToMilliseconds(seconds: number) {
  return seconds * 1000;
}

export function convertMillisecondsToSeconds(milliseconds: number) {
  return milliseconds / 1000;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());
