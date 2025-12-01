"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale(); // "en" أو "ar"

  const nextLocale = locale === "en" ? "ar" : "en";

  const handleClick = () => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={handleClick}
      className="bg-primary text-md fixed right-4 bottom-4 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full text-white shadow-xl transition hover:scale-104"
    >
      {locale.toUpperCase()}
    </button>
  );
}
