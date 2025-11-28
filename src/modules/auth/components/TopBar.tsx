"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { ThemeToggle } from "@/components/atoms/ButtonTheme";
import Button from "@/components/atoms/Button";
import { useTranslations } from "next-intl";
export default function TopBar() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("topBar");
  const authPages = [`/${locale}/sign-in`, `/${locale}/sign-up`];
  const resetPages = [
    `/${locale}/forget-password`,
    `/${locale}/new-password`,
    `/${locale}/reset-password`,
    `/${locale}/otp`,
    `/${locale}/done`,
  ];

  return (
    <nav
      className={`bg-bg dark:bg-dark-primary fixed top-0 z-50 w-full py-2 shadow-md transition-all duration-300 ease-in-out dark:opacity-90`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`}>
          <Image src="/assets/images/logo1.png" alt="logo" width={50} height={50} />
        </Link>

        {/* Conditional content */}
        {authPages.includes(pathname) && (
          <div className="flex flex-row items-center justify-between gap-2">
            <ThemeToggle />
            <Link href={`/${locale}/sign-up`}>
              <p className="text-bg my-1 cursor-pointer">
                {t("item1")}
                <span className="text-bg"> {t("item2")}</span>
              </p>
            </Link>
          </div>
        )}

        {resetPages.includes(pathname) && (
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href={`/${locale}/sign-up`}>
              {" "}
              <Button variant="outline3" size="md">
                {t("register")}
              </Button>
            </Link>
            <Link href={`/${locale}/sign-in`}>
              <Button size="md"> {t("login")}</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
