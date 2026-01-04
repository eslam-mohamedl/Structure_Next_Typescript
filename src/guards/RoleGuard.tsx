"use client"; // لازم عشان useRouter

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TokenService } from "@/services/tokenService";
import { ROLES } from "@/utils/constants";

interface Props {
  role: keyof typeof ROLES;
  children: React.ReactNode;
}

export default function RoleGuard({ role, children }: Props) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const token = TokenService.getToken();

    if (!token) {
      router.replace("/sign-in");
      setAuthorized(false);
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (payload.role === role) {
        setAuthorized(true); // مسموح
      } else {
        router.replace("/dashboard"); // role مختلف
        setAuthorized(false);
      }
    } catch {
      router.replace("/sign-in"); // token مش صالح
      setAuthorized(false);
    }
  }, [router, role]);

  // قبل معرفة الحالة
  if (authorized === null) return null;

  // لو مرفوض → return null لأن redirect حصل بالفعل
  if (authorized === false) return null;

  // لو مسموح → children يظهروا
  return <>{children}</>;
}
