"use server";
import { createClient } from "@/lib/supabase/server";
import { Tables } from "@/types/Database";

// prevState and formData
export async function handleContact(_: any, formData: FormData) {
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
  } else if (
    !rawFormData.lastName ||
    rawFormData.lastName.toString().trim() === ""
  ) {
    return { error: "Please provide a last name.", message: "" };
  } else if (!rawFormData.email || rawFormData.email.toString().trim() === "") {
    return { error: "Please provide an email.", message: "" };
  } else if (
    !rawFormData.message ||
    rawFormData.message.toString().trim() === ""
  ) {
    return { error: "Please provide a message.", message: "" };
  }

  const _data: Partial<Tables<"messages">> = {
    first_name: rawFormData.firstName as string,
    last_name: rawFormData.lastName as string,
    email: rawFormData.email as string,
    message: rawFormData.message as string,
  };

  const supabase = await createClient();
  const { data, error, status } = await supabase
    .from("messages")
    .insert([_data]);

  if (status !== 201) {
    console.log(data, error, status);

    return {
      error: "An error occurred while sending the message.",
      message: "",
    };
  }

  return { error: "", message: "Message sent successfully." };
}
