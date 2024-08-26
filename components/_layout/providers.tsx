"use client";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ParallaxProvider } from "react-scroll-parallax";
import { ReactNode, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { useScroll } from "framer-motion";

export interface ProvidersProps {
  children: ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis()
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <NextUIProvider navigate={router.push}>
      <ParallaxProvider>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </ParallaxProvider>
    </NextUIProvider>
  );
}
