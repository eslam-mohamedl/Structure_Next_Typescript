import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

export default function AuthInitializer({ children }: { children: React.ReactNode }) {
  const { fetchUserProfile } = useAuth();

  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  return <>{children}</>;
}
