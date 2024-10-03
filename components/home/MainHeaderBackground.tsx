"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

import { Button } from "../ui/button";

import { FadeInHeader } from "@/components/home/FadeInHeader";
import { convertMillisecondsToSeconds } from "@/lib/utils";
import { title } from "@/components/primitives";

export default function MainHeaderBackground() {
  const t = useTranslations("Home");
  const container = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    axis: "y",
    target: container,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 2], [0, -500]);

  return (
    <section className="w-screen h-[78dvh] relative flex items-center content-center">
      <motion.div
        animate={{ opacity: 1 }}
        className={"absolute w-full h-full"}
        initial={{ opacity: 0 }}
      >
        <Image
          fill
          priority
          alt={"Oil Background"}
          className={"object-cover"}
          fetchPriority="high"
          src={"/images/oil-pouring.jpg"}
        />
      </motion.div>
      <div className="w-full h-full backdrop-blur-sm bg-black/50">
        <motion.section
          className="absolute w-full flex inset-0 flex-col gap-10 items-center justify-center"
          style={{ y: sm }}
        >
          <FadeInHeader delay={convertMillisecondsToSeconds(500)}>
            <p className={title({ size: "lg" })}>{t("title")}</p>
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
        </motion.section>
        <AnimatedArrow />
      </div>
    </section>
  );
}

function AnimatedArrow() {
  const scrolltoHash = function(element_id: string) {
    const element = document.getElementById(element_id);

    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Button
      className="absolute bottom-10 animate-bounce left-1/2 translate-x-1/2 z-10"
      variant={"outline"}
      onClick={() => scrolltoHash("bestSellers")}
    >
      <ArrowDown />
    </Button>
  );
}
