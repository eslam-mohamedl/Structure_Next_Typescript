import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../atom/Button";
import Input from "../atom/Input";
import Text from "../atom/Text";
function Footer() {
  const { t } = useTranslation();
  return (
    <section className="bg-bg-alt">
      <div className="container p-15">
        <div className="header border-bg grid grid-cols-1 justify-between border-b-1 pb-15 md:grid-cols-3">
          <div className="md:col-span-2">
            <Link to="/" className="font-semibold md:text-2xl">
              <span className="text-primary text-3xl">Survey</span>
              <span className="text-3xl">Land</span>
            </Link>
            <p className="mt-3 w-[57%]">{t("footer.DescLogo")}</p>
          </div>
          <div className="flex md:col-span-1">
            <Input type="email" className="text-bg h-11" placeholder={t("footer.TextFrom")} />
            <Button size="md" className="rounded-2xl">
              {t("footer.TextBtn")}
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 py-12 md:grid-cols-4">
          <ul>
            <Link to="/">
              <li className="mb-1">{t("footer.nav1")}</li>
            </Link>
            <Link to="/templates">
              <li className="mb-1">{t("footer.nav2")}</li>
            </Link>
            <Link to="/pricing">
              <li className="mb-1">{t("footer.nav3")}</li>
            </Link>
            <Link to="/faqs">
              <li>{t("footer.nav4")}</li>
            </Link>
          </ul>

          <ul>
            <li className="mb-1">{t("footer.nav6")}</li>
            <li className="mb-1">{t("footer.nav7")}</li>
            <li className="mb-1">{t("footer.nav8")}</li>
            <li className="mb-1">{t("footer.nav9")}</li>
          </ul>
          <div>
            <Text variant="light" size="lg" className="font-normal">
              {t("footer.headerEmail")}
            </Text>
            <Text variant="light" size="lg" className="text-right font-normal" center={false}>
              {t("footer.TextEmail")}
            </Text>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
