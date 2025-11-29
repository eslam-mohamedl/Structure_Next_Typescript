"use client";
import Sidebar from "@/components/organisms/Sidebar";
import ButtonLanguages from "@/components/atoms/ButtonLangauges";

export default function ClientTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar user={{ name: "John Doe", role: "ADMIN" }} />
      <main className="flex-1 pt-20">
        {children}
        <ButtonLanguages />
      </main>
    </>
  );
}
