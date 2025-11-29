import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { AppProviders } from "@/providers/AppProviders";
import DirectionProvider from "@/contexts/DirectionProvider";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  const supportedLocales = ["en", "ar"];
  if (!supportedLocales.includes(locale)) notFound();

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AppProviders>
        <DirectionProvider locale={locale}>{children}</DirectionProvider>
      </AppProviders>
    </NextIntlClientProvider>
  );
}
