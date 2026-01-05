import { getUser, type UserResponse } from "../api/getUserApi";
import { useApiQuery } from "@/hooks/useApiQuery";

export default function useUser(id: number) {
  return useApiQuery<UserResponse>({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
    options: {
      retry: 1,
    },
  });
}
