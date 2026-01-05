// useUsers.ts
import { getUsers, type UserResponse } from "../api/usersApi";
import { useApiQuery } from "@/hooks/useApiQuery";

// Hook for fetching all users
export const useUsersQuery = () => {
  return useApiQuery<UserResponse[]>({
    queryKey: ["users"], // queryKey
    queryFn: getUsers, // API function
    options: { retry: 1 }, // optional options
  });
};
