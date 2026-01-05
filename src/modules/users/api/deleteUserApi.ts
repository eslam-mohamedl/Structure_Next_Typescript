import apiClient from "@/services/ApiClient";

export function deleteUser(id: number) {
  return apiClient.delete(`/users/${id}`);
}
