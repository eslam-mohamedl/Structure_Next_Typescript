"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ThemeToggle } from "../atoms/ButtonTheme";
import { ListMinus, X, ChevronDown } from "lucide-react";
import { Routes } from "@/utils/Data";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Button from "../atoms/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const t = useTranslations("navList");
  const toggleNavbar = () => setOpen(!open);
  const closeNavbar = () => setOpen(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (hash: string) => {
    const element = document.getElementById(hash);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

 const handleSectionClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault(); // Always prevent the default <a> tag click
    closeNavbar();
    setDropdownOpen(false);
    
    const hash = path.split("#")[1]; // e.g., "offers"
    if (!hash) return; // Exit if there's no hash

    // Check if we're already on the home page
    const isOnHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;
    
    if (isOnHomePage) {
      // Already on home page, just scroll smoothly
      // The 100ms timeout gives the UI time to close the navbar
      setTimeout(() => scrollToSection(hash), 100);
    } else {
      // NOT on home page. 
      // Navigate to the home page *with the hash*.
      // The useEffect below will automatically handle the scrolling.
      router.push(`/${locale}#${hash}`);
    }
  };

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll as EventListener);
  }, []);


  // Handle hash navigation on page load
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1);
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            const navbarHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
              top: Math.max(0, offsetPosition),
              behavior: "smooth",
            });
          }
        }, 100);
      }
    };

    // Handle initial hash
    handleHashNavigation();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashNavigation);
    return () => window.removeEventListener("hashchange", handleHashNavigation);
  }, [pathname]); // <-- *** THIS IS THE FIX ***

  // Separate landing page sections from routing pages
  const landingSections = Routes.filter(item => item.isSection || item.path === "/");
  const routingPages = Routes.filter(item => !item.isSection && item.path !== "/");

  return (
    <div
      id="navbar"
      className={`bg-light-primary dark:bg-dark-secondary dark:border-dark-secondary fixed top-0 z-50 flex h-[80px] w-full items-center justify-between border-b border-neutral-200 px-4 transition-all duration-300 ease-in-out sm:px-10 md:px-25 ${isScrolled ? "bg-light-primary border-b border-sky-200" : "bg-light-primary"}`}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-2 pr-0">
        <Link href={`/${locale}`} className="flex items-center gap-x-2 text-lg font-semibold">
          <Image src="/assets/images/logo1.png" alt="logo" width={50} height={50} />
        </Link>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleNavbar}
          className="text-dark-secondary dark:text-light-secondary focus:outline"
        >
          <ListMinus className="bg-shadow-emerald-800" size={35} />
        </button>
      </div>

      {/* Navbar items and buttons */}
      <div
        className={`bg-light-primary dark:bg-dark-secondary fixed top-0 right-0 h-screen w-full flex-1 border-none shadow-lg transition-all duration-300 ease-in-out md:static md:h-auto md:w-auto md:shadow-none ${open ? "translate-x-0" : "translate-x-full"} z-60 md:translate-x-0`}
      >
        {/* Logo and close icon inside toggle menu */}
        <div className="flex w-full items-center justify-between p-4 md:hidden">
          <Link href={`/${locale}`} className="flex items-center gap-x-2 text-lg font-semibold">
            <Image src="/assets/images/logo1.png" alt="logo" width={70} height={70} />
          </Link>
          <div className="flex justify-end py-6 md:hidden">
            <button
              onClick={closeNavbar}
              className="text-dark-secondary dark:text-light-secondary focus:outline"
            >
              <X className="bg-shadow-emerald-800" size={50} />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-neutral-300 md:hidden dark:border-b-cyan-950"></div>

        {/* Navbar Items and buttons */}
        <div className="flex flex-1 flex-col items-center justify-between gap-6 p-6 md:flex-row md:p-0">
          {/* Navbar Items */}
          <ul className="text-dark mx-auto flex flex-col items-center gap-4 text-lg font-medium md:flex-row md:gap-3 md:text-base md:font-normal dark:text-white">
            {/* Landing page section links */}
            {landingSections.map(item => (
              <li
                key={item.id}
                className="mb-[25px] cursor-pointer text-3xl md:text-lg lg:mb-[0px]"
              >
                {item.path.includes("#") ? (
                  <a
                    href={`/${locale}${item.path}`}
                    onClick={(e) => handleSectionClick(e, item.path)}
                  >
                    {t(item.key)}
                  </a>
                ) : (
                  <Link
                    href={`/${locale}${item.path}`}
                    onClick={closeNavbar}
                  >
                    {t(item.key)}
                  </Link>
                )}
              </li>
            ))}

            {/* Dropdown menu for routing pages */}
            {routingPages.length > 0 && (
              <li
                className="group relative mb-[25px] text-3xl md:text-lg lg:mb-[0px]"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="flex cursor-pointer items-center gap-1">
                  <span>{locale === "ar" ? "المزيد" : "More"}</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </div>

                {/* Dropdown content */}
                {dropdownOpen && (
                  <div className={`absolute top-full ${locale === "ar" ? "right-0" : "left-0"} z-50 mt-0 w-48 pt-2`}>
                    <div className="dark:bg-dark-secondary overflo-whidden rounded-lg border border-neutral-200 bg-white shadow-lg dark:border-slate-700">
                      {routingPages.map(item => (
                        <Link
                          key={item.id}
                          href={`/${locale}${item.path}`}
                          onClick={() => {
                            setDropdownOpen(false);
                            closeNavbar();
                          }}
                          className="block px-4 py-3 text-base transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
                        >
                          {t(item.key)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            )}
          </ul>

          {/* Navbar buttons */}
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <ThemeToggle />
            <Link href={`/${locale}/sign-up`}>
              <Button variant="outline2" size="md">
                {t(`register`)}
              </Button>
            </Link>
            <Link href={`/${locale}/sign-in`}>
              <Button size="md">{t(`login`)}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}