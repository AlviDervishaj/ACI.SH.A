import useSWR from "swr";

import { fetcher } from "@/lib/utils";

export function useUser<T>(id: string) {
  const { data, error, isLoading } = useSWR<T>(`/api/user/${id}`, fetcher);

  return {
    data,
    error,
    isLoading,
  };
}
