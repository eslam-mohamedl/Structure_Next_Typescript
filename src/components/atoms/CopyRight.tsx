import Text from "./Text";
import { useTranslations } from "next-intl";
export default function CopyRight() {
  const t = useTranslations("footer");
  return (
    <div>
      <Text size="md" variant="white" className="py-6">
        {t("copyRight.text")}
      </Text>
    </div>
  );
}
