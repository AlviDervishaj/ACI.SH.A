"use client";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";
import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export interface ProvidersProps {
  children?: ReactNode;
  locale: string;
  themeProps?: { attribute: "class", defaultTheme: "light" };
}

export function Providers({ children, locale, themeProps }: ProvidersProps) {
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
    <NextUIProvider locale={locale} navigate={router.push}>
      <ParallaxProvider>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </ParallaxProvider>
    </NextUIProvider>
  );
}
