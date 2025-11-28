import { redirect } from "next/navigation";
import { getUser } from "@/lib/getUser";
import { ROLES } from "@/utils/constants";
import { cookies } from "next/headers";
import { ENV } from "@/config/env";

export async function requireRole(role: keyof typeof ROLES) {
  if (ENV.DEV_MODE) {
    return { name: "Dev User", role: "ADMIN" }; // bypass
  }
  const user = await getUser();
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";

  if (!user) redirect(`/${locale}/sign-in`);
  if (user.role !== role) redirect(`/${locale}/dashboard`);

  return user;
}
