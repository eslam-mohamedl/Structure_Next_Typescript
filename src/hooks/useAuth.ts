import { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import { storage } from "@/utils/storage";
import { ROLES } from "@/utils/constants";
import apiClient from "@/services/ApiClient";
import { ENV } from "@/config/env";

export interface User {
  id: string;
  name: string;
  email: string;
  role: keyof typeof ROLES;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Login
  const login = useCallback(async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      const response = await apiClient.post<{ user: User; token: string }>(
        "/auth/login",
        credentials
      );

      const { user, token } = response;

      Cookies.set(ENV.ACCESS_TOKEN_KEY, token, { secure: true });
      storage.set("app_user", user);

      setUser(user);
      return user;
    } finally {
      setIsLoading(false);
    }
  }, []);

  //  Fetch Profile
  const fetchUserProfile = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await apiClient.get<{ user: User }>("/auth/me");
      const { user } = response;

      storage.set("app_user", user);
      setUser(user);
    } catch {
      Cookies.remove(ENV.ACCESS_TOKEN_KEY);
      storage.remove("app_user");
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  const logout = () => {
    Cookies.remove(ENV.ACCESS_TOKEN_KEY);
    storage.remove("app_user");
    setUser(null);
  };

  return {
    user,
    isLoading,
    login,
    logout,
    fetchUserProfile,
  };
};
