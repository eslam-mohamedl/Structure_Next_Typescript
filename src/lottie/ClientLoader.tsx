"use client";

import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";

export default function ClientLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 ثانية أو اللي تحبه
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingPage />;

  return <>{children}</>;
}
