// useUsers.ts
import { useQuery } from "@tanstack/react-query";
import { getUsers, type User } from "../api/usersApi";

// Hook for fetching all users
export const useUsersQuery = () => {
  return useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: getUsers,
    retry: 1,
  });
};
