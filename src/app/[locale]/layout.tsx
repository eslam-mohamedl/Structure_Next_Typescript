// src/app/[locale]/layout.tsx

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { AppProviders } from "@/providers/AppProviders";
import DirectionProvider from "@/contexts/DirectionProvider";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

// لو عايز تعمل pre-render للمسارات
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;

  const supportedLocales = ["en", "ar"];

  if (!supportedLocales.includes(locale)) {
    return notFound();
  }

  try {
    const messages = (await import(`@/messages/${locale}.json`)).default;

    return (
      <NextIntlClientProvider locale={locale} messages={messages}>
        <AppProviders>
          <DirectionProvider locale={locale}>{children}</DirectionProvider>
        </AppProviders>
      </NextIntlClientProvider>
    );
  } catch {
    return notFound();
  }
}
