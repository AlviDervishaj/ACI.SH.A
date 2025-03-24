import { tv } from "tailwind-variants";

export const header = tv({
  base: "tracking-wide inline font-bold text-center text-2xl lg:text-3xl leading-9 p-4 pl-0",
});

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
      base: "text-lg lg:text-xl",
      xs: "text-xl lg:text-2xl",
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
      class: "bg-clip-text text-transparent bg-linear-to-b",
    },
  ],
});

// export const subtitle = tv({
//   base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
//   variants: {
//     fullWidth: {
//       true: "w-full!",
//     },
//   },
//   defaultVariants: {
//     fullWidth: true,
//   },
// });

// Container and layout primitives
export const container = tv({
  base: "w-full py-8",
  variants: {
    size: {
      sm: "px-2 md:px-4 max-w-3xl",
      md: "px-4 md:px-6 max-w-5xl",
      lg: "px-4 md:px-6 lg:w-[53rem]",
      full: "px-4 md:px-6 max-w-full",
    },
    center: {
      true: "mx-auto",
    },
  },
  defaultVariants: {
    size: "md",
    center: true
  }
});

// Section layouts
export const section = tv({
  base: "w-full",
  variants: {
    grid: {
      1: "grid grid-cols-1 gap-4",
      2: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6",
      3: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8",
      4: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6",
    },
    spacing: {
      sm: "space-y-4",
      md: "space-y-6",
      lg: "space-y-9",
    },
    padding: {
      sm: "py-4 px-2",
      md: "py-6 px-4 md:px-6",
      lg: "py-8 px-4 md:px-8",
    }
  },
  defaultVariants: {
    spacing: "md",
    padding: "md"
  }
});

// Flex layouts
export const flex = tv({
  base: "flex",
  variants: {
    direction: {
      row: "flex-row",
      col: "flex-col",
      rowReverse: "flex-row-reverse",
      colReverse: "flex-col-reverse",
      rowResponsive: "flex-col md:flex-row",
      colResponsive: "flex-row md:flex-col",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap",
    },
    gap: {
      none: "gap-0",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    direction: "row",
    align: "center",
    justify: "start",
    wrap: false,
    gap: "md",
  },
});

// Card styling
export const card = tv({
  base: "flex flex-col rounded-lg transition-all duration-300",
  variants: {
    variant: {
      default: "bg-slate-100 dark:bg-slate-900/30 dark:backdrop-blur-sm",
      elevated: "bg-white shadow-md dark:bg-slate-800/40 dark:shadow-xl",
      outline: "bg-transparent border dark:border-slate-700",
    },
    hover: {
      grow: "hover:scale-105",
      shadow: "hover:shadow-xl dark:hover:shadow-xl",
      highlight: "hover:border-primary",
    },
    padding: {
      none: "p-0",
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
    },
    clickable: {
      true: "cursor-pointer",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "md",
  },
});

// Text styling
export const text = tv({
  base: "text-base",
  variants: {
    size: {
      xs: "text-xs md:text-sm",
      sm: "text-sm md:text-base",
      base: "text-base lg:text-lg",
      lg: "text-lg lg:text-xl xl:text-2xl",
      xl: "text-xl lg:text-2xl xl:text-3xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    tracking: {
      normal: "tracking-normal",
      wide: "tracking-wide",
      wider: "tracking-wider",
      widest: "tracking-widest",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    transform: {
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
      normal: "normal-case",
    },
    color: {
      primary: "text-foreground dark:text-slate-200",
      secondary: "text-slate-600 dark:text-slate-400",
      danger: "text-red-500 dark:text-red-300",
      success: "text-green-500 dark:text-green-400",
      accent: "text-orange-600/90 dark:text-orange-400",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "normal",
    tracking: "normal",
    align: "left",
    color: "primary",
  },
});

// Link styling
export const link = tv({
  base: "transition-colors duration-300 border-b border-b-transparent",
  variants: {
    variant: {
      default: "hover:border-b-slate-600 dark:hover:border-b-slate-400",
      primary: "hover:border-b-primary dark:hover:border-b-primary",
      accent: "hover:border-b-orange-600 dark:hover:border-b-orange-400",
    },
    size: {
      sm: "text-sm md:text-base",
      base: "text-base",
      lg: "text-lg",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "base",
    weight: "medium",
  },
});

// Button variants (to extend shadcn/ui buttons)
export const buttonCustom = tv({
  base: "",
  variants: {
    customVariant: {
      accent: "hover:border-orange-600 hover:bg-orange-500/60 transition-colors ease-in-out duration-200 active:bg-orange-500 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700/80 dark:border-slate-600 dark:hover:border-orange-400",
      dark: "dark:border-slate-600 dark:hover:bg-slate-800/50 dark:text-slate-200",
      neutral: "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100",
    },
  },
});
