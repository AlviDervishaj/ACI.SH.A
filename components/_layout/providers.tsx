"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";
import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export interface ProvidersProps {
  children?: ReactNode;
  themeProps?: { attribute: "class"; defaultTheme: "light" };
}

export function Providers({ children, themeProps }: ProvidersProps) {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <ParallaxProvider>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </ParallaxProvider>
  );
}
