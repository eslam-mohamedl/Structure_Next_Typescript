"use client";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function ButtonLanguages() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("languages");

  const pathParts = pathname.split("/");
  const currentLocale = pathParts[1] === "ar" ? "ar" : "en";

  const toggleLang = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";

    let newPath = "";
    if (["en", "ar"].includes(pathParts[1])) {
      pathParts[1] = newLocale;
      newPath = pathParts.join("/");
    } else {
      newPath = `/${newLocale}${pathname}`;
    }

    router.push(newPath);
    router.refresh();
  };

  return (
    <button
      onClick={toggleLang}
      className="bg-primary hover:bg-bg-alt fixed right-6 bottom-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full text-sm font-medium text-white shadow-md transition-all duration-200 hover:shadow-lg dark:bg-white"
      title={t("change_language")}
    >
      {t("lang")}
    </button>
  );
}
