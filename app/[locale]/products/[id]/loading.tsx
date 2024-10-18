import { Loading } from "@/components/_layout/Loading";

export default function LoadingSkeletonPage() {
  return (
    <div className="py-2 md:py-8 grid place-items-center h-full w-full">
      <Loading />
    </div>
  );
}
