"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeInHeader } from "@/components/FadeInHeader";
import { title } from "@/components/primitives";
import { convertMillisecondsToSeconds } from "@/lib/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef } from "react";

export function MainHeaderBackground() {
  const t = useTranslations("Home");
  const container = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });
  const sm = useTransform(scrollYProgress, [0, 2], [0, -500]);
  return (
    <section
      className="w-screen h-[100dvh] relative flex items-center content-center"
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={"absolute w-full h-full"}>
        <Image fill className={"object-cover"} src={"/images/oil-pouring.jpg"} alt={"Oil Background"} />
      </motion.div>
      <div className="w-full h-full backdrop-blur-sm bg-black/50">
        <motion.section style={{ y: sm }} className="absolute w-full flex inset-0 flex-col gap-10 items-center justify-center">
          <FadeInHeader delay={convertMillisecondsToSeconds(500)}>
            <p className={title({ size: "lg" })}>
              {t("title")}
            </p>
          </FadeInHeader>
          <FadeInHeader delay={convertMillisecondsToSeconds(700)}>
            <div className={title({ size: "md" })}>
              {t.rich("header_description", {
                distributor: (chunk) => (
                  <p className={title({ size: "lg", color: "orange" })}>
                    &nbsp;{chunk}&nbsp;
                  </p>
                ),
              })}
            </div>
          </FadeInHeader>
        </motion.section >
      </div>
    </section>
  );
}
