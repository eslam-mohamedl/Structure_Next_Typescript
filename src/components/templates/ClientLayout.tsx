"use client";
import Sidebar from "@/components/organisms/Sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <main className="flex-1">{children}</main>
    </>
  );
}
