import { Input } from "@/components/ui/input";
type SearchProps = {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export default function Search(props: SearchProps) {
  return (
    <div className="w-full max-w-md h-full">
      <Input
        className="dark:bg-slate-600/70 text-base"
        name="search_term"
        placeholder="Search..."
        type="search"
        onChange={props.onChange}
      />
    </div>
  );
}
