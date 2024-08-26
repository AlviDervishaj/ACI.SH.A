import { tv } from "tailwind-variants";

export const footer = tv({
  base: "w-full h-full relative flex flex-col md:flex-row md:gap-0 gap-5 items-start content-center justify-evenly p-4",
  variants: {
    color: {
      violet: "bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]",
      yellow: "bg-gradient-to-b from-[#FF705B] to-[#FFB457]",
      blue: "bg-gradient-to-b from-[#5EA2EF] to-[#0072F5]",
      cyan: "bg-gradient-to-b from-[#00b7fa] to-[#01cfea]",
      green: "bg-gradient-to-b from-[#6FEE8D] to-[#17c964]",
      pink: "bg-gradient-to-b from-[#FF72E1] to-[#F54C7A]",
      orange: "bg-gradient-to-b from-orange-500 to-yellow-600/80",
      foreground: "bg-gradient-to-b dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
  },
  defaultVariants: {
    color: "orange",
  },

})

export const title = tv({
  base: "tracking-wide inline font-bold",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      orange: "from-[#FFA34B] via-[#FFA01A] to-[#FFD37D]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-7xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "orange",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

// export const subtitle = tv({
//   base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
//   variants: {
//     fullWidth: {
//       true: "!w-full",
//     },
//   },
//   defaultVariants: {
//     fullWidth: true,
//   },
// });
