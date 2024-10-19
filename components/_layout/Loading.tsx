import { ReactNode } from "react";

import { Skeleton } from "@/components/ui/skeleton";

export const Loading = ({ children }: { children?: ReactNode }) => {
  return (
    <Skeleton className="w-full h-[10rem] rounded-full">{children}</Skeleton>
  );
};
