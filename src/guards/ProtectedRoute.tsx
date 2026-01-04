"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TokenService } from "@/services/tokenService";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const token = TokenService.getToken();

    if (!token) {
      router.replace("/sign-in"); // زي Navigate to="/sign-in"
      setAuthorized(false);
    } else {
      setAuthorized(true);
    }
  }, [router]);

  // loading صغير قبل ما نعرف الحالة
  if (authorized === null) return null;

  // لو مفيش توكن، return null عشان redirect حصل بالفعل
  if (authorized === false) return null;

  // لو موجود توكن، خلي children يظهروا → زي Outlet
  return <>{children}</>;
}
