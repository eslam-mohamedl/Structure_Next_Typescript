"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Globe } from "../../../public/assets/icons/icons";

export default function LanguageButton() {
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
      className="text-md text-light flex h-12 w-full cursor-pointer items-center justify-center gap-3 pb-1 text-lg shadow-xl transition hover:bg-green-800"
    >
      <Globe className="text-light" size={24} />
      {locale === "en" ? "عربي" : "English"}
    </button>
  );
}
