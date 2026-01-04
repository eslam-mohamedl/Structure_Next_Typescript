"use client"; // لازم يكون client component

import Cookies from "js-cookie";
import { ENV } from "@/config/env";
import { useRouter } from "next/navigation";

export function useLogOut() {
  const router = useRouter();

  return () => {
    // حذف التوكن من الكوكيز
    Cookies.remove(ENV.ACCESS_TOKEN_KEY, { path: "/" });

    // إعادة التوجيه للصفحة الرئيسية
    router.push("/");
  };
}
