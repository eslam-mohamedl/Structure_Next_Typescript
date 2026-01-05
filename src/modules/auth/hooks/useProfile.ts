import { getProfile } from "../api/apiProfile";
import { useApiQuery } from "@/hooks/useApiQuery";

export function useProfile() {
  return useApiQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    options: {
      staleTime: 1000 * 60 * 5, //cache 5 دقائق
    },
  });
}
