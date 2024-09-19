"use client";
import { handleFormSubmit } from "@/hooks/actions";
import { Textarea } from "@nextui-org/react";
import { useFormState } from "react-dom";
import dynamic from "next/dynamic";

const initialState = {
  error: "",
  message: "",
};
const Input = dynamic(() => import('@/components/custom/Input'), { ssr: false })
const FormButton = dynamic(() => import('@/components/contact/FormButton'), { ssr: false })

export default function ContactForm() {
  const [state, formAction] = useFormState(handleFormSubmit, initialState);

  return (
    <form
      action={formAction}
      className="w-full h-full space-y-4 max-w-sm mx-auto flex flex-col items-center content-center justify-center"
    >
      <Input label="First Name" name="first_name" />
      <Input label="Last Name" name="last_name" />
      <Input label="Email" name="email" />
      <Textarea
        className="max-w-sm text-base"
        classNames={{ input: "text-base", label: "text-base" }}
        label="Message"
        maxRows={5}
        name="message"
        placeholder="Enter your message here. &#128515; "
      />
      {state?.error ? (
        <div aria-live="polite" className="w-full h-fit p-2 text-center">
          <p
            aria-live="polite"
            className="dark:text-red-500 text-red-600 font-bold text-base lg:text-lg"
          >
            {state.error}
          </p>
        </div>
      ) : null}
      {state?.message ? (
        <div aria-live="polite" className="w-full h-fit p-2 text-center">
          <p
            aria-live="polite"
            className="dark:text-green-500 text-green-600 font-bold text-base lg:text-lg"
          >
            {state.message}
          </p>
        </div>
      ) : null}
      <FormButton />
    </form>
  );
}
