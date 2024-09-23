import clsx from "clsx";

import { Input } from "@/components/ui/input";
type Props = {
  variant?: "small_screen_search";
};
export default function Search({ variant }: Props) {
  return (
    <Input
      className={clsx(
        "!max-w-full lg:!max-w-sm border-0 border-b-2 focus-visible:!border-b-orange-600 dark:focus-visible:!border-b-orange-500 transition-colors duration-500 ease-in-out rounded-none bg-slate-200 border-b-slate-700 dark:bg-background/10 placeholder:text-base outline-none dark:!border-b-slate-200/70",
        variant === "small_screen_search" ? "bg-transparent" : "",
      )}
      name="search_term"
      placeholder="Search..."
      type="search"
    />
  );
}
