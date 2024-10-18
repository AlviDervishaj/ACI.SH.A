import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import dynamic from "next/dynamic";

import { Providers } from "@/components/_layout/providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

const Footer = dynamic(
  () => import("@/components/_layout/Footer").then((mod) => mod.Footer),
  { ssr: false },
);
const Navigation = dynamic(() => import("@/components/_layout/Navigation/"), {
  ssr: false,
});

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

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
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
          <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
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
