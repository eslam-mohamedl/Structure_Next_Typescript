"use client";
import Sidebar from "@/components/organisms/Sidebar";
import TopBar from "@/modules/auth/components/TopBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Top Bar */}
        <TopBar />

        {/* Page Content */}
        <main className="ds-bg flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
