import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const STAGGER_DELAY = 0.3; //0.3 seconds or 300 milliseconds

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertSecondsToMilliseconds(seconds: number) {
  return seconds * 1000;
}

export function convertMillisecondsToSeconds(milliseconds: number) {
  return milliseconds / 1000;
}
