"use client";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
interface Props {
  children: React.ReactNode;
}

export default function GuestLayout({ children }: Props) {
  return (
    <div className="mx-auto flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
