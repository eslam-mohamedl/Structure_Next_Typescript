import apiClient from "@/services/ApiClient";

export interface UserResponse {
  email: string;
  password: string;
  name: string;
  id: number;
}
export function getUser(id: number): Promise<UserResponse> {
  return apiClient.get<UserResponse>(`/users/${id}`);
}
