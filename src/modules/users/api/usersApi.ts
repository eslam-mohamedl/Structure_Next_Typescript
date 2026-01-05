import apiClient from "@/services/ApiClient";

export interface UserResponse {
  id: number;
  name: string;
  email: string;
  password: string;
}

// GET /users
export function getUsers(): Promise<UserResponse[]> {
  return apiClient.get<UserResponse[]>("/users");
}

// // GET /users/:id
// export const getUser = (id: number): Promise<User> => {
//   return apiClient.get<User>(`/users/${id}`);
// };
