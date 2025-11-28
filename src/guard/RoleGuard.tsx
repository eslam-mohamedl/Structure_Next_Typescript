import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ROLES } from "../utils/constants";

export default function RoleGuard({ role }: { role: keyof typeof ROLES }) {
  const { user } = useAuth();
  return user?.role === role ? <Outlet /> : <Navigate to="/dashborad" replace />;
}
