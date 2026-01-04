import NavLink from "../../atoms/navbar/NavLink";
import NavDropdown from "./NavDropdown";
import UserMenu from "./UserMenu";
import Link from "next/link";
import { useLocale } from "next-intl";
import { cn } from "@/lib/cn";
interface RouteItem {
  id: number;
  path: string;
  key: string;
}

interface MobileNavLinksProps {
  mainRoutes: RouteItem[];
  dropdownRoutes: RouteItem[];
  dropdownOpen: boolean;
  toggleDropdown: () => void;
  closeNavbar: () => void;
}

export default function MobileNavLinks({
  mainRoutes,
  dropdownRoutes,
  dropdownOpen,
  toggleDropdown,
  closeNavbar,
}: MobileNavLinksProps) {
  const locale = useLocale(); // "en" | "ar"
  return (
    <ul className="text-dark dark:text-light mt-4 flex flex-col items-center gap-2 px-2 text-lg font-medium">
      {mainRoutes.map(item => (
        <li key={item.id}>
          <NavLink to={item.path} onClick={closeNavbar} className="text-2xl md:text-2xl">
            {item.key}
          </NavLink>
        </li>
      ))}

      <NavDropdown
        routes={dropdownRoutes}
        open={dropdownOpen}
        toggle={toggleDropdown}
        onItemClick={closeNavbar}
        isMobile
      />

      <li className="-mt-2 flex w-full flex-col items-center gap-4">
        <UserMenu className={cn("absolute", locale === "en" ? "-left-20" : "-right-20")} />
        <Link href="/sign-in"></Link>
      </li>
    </ul>
  );
}
