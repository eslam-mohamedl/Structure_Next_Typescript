"use client";

import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";

export default function ClientLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000); // 2 ثانية
    return () => clearTimeout(timer);
  }, []);

  return show ? <LoadingPage /> : null;
}
