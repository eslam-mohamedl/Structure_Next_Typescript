"use client"; // Client Component

interface SidebarProps {
  user: {
    name: string;
    role: string;
    [key: string]: unknown; // لو عندك أي بيانات إضافية
  };
}

export default function Sidebar({ user }: SidebarProps) {
  return (
    <aside className="sidebar">
      <p>Welcome, {user.name}</p>
      {user.role === "ADMIN" && <p>Admin Panel</p>}
    </aside>
  );
}
