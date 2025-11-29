"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ListMinus, X, ChevronDown } from "lucide-react";
import { Routes } from "@/routes/routes";
import Button from "../atoms/Button";
import ButtonTheme from "@/components/atoms/ButtonTheme";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("routes");
  const toggleNavbar = () => setOpen(prev => !prev);
  const closeNavbar = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Separate main and secondary pages
  const mainPageSections = Routes.filter(r => r.id <= 5);
  const routingPages = Routes.filter(r => r.id > 5);

  return (
    <nav
      className={`px-md fixed top-0 z-50 h-[80px] w-full backdrop-blur-xl transition-all duration-100 ease-in-out ${
        isScrolled
          ? "bg-bg-alt bg-bg/30 bg-dark:bg-alt shadow-md backdrop-blur-xl"
          : "bg-bg bg-transparent shadow-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 sm:px-10 md:px-0">
        {/* Logo */}
        <Link href={`/${locale}`} className="text-4xl font-bold md:text-2xl">
          <span className="text-primary">Survey</span> <span className="text-bg">Land</span>
        </Link>

        {/* Desktop Links */}
        <ul className="text-dark dark:text-light hidden items-center gap-4 text-base font-medium md:flex">
          {mainPageSections.map(item => (
            <li key={item.id}>
              <Link
                href={`/${locale}${item.path}`}
                className="text-dark dark:text-light active:text-primary focus:text-primary relative"
              >
                {t(item.key)}
                <span></span>
              </Link>
            </li>
          ))}

          {/* Dropdown */}
          <li className="relative">
            {dropdownOpen && (
              <div className="bg-bg dark:bg-dark-secondary absolute top-full left-0 mt-2 w-48 overflow-hidden rounded-md shadow-lg">
                {routingPages.map(item => (
                  <Link
                    key={item.id}
                    href={`/${locale}${item.path}`}
                    onClick={closeNavbar}
                    className="block px-4 py-2 text-base transition-colors active:bg-gray-200 dark:active:bg-gray-700"
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <ButtonTheme />
          <Link href={`/${locale}/sign-in`}>
            <Button size="lg" variant="primary">
              {t("btn")}
            </Button>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-dark dark:text-light">
            <ListMinus size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`bg-bg-alt transition-translate fixed top-0 right-0 z-40 h-screen w-full duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-bg flex items-center justify-between px-4 py-4">
          <Link href={`/${locale}`} className="text-4xl font-bold md:text-2xl">
            <span className="text-primary">Survey</span> <span className="text-bg">Land</span>
          </Link>
          <button onClick={closeNavbar} className="text-dark dark:text-light">
            <X size={45} />
          </button>
        </div>

        <ul className="text-dark dark:text-light mt-15 flex flex-col items-center gap-6 px-4 text-lg font-medium">
          {mainPageSections.map(item => (
            <li key={item.id}>
              <Link
                href={`/${locale}${item.path}`}
                onClick={closeNavbar}
                className="active:text-primary focus:text-primary text-3xl md:text-2xl"
              >
                {t(item.key)}
              </Link>
            </li>
          ))}

          {/* Dropdown Mobile */}
          <li className="w-full">
            {dropdownOpen && (
              <div className="mt-2 ml-4 flex flex-col gap-2">
                {routingPages.map(item => (
                  <Link
                    key={item.id}
                    href={`/${locale}${item.path}`}
                    onClick={closeNavbar}
                    className="active:text-primary focus:text-primary my-2 flex cursor-pointer items-center justify-center text-3xl md:text-2xl"
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li className="mt-6 flex w-full flex-col items-center gap-4">
            <ButtonTheme />
            <Link href={`/${locale}/sign-in`}>
              <Button
                className="bg-primary rounded-md px-4 py-2 text-white transition active:opacity-90"
                size="md"
                variant="primary"
              >
                {t("btn")}
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
