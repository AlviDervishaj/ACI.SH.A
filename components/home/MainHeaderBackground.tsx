"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

import { Button } from "../ui/button";

import { title } from "@/components/primitives";

export function MainHeaderBackground() {
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
          className="absolute text-center w-full flex inset-0 flex-col gap-10 items-center justify-center"
          style={{ y: sm }}
        >
          <p className="text-4xl lg:text-7xl font-bold text-slate-200">
            {t("title")}
          </p>
          <div className="w-fit text-[2.3rem] lg:text-5xl leading-9 font-medium text-slate-200">
            {t.rich("header_description", {
              distributor: (chunk) => (
                <p className={title({ size: "lg", color: "orange" })}>
                  &nbsp;{chunk}&nbsp;
                </p>
              ),
            })}
          </div>
        </motion.section>
        <AnimatedArrow />
      </div>
    </section>
  );
}

function AnimatedArrow() {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);

    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-fit bottom-0 pb-4 p-1 flex flex-row items-center content-center justify-center absolute">
      <Button
        className="animate-bounce dark:hover:bg-slate-700 z-10"
        variant={"outline"}
        onClick={() => scrolltoHash("bestSellers")}
      >
        <ArrowDown />
      </Button>
    </div>
  );
}
