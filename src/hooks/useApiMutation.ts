"use client";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import apiClient from "@/services/ApiClient";
import { ApiError } from "../core/errors/ApiError";
import type { AxiosError } from "axios";

interface UseApiQueryProps<T, P extends Record<string, unknown> = Record<string, never>> {
  queryKey: readonly [...(string | number | P)[]];
  url: string;
  params?: P;
  options?: UseQueryOptions<T, ApiError>;
  enabled?: boolean;
}

export function useApiQuery<T, P extends Record<string, unknown> = Record<string, never>>({
  queryKey,
  url,
  params,
  options,
  enabled = true,
}: UseApiQueryProps<T, P>) {
  return useQuery<T, ApiError>({
    queryKey,
    retry: 1,
    queryFn: async () => {
      try {
        return await apiClient.get<T, P>(url, params);
      } catch (err: unknown) {
        if (err instanceof Error && "isAxiosError" in err && (err as AxiosError).isAxiosError) {
          const axiosError = err as AxiosError<{ message?: string }>;
          if (!axiosError.response) {
            throw new ApiError("تحقق من اتصالك بالإنترنت.", "NETWORK", 0);
          }

          const status = axiosError.response.status;
          let type: ApiError["type"] = "UNKNOWN";

          switch (status) {
            case 400:
              type = "VALIDATION";
              break;
            case 401:
              type = "UNAUTHORIZED";
              break;
            case 403:
              type = "FORBIDDEN";
              break;
            case 404:
              type = "NOT_FOUND";
              break;
            case 500:
              type = "SERVER";
              break;
          }

          throw new ApiError(
            axiosError.response.data?.message ?? axiosError.message,
            type,
            status,
            axiosError.response.data
          );
        }

        throw new ApiError(
          err instanceof Error ? err.message : "حدث خطأ غير متوقع",
          "UNKNOWN",
          500
        );
      }
    },
    enabled,
    ...options,
  });
}
