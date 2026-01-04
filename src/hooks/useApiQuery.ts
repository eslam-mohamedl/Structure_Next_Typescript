"use client";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { ApiError } from "../core/errors/ApiError";
import type { AxiosError } from "axios";

export function useApiMutation<TPayload, TResponse>(
  apiFn: (payload: TPayload) => Promise<TResponse>,
  options?: UseMutationOptions<TResponse, ApiError, TPayload>
) {
  return useMutation<TResponse, ApiError, TPayload>({
    mutationFn: async (payload: TPayload) => {
      try {
        return await apiFn(payload);
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
    ...options,
  });
}
