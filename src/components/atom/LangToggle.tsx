import { useLanguage } from "../../hooks/useLanguage";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { toggleLanguage, language } = useLanguage();
  const { t } = useTranslation();

  return (
    <button
      onClick={toggleLanguage}
      className="bg-primary fixed right-6 bottom-6 h-14 w-14 cursor-pointer justify-center rounded-full text-sm font-medium shadow-md transition-all duration-200 hover:shadow-lg"
      title={t("change_language")}
    >
      {language === "ar" ? "EN" : "AR"}
    </button>
  );
}
