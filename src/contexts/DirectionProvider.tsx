"use client";

import { useEffect, ReactNode } from "react";

interface DirectionProviderProps {
  locale: string;
  children: ReactNode;
}

export default function DirectionProvider({ locale, children }: DirectionProviderProps) {
  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.lang = locale;
  }, [locale]);

  return <>{children}</>;
}
