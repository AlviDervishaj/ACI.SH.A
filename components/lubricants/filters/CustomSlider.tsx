"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type CustomSliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>;

const CustomSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  CustomSliderProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
      <SliderPrimitive.Range className="absolute h-full bg-orange-500 dark:bg-orange-500" />
    </SliderPrimitive.Track>
    
    {Array.from({ length: props.value?.length || 1 }).map((_, i) => (
      <SliderPrimitive.Thumb 
        key={`thumb-${i}-${props.value?.[i] || 0}`}
        asChild
      >
        <motion.div 
          className="block h-5 w-5 rounded-full bg-orange-500 border-2 border-white dark:border-slate-800 shadow-sm cursor-grab active:cursor-grabbing focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 500,
            damping: 15,
            delay: 0.1 * i
          }}
        />
      </SliderPrimitive.Thumb>
    ))}
  </SliderPrimitive.Root>
));

CustomSlider.displayName = SliderPrimitive.Root.displayName;

export { CustomSlider }; 