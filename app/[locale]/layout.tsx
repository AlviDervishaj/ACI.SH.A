import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Footer } from "@/components/_layout/Footer";
import { Providers } from "@/components/_layout/providers";
import { Navigation } from "@/components/_layout/Navigation";

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
    <html className={"w-full h-fit overflow-x-hidden relative"} lang={locale}>
      <head />
      <body
        className={clsx(
          "w-full h-fit bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers locale={locale} themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col h-fit">
              <Navigation />
              <main className="container mx-auto max-w-7xl flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
