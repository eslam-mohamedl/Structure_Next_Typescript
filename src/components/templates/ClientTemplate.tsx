"use client";
import Sidebar from "@/components/organisms/Sidebar";

export default function ClientTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar user={{ name: "John Doe", role: "ADMIN" }} />
      <main className="flex-1">{children}</main>
    </>
  );
}
