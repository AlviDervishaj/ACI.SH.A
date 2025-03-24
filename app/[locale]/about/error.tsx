"use client";

import { useEffect } from "react";

import { useRouter } from "@/i18n/routing";

export default function ErrorPage({ reset }: { reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router.push]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
