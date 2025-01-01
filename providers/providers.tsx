"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";
import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { NextIntlClientProvider } from "next-intl";
import { ShoppingCartProvider } from "./ShoppingCartProvider";

export interface ProvidersProps {
  children?: ReactNode;
  messages: any;
  locale: string;
}

export function Providers({ children, messages, locale }: ProvidersProps) {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone={"Europe/Tirane"}
      formats={{
        number: {
          currency: {
            style: "currency",
            currency: "EUR",
          },
        },
      }}>
      <ParallaxProvider>
        <NextThemesProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
          <ShoppingCartProvider>
            {children}
          </ShoppingCartProvider>
        </NextThemesProvider>
      </ParallaxProvider>
    </NextIntlClientProvider>
  );
}
