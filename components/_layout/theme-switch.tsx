"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeSwitch() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <Button
          className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 dark:text-gray-200 dark:hover:text-slate-900 dark:hover:bg-slate-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          id="SUN_ICON"
          size="icon"
          variant="ghost"
          onClick={() => setTheme("light")}
        >
          <Sun
            className="dark:rotate-0 dark:scale-100 transition-all -rotate-90 scale-0"
            size={24}
          />
          <span className="sr-only">Set theme to light mode.</span>
        </Button>
      ) : (
        <Button
          className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 dark:text-gray-200 dark:hover:text-slate-900 dark:hover:bg-slate-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          id="MOON_ICON"
          size="icon"
          variant="ghost"
          onClick={() => setTheme("dark")}
        >
          <Moon
            className="dark:rotate-90 dark:scale-0 transition-all rotate-0 scale-100"
            size={24}
          />
          <span className="sr-only">Set theme to dark mode.</span>
        </Button>
      )}
    </>
  );
}
