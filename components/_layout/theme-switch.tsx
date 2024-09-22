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
          className="min-w-10"
          id="SUN_ICON"
          size="icon"
          variant="outline"
          onClick={() => setTheme("light")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] dark:rotate-0 dark:scale-100 transition-all -rotate-90 scale-0" />
          <span className="sr-only">Set theme to light mode.</span>
        </Button>
      ) : (
        <Button
          className="min-w-10"
          id="MOON_ICON"
          size="icon"
          variant="outline"
          onClick={() => setTheme("dark")}
        >
          <Moon className="absolute h-[1.2rem] w-[1.2rem] dark:rotate-90 dark:scale-0 transition-all rotate-0 scale-100" />
          <span className="sr-only">Set theme to dark mode.</span>
        </Button>
      )}
    </>
  );
}
