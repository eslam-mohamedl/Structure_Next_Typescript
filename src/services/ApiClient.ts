// services/apiClient.ts
import axiosInstance from "./AxiosConfig";
import { mapApiError } from "@/core/errors/errorMapper";

class ApiClient {
  async get<T, P extends Record<string, unknown> = Record<string, never>>(
    url: string,
    params?: P
  ): Promise<T> {
    try {
      const res = await axiosInstance.get<T>(url, { params });
      return res.data;
    } catch (error) {
      throw mapApiError(error);
    }
  }

  async post<T, D = unknown>(url: string, data?: D): Promise<T> {
    try {
      const res = await axiosInstance.post<T>(url, data);
      return res.data;
    } catch (error) {
      throw mapApiError(error);
    }
  }

  async put<T, D = unknown>(url: string, data?: D): Promise<T> {
    try {
      const res = await axiosInstance.put<T>(url, data);
      return res.data;
    } catch (error) {
      throw mapApiError(error);
    }
  }

  async delete<T>(url: string): Promise<T> {
    try {
      const res = await axiosInstance.delete<T>(url);
      return res.data;
    } catch (error) {
      throw mapApiError(error);
    }
  }
}
const apiClient = new ApiClient();
export default apiClient;
