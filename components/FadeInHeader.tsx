"use client";
import { motion } from "framer-motion";
import { title } from "@/components/primitives";
import { ReactNode } from "react";
export function FadeInHeader({ children, delay }: { children: ReactNode, delay?: number }) {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        delay: delay
      }}
      exit={{ opacity: 0 }}
      className={title({
        size: "lg",
        className:
          "text-center drop-shadow-md w-fit h-fit p-2 text-white",
      })}
    >
      {children}
    </motion.h1>
  );
}
