import { LoaderCircle } from "lucide-react";

export default function LoadingSkeletonPage() {
  return (
    <div className="py-2 md:py-8 grid place-items-center h-full w-full">
      <button className="animate-spin w-10 h-10 relative flex items-center content-center justify-center">
        <LoaderCircle />
      </button>
    </div>
  );
}
