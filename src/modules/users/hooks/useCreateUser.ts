import { useApiMutation } from "@/hooks/useApiMutation";
import { createUserApi, CreateUserPayload, CreateUserResponse } from "../api/createUserApi";

export function useCreateUser() {
  return useApiMutation<CreateUserPayload, CreateUserResponse>(createUserApi, {
    retry: 0,
  });
}
