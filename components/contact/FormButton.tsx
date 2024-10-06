"use client";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";

export default function FormButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-full text-foreground dark:bg-gray-700"
      disabled={pending}
      type="submit"
      variant="outline"
    >
      {pending ? "Sending message..." : "Send message"}
    </Button>
  );
}
