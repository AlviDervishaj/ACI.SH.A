import { CircularProgress } from "@nextui-org/progress";
export default function LoadingSkeletonPage() {
  return (
    <div className="py-2 md:py-8 grid place-items-center h-full w-full">
      <CircularProgress aria-label="Loading..." color={"primary"} size={"lg"} />
    </div>
  );
}

