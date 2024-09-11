import { Divider, Image, Input } from "@nextui-org/react";
import { ChangeEvent, useRef, useState } from "react";
import { SearchIndex } from "@/searchIndex";
import { LoaderCircle, SearchIcon } from "lucide-react";
import { Link, useRouter } from "@/config/routing";
import { useIsomorphicLayoutEffect, useOnClickOutside } from "usehooks-ts";

export function Search() {
  const [value, setValue] = useState<string>("");
  const [results, setResults] = useState<typeof SearchIndex>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const ref = useRef(null);

  function handleClickOutside() {
    setResults([]);
    setIsLoading(false);
    setValue("");
  };

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setIsLoading(true);
    setValue(event.target.value);
    const term: string = event.currentTarget.value;
    if (term === "") {
      setResults([]);
      setIsLoading(false);
      return;
    }
    const _tempResults = SearchIndex.filter((predicate) => predicate.title.includes(term) || predicate.keywords.find((predicate) => predicate.startsWith(term)))
    setResults(_tempResults);
    setIsLoading(false);
  };

  // Handle click outside div to hide the results.
  useOnClickOutside(ref, handleClickOutside);


  useIsomorphicLayoutEffect(() => {
    // prefetch links
    SearchIndex.map((si) => router.prefetch(si.href))
  }, [SearchIndex]);

  function handleRouteChange(route: string) {
    handleClickOutside();
    router.push(route);
  }

  return (
    <div className="w-fit h-fit relative">
      <Input fullWidth
        variant="underlined"
        size="lg"
        classNames={{
          input: "text-[17px]",
        }} autoComplete="off" className="self-center justify-self-center" autoCapitalize="words" endContent={<SearchIcon />} value={value} placeholder="Search" onChange={handleSearchChange} />
      {isLoading ? <div className="absolute mt-1 rounded-md z-50 p-1 left-0 w-full h-full bg-default-200 flex flex-row items-center content-center justify-center">
        <button onClick={() => { }} className="animate-spin w-fit h-fit flex flex-row items-center content-center">
          <LoaderCircle className="stroke-default-600" />
        </button>
      </div>
        : results.length >= 1 ?
          <div ref={ref} className="absolute mt-1 rounded-md p-1 z-50 left-0 w-full h-fit bg-default-200">
            {results.map((result) =>
              <div>
                <div className="p-1 hover:bg-default-300 flex" key={result.title}>
                  <button onClick={() => handleRouteChange(result.href)} className="w-full">
                    {result.title}
                  </button>
                </div>
                <Divider />
              </div>
            )}
          </div>
          : null
      }
    </div>
  );
}
