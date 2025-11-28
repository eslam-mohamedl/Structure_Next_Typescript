import { redirect } from "next/navigation";
import { getUser } from "@/lib/getUser";
import { cookies } from "next/headers";
import { ENV } from "@/config/env";

export async function RequireAuth() {
  if (ENV.DEV_MODE) {
    return { name: "Dev User", role: "ADMIN" }; // bypass
  }
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
  const user = await getUser();

  if (!user) redirect(`/${locale}/sign-in`);

  return user;
}
