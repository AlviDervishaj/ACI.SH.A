"use client";

import { useEffect } from "react";

import { useRouter } from "@/i18n/routing";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
    router.push("/");
  }, [error, router.push]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
      type="button"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
