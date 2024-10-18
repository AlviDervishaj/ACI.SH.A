import { ReactNode } from "react";

import { Skeleton } from "@/components/ui/skeleton";

export const Loading = ({ children }: { children?: ReactNode }) => {
  return <Skeleton className="w-[100px] h-[20px] rounded-full" />;
};

