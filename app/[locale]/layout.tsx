// Next Stuff
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Suspense } from "react";
// Components

import { NavigationUI as Navigation } from "@/components/_layout/Navigation";
import { Footer } from "@/components/_layout/Footer";
import { Providers } from "@/providers/providers";
import { Toaster } from "@/components/ui/sonner";
// Configs
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { routing } from "@/i18n/routing";

// Styles
import "@/styles/globals.css";

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

export async function generateStaticParams() {
  // Define your supported locales
  const locales = ["en", "al"]; // Replace with your actual locales

  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const { locale } = params;
  const { children } = props;

  if (!routing.locales.includes(locale as "en" | "al")) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html
      suppressHydrationWarning
      className="w-[100dvw] min-h-[100dvh] overflow-x-hidden relative"
      lang={locale}
    >
      <head>
        <HeadData />
      </head>
      <body
        suppressHydrationWarning={true}
        className={clsx(
          "w-full min-h-dvh font-sans antialiased relative overflow-y-auto overflow-x-hidden",
          fontSans.variable,
        )}
      >
        <Providers locale={locale} messages={messages}>
          <div className="flex flex-col min-h-dvh max-h-fit overflow-y-auto">
            <Navigation />
            <main className="container mx-auto max-w-7xl grow overflow-y-visible pt-16">
              <Suspense fallback={<div>Loading ...</div>}>
                {children}
                <Toaster closeButton richColors />
              </Suspense>
            </main>
            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}

const HeadData = () => {
  return (
    <>
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
    </>
  );
};
