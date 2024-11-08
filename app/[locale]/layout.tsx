import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "@/providers/providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { routing } from "@/i18n/routing";
import "@/styles/globals.css";
import { Footer } from "@/components/_layout/Footer";
import { NavigationUI as Navigation } from "@/components/_layout/Navigation";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      suppressHydrationWarning
      className="w-[100dvw] min-h-[100dvh] overflow-x-hidden relative"
      lang={locale}
    >
      <head>
        <title>AÇI SH.A</title>
        <meta
          content="hMECQvVGV3rwsQXLIq_URy0kEhB586JR1fXHpcj8oF4"
          name="google-site-verification"
        />
        <meta content="AÇI SH.A" name="title" />
        <meta
          content="Distributor ekskluziv i Galp në Ballkan. Lubrifikante per Automjete e Industri - Vaj Motorri per makina"
          name="description"
        />
        <meta content="website" property="og:type" />
        <meta content="https://acilub.vercel.app/" property="og:url" />
        <meta content="AÇI SH.A" property="og:title" />
        <meta
          content="Distributor ekskluziv i Galp në Ballkan. Lubrifikante per Automjete e Industri - Vaj Motorri per makina"
          property="og:description"
        />
        <meta
          content="https://acilub.vercel.app/images/aci-logo-dark-demo.jpg"
          property="og:image"
        />
        <meta content="summary_large_image" property="twitter:card" />
        <meta content="https://acilub.vercel.app/" property="twitter:url" />
        <meta content="AÇI SH.A" property="twitter:title" />
        <meta
          content="Distributor ekskluziv i Galp në Ballkan. Lubrifikante per Automjete e Industri - Vaj Motorri per makina"
          property="twitter:description"
        />
        <meta
          content="https://acilub.vercel.app/images/aci-logo-dark-demo.jpg"
          property="twitter:image"
        />
      </head>
      <body
        className={clsx(
          "w-full min-h-dvh font-sans antialiased relative overflow-y-auto overflow-x-hidden",
          fontSans.variable,
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <div className="flex flex-col min-h-dvh overflow-y-auto">
              <Navigation />
              <main className="container mx-auto max-w-7xl flex-grow overflow-y-visible pt-16">
                {children}
              </main>
              <Footer />
            </div>
            <Analytics />
            <SpeedInsights />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
