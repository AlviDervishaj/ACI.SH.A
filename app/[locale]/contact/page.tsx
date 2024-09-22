"use client";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("@/components/contact/ContactForm"), {
  ssr: false,
});

export default function ContactPage() {
  return (
    <>
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
    </>
  );
}
