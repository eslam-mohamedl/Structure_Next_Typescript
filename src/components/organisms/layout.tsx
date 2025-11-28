import React, { useState, useEffect } from "react";
import Header from "./Header";
import type { MainLayoutProps } from "../../types/api";
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="bg-color-bg text-color-text min-h-screen transition-colors duration-300">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default MainLayout;
