"use client";
import ButtonLanguages from "@/components/atoms/ButtonLangauges";
import TopBar from "@/modules/auth/components/TopBar";
export default function AuthTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex-1 pt-20">
        <TopBar />
        {children}
        <ButtonLanguages />
      </main>
    </>
  );
}
