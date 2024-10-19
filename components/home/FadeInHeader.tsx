"use client";
import { motion } from "framer-motion";
import { memo, ReactNode } from "react";

import { title } from "@/components/primitives";
export const FadeInHeader = memo(
  function FadeInHeader({
    children,
    delay,
  }: {
    children: ReactNode;
    delay?: number;
  }) {
    return (
      <motion.h1
        animate={{ opacity: 1 }}
        className={title({
          size: "lg",
          className: "text-center drop-shadow-md w-fit h-fit p-2 text-white",
        })}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          delay: delay,
        }}
      >
        {children}
      </motion.h1>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.delay === nextProps.delay;
  },
);
