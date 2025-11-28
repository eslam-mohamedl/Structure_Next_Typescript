import axiosInstance from "./AxiosConfig";

class ApiClient {
  async get<T, P extends Record<string, unknown> = Record<string, never>>(url: string,params?: P): Promise<T> {
    const res = await axiosInstance.get<T>(url, { params });
    return res.data;
  }
 async post<T , D = unknown>(url: string, data?: D) : Promise<T>{
    const res = await axiosInstance.post<T>(url, data);
    return res.data;
  }
 async put<T , D = unknown>(url: string, data?: D): Promise<T> {
    const res = await axiosInstance.put<T>(url, data);
    return res.data;
  }
 async delete<T>(url: string): Promise<T> {
    const res = await axiosInstance.delete<T>(url);
    return res.data;
  }
}
const apiClient = new ApiClient();
export default apiClient;
