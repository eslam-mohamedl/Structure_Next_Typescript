"use client";
import ButtonLanguages from "@/components/atoms/ButtonLangauges";
import TopBar from "@/modules/auth/components/TopBar";
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <TopBar />
        {children}
        <ButtonLanguages />
      </main>
    </>
  );
}
