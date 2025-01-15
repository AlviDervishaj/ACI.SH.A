"use client";

import { useState } from 'react';
import Search from './Navigation/Search';
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams } from 'next/navigation';
import { usePathname, useRouter } from '@/i18n/routing';
import { Button } from '../ui/button';

export const SearchWrapper = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [term, setTerm] = useState<string>('');

  const handleSearch = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const _term: string = e.target.value;
    setTerm(_term);
    const createQueryString = () => {
      const params = new URLSearchParams(searchParams.toString())
      params.set("term", _term);
      return params.toString();
    }
    router.push(pathname + "?" + createQueryString());
  }, 350);
  return (
    <div className="flex flex-row items-start content-center justify-start gap-3 w-full">
      <Search value={term} onChange={handleSearch} />
      <Button className="h-full" onClick={() => router.push(pathname)}>Clear</Button>
    </div>
  )
}
