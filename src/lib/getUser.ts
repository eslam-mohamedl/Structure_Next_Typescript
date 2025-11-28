import { cookies } from "next/headers";
import axiosInstance from "@/services/AxiosConfig";
import { ENV } from "@/config/env";

export async function getUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ENV.ACCESS_TOKEN_KEY)?.value;
  if (!token) return null;

  try {
    const res = await axiosInstance.get("/auth/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.data?.data; // عدلها لو API مختلف
  } catch {
    return null;
  }
}
