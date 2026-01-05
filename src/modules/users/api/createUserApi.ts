import apiClient from "@/services/ApiClient";

export interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
}
export interface CreateUserResponse {
  accessToken: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

export function createUserApi(payload: CreateUserPayload): Promise<CreateUserResponse> {
  return apiClient.post<CreateUserResponse>("/users", payload);
}
