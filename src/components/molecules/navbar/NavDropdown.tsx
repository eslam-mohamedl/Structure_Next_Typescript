import { ChevronDown } from "../../../../public/assets/icons/icons";
import NavLink from "@/components/atoms/navbar/NavLink";

interface RouteItem {
  id: number;
  path: string;
  key: string;
}

interface Props {
  routes: RouteItem[];
  open: boolean;
  toggle: () => void;
  onItemClick: () => void;
  isMobile?: boolean;
}

export default function NavDropdown({
  routes,
  open,
  toggle,
  onItemClick,
  isMobile = false,
}: Props) {
  return (
    <li className={isMobile ? "w-full" : "relative"}>
      <div
        onClick={toggle}
        className={`flex cursor-pointer items-center gap-1 transition ${
          isMobile
            ? "mb-5 justify-center rounded text-2xl active:bg-gray-200 md:text-2xl dark:active:bg-gray-700"
            : "active:text-primary focus:text-primary"
        }`}
      >
        Pages
        <ChevronDown className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </div>

      {open && (
        <div
          className={
            isMobile
              ? "ds-bg-alt ml-4 flex flex-col gap-2"
              : "ds-bg-alt absolute top-full left-0 mt-6 w-48 overflow-hidden rounded-md shadow-lg"
          }
        >
          {routes.map(item => (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={onItemClick}
              className={
                isMobile
                  ? "my-0 flex justify-center text-2xl md:text-2xl"
                  : "block px-4 py-2 text-base active:bg-gray-200 dark:active:bg-gray-700"
              }
            >
              {item.key}
            </NavLink>
          ))}
        </div>
      )}
    </li>
  );
}
