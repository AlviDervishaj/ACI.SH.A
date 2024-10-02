import { Input } from "@/components/ui/input";
export default function Search() {
  return (
    <Input
      className="dark:bg-slate-600/70"
      name="search_term"
      placeholder="Search..."
      type="search"
    />
  );
}
