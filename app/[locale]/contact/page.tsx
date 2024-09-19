"use client";
import { CircularProgress } from "@nextui-org/progress";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import('@/components/contact/ContactForm'), {
  ssr: false, loading: () => (
    <div className="py-2 md:py-8 grid place-items-center h-full w-full">
      <CircularProgress aria-label="Loading..." color={"primary"} size={"lg"} />
    </div>
  )
  ,
})

export default function ContactPage() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-cetner content-center justify-evenly pb-4 ">
        <h1 className="tracking-wide font-bold text-center text-2xl md:text-3xl lg:text-5xl leading-9">
          Contact Us
        </h1>
        <small className="text-left md:text-center text-sm md:text-base lg:text-lg">
          Questions about our products / services, orders, or just want to say
          hello ? We&apos;re here to help.
        </small>
      </div>
      <ContactForm />
    </div>
  );
}
