import { Input } from "@/components/ui/input";
type SearchProps = {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export default function Search(props: SearchProps) {
  return (
    <div className="max-w-lg h-full">
      <Input
        className="dark:bg-slate-600/70 text-base"
        name="search_term"
        placeholder="Search..."
        type="search"
        onChange={props.onChange}
      />
      <small className="text-muted-foreground">Search applies to product name</small>
    </div>
  );
}
