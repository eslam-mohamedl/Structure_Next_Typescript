import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { AppProviders } from "@/providers/AppProviders";
import DirectionProvider from "@/contexts/DirectionProvider";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({ children, params }: Props) {
  // بدل استخدام params مباشرة
  const { locale } = await Promise.resolve(params);

  const supportedLocales = ["en", "ar"];
  if (!supportedLocales.includes(locale)) notFound();

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppProviders>
            <DirectionProvider locale={locale}>{children}</DirectionProvider>
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
