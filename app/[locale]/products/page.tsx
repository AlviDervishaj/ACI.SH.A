"use client";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const params = useSearchParams();
  return (
    <section className="flex flex-col items-center justify-center gap-4 h-full relative">
      <h1>Name param is: {params.get("name")}</h1>
    </section >
  );
}

