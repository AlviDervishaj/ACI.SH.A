import { CircularProgress } from "@nextui-org/progress";
export default function LoadingSkeletonPage() {
  return (
    <section className="fixed top-0 left-0 w-screen h-screen bg-black/70 ">
      <CircularProgress aria-label="Loading..." />
    </section>
  );
}

