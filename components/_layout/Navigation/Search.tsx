import { Input } from "@/components/ui/input";
export default function Search() {
  return (
    <Input
      className="dark:bg-slate-600/70 lg:w-[20dvw] h-full"
      name="search_term"
      placeholder="Search..."
      type="search"
    />
  );
}
