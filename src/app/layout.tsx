// app/layout.tsx
"use client";

import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLoader from "@/lottie/ClientLoader";
import ThemeProviderClient from "@/providers/ThemeProviderClient";
import { AppProviders } from "@/providers/AppProviders";
import DirectionProvider from "@/contexts/DirectionProvider";
import { NextIntlClientProvider } from "next-intl";
import messagesEn from "@/messages/en.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const locale = "en"; // ثابت
  const messages = messagesEn;

  return (
    <html lang={locale} dir="ltr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProviderClient>
            <AppProviders>
              <DirectionProvider locale={locale}>
                <ClientLoader>{children}</ClientLoader>
              </DirectionProvider>
            </AppProviders>
          </ThemeProviderClient>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
