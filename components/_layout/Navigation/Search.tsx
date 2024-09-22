import { Input } from "@/components/ui/input";
export default function Search() {
  return (
    <Input
      className="!max-w-full md:!max-w-[10rem] lg:!max-w-sm border-0 border-b-2 focus-visible:!border-b-orange-600 dark:focus-visible:!border-b-orange-500 transition-colors duration-500 ease-in-out rounded-none bg-slate-200 border-b-slate-700 dark:bg-background/10 placeholder:text-base outline-none dark:!border-b-slate-200/70"
      name="search_term"
      placeholder="Search..."
      type="search"
    />
  );
}
