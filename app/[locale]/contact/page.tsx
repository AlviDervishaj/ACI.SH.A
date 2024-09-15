"use client";
import { InputProps, Input as NInput, Textarea, Button } from "@nextui-org/react";
import clsx from "clsx";

export default function ContactPage() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-cetner content-center justify-evenly pb-4 ">
        <h1 className="tracking-wide font-bold text-center text-2xl md:text-3xl lg:text-5xl leading-9">Contact Us</h1>
        <small className="text-left md:text-center text-sm md:text-base lg:text-lg">Questions about our products / services, orders, or just want to say hello ? We're here to help.</small>
      </div>
      <ContactForm />
    </div>
  );
}


function ContactForm() {
  return (
    <div className="w-full h-full space-y-4 max-w-sm mx-auto flex flex-col items-center content-center justify-center">
      <Input label="First Name" />
      <Input label="Last Name" />
      <Input label="Email" />
      <Textarea
        maxRows={5}
        label="Message"
        className="max-w-sm text-base"
        classNames={{ input: "text-base", label: "text-base" }}
        placeholder="Enter your message here. &#128515; "
      />
      <Button color="primary" fullWidth>Send message</Button>
    </div>
  )
}

function Input(props: InputProps) {
  const { className, classNames, ...otherProps } = props;
  return <NInput classNames={{ input: "text-base", ...classNames }} className={className} {...otherProps} />
}
