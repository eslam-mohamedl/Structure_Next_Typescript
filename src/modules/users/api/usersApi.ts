import apiClient from "@/services/ApiClient";

export interface User {
  id: number;
  name: string;
  email: string;
}
// GET /users
export const getUsers = (): Promise<User[]> => {
  return apiClient.get<User[]>("/users");
};

// GET /users/:id
export const getUser = (id: number): Promise<User> => {
  return apiClient.get<User>(`/users/${id}`);
};
