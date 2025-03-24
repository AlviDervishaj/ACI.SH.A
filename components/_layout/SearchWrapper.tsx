"use client";

import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams } from "next/navigation";

import { usePathname, useRouter } from "@/i18n/routing";

import { Button } from "../ui/button";

import Search from "./Navigation/Search";

export const SearchWrapper = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [term, setTerm] = useState<string>("");

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const _term: string = e.target.value;

      setTerm(_term);
      const createQueryString = () => {
        const params: URLSearchParams = new URLSearchParams(
          searchParams.toString(),
        );

        params.set("term", _term);

        return params.toString();
      };

      router.push(`${pathname}?${createQueryString()}`);
    },
    550,
  );

  useEffect(() => {
    setTerm(searchParams.toString().split("term=")[1] || "");
  }, [searchParams]);

  const handleClear = () => {
    setTerm("");
    router.push(pathname);
  };

  return (
    <>
      <div className="flex flex-row content-center justify-start gap-3 w-full h-fit items-center">
        <Search value={term} onChange={handleSearch} />
        <Button
          className="self-center h-full m-0 px-3 py-2.5"
          onClick={handleClear}
        >
          Clear
        </Button>
      </div>
      <small className="text-muted-foreground">
        Search applies to product name
      </small>
    </>
  );
};
