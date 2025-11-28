"use client";

import { useTheme as useNextTheme } from "next-themes";

export const useTheme = () => {
  const { theme, setTheme, systemTheme, resolvedTheme } = useNextTheme();

  return {
    theme, // "light" | "dark" | "system"
    setTheme, // function لتغيير الثيم
    systemTheme, // قيمة النظام الحالية (light أو dark)
    resolvedTheme, // القيمة الفعلية اللي مستخدمة الآن
  };
};
