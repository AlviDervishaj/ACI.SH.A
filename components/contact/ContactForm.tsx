"use client";
import { useFormState } from "react-dom";
import dynamic from "next/dynamic";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { handleFormSubmit } from "@/hooks/actions";

const initialState = {
  error: "",
  message: "",
};

const FormButton = dynamic(() => import("@/components/contact/FormButton"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function ContactForm() {
  const [state, formAction] = useFormState(handleFormSubmit, initialState);

  return (
    <form
      action={formAction}
      className="w-full h-full space-y-4 max-w-sm mx-auto flex flex-col items-center content-center justify-center"
    >
      <Input
        className="dark:bg-slate-700"
        name="first_name"
        placeholder="First Name"
      />
      <Input
        className="dark:bg-slate-700"
        name="last_name"
        placeholder="Last Name"
      />
      <Input className="dark:bg-slate-700" name="email" placeholder="Email" />
      <Textarea
        className="max-w-sm text-base dark:bg-slate-700"
        name="message"
        placeholder="Enter your message here. &#128515; "
        rows={5}
      />
      {state?.error && (
        <div aria-live="polite" className="w-full h-fit p-2 text-center">
          <p
            aria-live="polite"
            className="dark:text-red-500 text-red-600 font-bold text-base lg:text-lg"
          >
            {state.error}
          </p>
        </div>
      )}
      {state?.message && (
        <div aria-live="polite" className="w-full h-fit p-2 text-center">
          <p
            aria-live="polite"
            className="dark:text-green-500 text-green-600 font-bold text-base lg:text-lg"
          >
            {state.message}
          </p>
        </div>
      )}
      <FormButton />
    </form>
  );
}
