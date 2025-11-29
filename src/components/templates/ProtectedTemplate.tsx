import Sidebar from "@/components/organisms/Sidebar";
import ButtonLanguages from "@/components/atoms/ButtonLangauges";
import { RequireAuth } from "@/guards/requireAuth";
import { ENV } from "@/config/env";
export default async function ProtectedTemplate({ children }: { children: React.ReactNode }) {
  let user;
  if (ENV.DEV_MODE) {
    user = { name: "Dev User", role: "ADMIN" };
  } else {
    user = await RequireAuth();
  }
  return (
    <>
      <Sidebar user={user} />
      <main className="flex-1 pt-20">
        {children}
        <ButtonLanguages />
      </main>
    </>
  );
}
