"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "../../../public/assets/icons/icons";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`relative flex h-12 w-full cursor-pointer items-center justify-center rounded-sm shadow-md transition-colors duration-500 hover:bg-green-800`}
      aria-label="Toggle Theme"
    >
      {/* Optional icons */}
      <div className="flex items-center justify-center text-center">
        <span className="flex items-center justify-center px-3">
          {theme === "dark" ? (
            <Moon className="text-light" size={24} />
          ) : (
            <Sun className="text-light ml-0 md:ml-1 dark:text-amber-300" size={24} />
          )}
        </span>
        <span className="text-light ds-text-lg">Theme</span>
      </div>
    </button>
  );
}
