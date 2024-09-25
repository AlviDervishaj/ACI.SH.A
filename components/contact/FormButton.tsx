"use client";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";

export default function FormButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-full"
      color="primary"
      disabled={pending}
      type="submit"
      variant={"secondary"}
    >
      {pending ? "Sending message..." : "Send message"}
    </Button>
  );
}
