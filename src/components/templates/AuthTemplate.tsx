"use client";
import TopBar from "@/modules/auth/components/TopBar";
export default function AuthTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex-1">
        <TopBar />
        {children}
      </main>
    </>
  );
}
