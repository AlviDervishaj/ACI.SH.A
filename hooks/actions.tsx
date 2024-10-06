"use server";

// prevState and formData
export async function handleFormSubmit(_: any, formData: FormData) {
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
  // SEND MESSAGE HERE
  else return { error: "", message: "Message sent successfully." };
}
