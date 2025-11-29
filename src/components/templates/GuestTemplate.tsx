"use client";
import Footer from "@/components/organisms/Footer";
import ButtonLanguages from "@/components/atoms/ButtonLangauges";
import Navbar from "@/components/organisms/Navbar";

interface Props {
  children: React.ReactNode;
}

export default function GuestTemplate({ children }: Props) {
  return (
    <div className="mx-auto flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {children}
        <ButtonLanguages />
      </main>
      <Footer />
    </div>
  );
}
