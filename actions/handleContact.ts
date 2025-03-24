"use server";
import type { Tables } from "@/types/Database";

import { createClient } from "@/lib/supabase/server";

// prevState and formData
export async function handleContact(_prevState: unknown, formData: FormData) {
  const rawFormData = {
    firstName: formData.get("first_name"),
    lastName: formData.get("last_name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  if (
    !rawFormData.firstName ||
    rawFormData.firstName.toString().trim() === ""
  ) {
    return { error: "Please provide a first name.", message: "" };
  }

  if (!rawFormData.lastName || rawFormData.lastName.toString().trim() === "") {
    return { error: "Please provide a last name.", message: "" };
  }

  if (!rawFormData.email || rawFormData.email.toString().trim() === "") {
    return { error: "Please provide an email.", message: "" };
  }

  if (!rawFormData.message || rawFormData.message.toString().trim() === "") {
    return { error: "Please provide a message.", message: "" };
  }

  const _data: Partial<Tables<"messages">> = {
    first_name: rawFormData.firstName as string,
    last_name: rawFormData.lastName as string,
    email: rawFormData.email as string,
    message: rawFormData.message as string,
  };

  const supabase = await createClient();
  const { error, status } = await supabase.from("messages").insert([_data]);

  if (status !== 201 && error) {
    return {
      error: "An error occurred while sending the message.",
      message: "",
    };
  }

  return { error: "", message: "Message sent successfully." };
}
