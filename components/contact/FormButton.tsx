"use client";
import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

export default function FormButton() {
  const { pending } = useFormStatus();

  return (
    <Button fullWidth color="primary" isLoading={pending} type="submit">
      {pending ? "Sending message..." : "Send message"}
    </Button>
  );
}

