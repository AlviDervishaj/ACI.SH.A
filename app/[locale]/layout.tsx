import { Navigation } from "@/components/_layout/Navigation";
import { Providers } from "@/components/_layout/providers";
import { Footer } from "@/components/_layout/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { Metadata, Viewport } from "next";
import { fontSans } from "@/config/fonts";
import "@/styles/globals.css";
import clsx from "clsx";

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
    <html lang={locale} className="w-full h-fit overflow-x-hidden relative">
      <head />
      <body
        className={clsx(
          "w-full min-h-dvh font-sans antialiased",
          fontSans.variable,
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers locale={locale} themeProps={{ attribute: "class", defaultTheme: "light" }}>
            <div className="relative flex flex-col min-h-dvh">
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
