"use client";

import { useTranslations } from "next-intl";

import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <>
      <div className="flex flex-col items-cetner content-center justify-evenly pb-4 ">
        <h1 className="tracking-wide font-bold text-center text-2xl md:text-3xl lg:text-5xl leading-9 pb-3">
          {t("header")}
        </h1>
        <small className="text-left md:text-center text-sm md:text-base lg:text-lg">
          {t("description")}
        </small>
      </div>
      <ContactForm />
    </>
  );
}
