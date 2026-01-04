"use client";
import TopBar from "@/modules/auth/components/TopBar";
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex-1 pt-20">
        <TopBar />
        {children}
      </main>
    </>
  );
}
