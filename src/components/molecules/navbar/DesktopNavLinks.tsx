import NavLink from "@/components/atoms/navbar/NavLink";
import NavDropdown from "./NavDropdown";

export interface NavRoute {
  id: number;
  path: string;
  key: string;
}
interface DesktopNavLinksProps {
  mainRoutes: NavRoute[];
  dropdownRoutes: NavRoute[];
  dropdownOpen: boolean;
  toggleDropdown: () => void;
  closeNavbar: () => void;
}
export default function DesktopNavLinks({
  mainRoutes,
  dropdownRoutes,
  dropdownOpen,
  toggleDropdown,
  closeNavbar,
}: DesktopNavLinksProps) {
  return (
    <ul className="text-light hidden items-center gap-6 text-base font-medium md:flex">
      {mainRoutes.map(item => (
        <li key={item.id}>
          <NavLink to={item.path}>{item.key}</NavLink>
        </li>
      ))}

      <NavDropdown
        routes={dropdownRoutes}
        open={dropdownOpen}
        toggle={toggleDropdown}
        onItemClick={closeNavbar}
      />
    </ul>
  );
}
