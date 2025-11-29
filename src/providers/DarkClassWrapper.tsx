"use client";
import { useEffect } from "react";

export default function DarkClassWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const html = document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (prefersDark) {
      html.classList.add("dark"); // يفعل الثيم الداكن
    } else {
      html.classList.remove("dark"); // يضمن الوضع الفاتح
    }
  }, []);

  return <>{children}</>;
}
