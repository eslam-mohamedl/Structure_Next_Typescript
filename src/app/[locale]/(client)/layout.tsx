"use client";
import Sidebar from "@/components/organisms/Sidebar";
import ButtonLanguages from "@/components/atoms/ButtonLangauges";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar user={{ name: "John Doe", role: "ADMIN" }} />
      <main>
        {children}
        <ButtonLanguages />
      </main>
    </>
  );
}
