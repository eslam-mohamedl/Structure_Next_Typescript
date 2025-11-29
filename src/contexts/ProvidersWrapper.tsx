"use client";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import DirectionProvider from "@/contexts/DirectionProvider";
import ThemeProviderClient from "@/providers/ThemeProviderClient";
import { AppProviders } from "@/providers/AppProviders";

interface ProvidersWrapperProps {
  children: ReactNode;
  locale: string;
  messages: Record<string, string>;
}
export default function ProvidersWrapper({ children, locale, messages }: ProvidersWrapperProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProviderClient>
        <AppProviders>
          <DirectionProvider locale={locale}>{children}</DirectionProvider>
        </AppProviders>
      </ThemeProviderClient>
    </NextIntlClientProvider>
  );
}
