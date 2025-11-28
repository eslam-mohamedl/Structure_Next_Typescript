"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "../../../public/assets/icons/icons";

export function ThemeToggle() {
  const isClient = typeof window !== "undefined";

  const { theme, setTheme } = useTheme();

  if (!isClient) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`relative flex h-11 w-21 cursor-pointer items-center rounded-full p-1 transition-colors duration-500 md:h-9 md:w-18 ${
        theme === "dark" ? "bg-primary" : "bg-gray-300"
      } shadow-md hover:scale-105`}
      aria-label="Toggle Theme"
    >
      <span
        className={`absolute top-2.4 left-1.5 h-8 w-8 transform rounded-full bg-white transition-transform duration-500 md:left-1 md:h-7 md:w-7 ${
          theme === "dark"
            ? "translate-x-9 bg-gray-900"
            : "translate-x-0 bg-light"
        }`}
      />

      <span
        className={`absolute left-2 transform text-xs text-gray-200 transition-transform duration-500 md:left-1 ${
          theme === "dark"
            ? "translate-x-10 md:translate-x-10"
            : "translate-x-1 md:translate-x-0 bg-light"
        }`}
      >
        {theme === "dark" ? (
          <Moon className="text-primary" />
        ) : (
          <Sun className="text-primary ml-0 md:ml-1" size={16} />
        )}
      </span>
    </button>
  );
}
