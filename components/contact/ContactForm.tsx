import { useActionState } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { handleContact } from "@/actions/handleContact";

import FormButton from "./FormButton";

const initialState = {
  error: "",
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useActionState(handleContact, initialState);

  return (
    <form
      action={formAction}
      className="w-full h-full space-y-4 max-w-sm mx-auto flex flex-col items-center content-center justify-center"
    >
      <Input
        className="dark:bg-slate-700"
        maxLength={20}
        name="first_name"
        placeholder="First Name"
      />
      <Input
        className="dark:bg-slate-700"
        maxLength={40}
        name="last_name"
        placeholder="Last Name"
      />
      <Input
        className="dark:bg-slate-700"
        maxLength={60}
        name="email"
        placeholder="Email"
      />
      <Textarea
        className="max-w-sm text-base dark:bg-slate-700"
        maxLength={180}
        name="message"
        placeholder="Enter your message here."
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
