import React from "react";
import SearchBar from "../molecules/SearchBar";
import Button from "../atom/Button";
import { Sun, Moon } from "lucide-react";
import type { HeaderProps } from "../../types/api";
const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  return (
    <header className="bg-color-bg text-color-text flex items-center justify-between p-4 shadow-md">
      <SearchBar placeholder="Search..." />
      <div className="flex items-center gap-4">
        <Button onClick={toggleTheme}>{theme === "light" ? <Moon /> : <Sun />}</Button>
        <div className="h-10 w-10 rounded-full bg-gray-400"></div> {/* Avatar */}
      </div>
    </header>
  );
};

export default Header;
