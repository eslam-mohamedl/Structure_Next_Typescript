"use client";

import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { ApiError } from "@/core/errors/ApiError";

interface UseApiQueryProps<T> {
  queryKey: readonly unknown[];
  queryFn: () => Promise<T>;
  options?: Omit<UseQueryOptions<T, ApiError, T, readonly unknown[]>, "queryKey" | "queryFn">;
}

export function useApiQuery<T>({ queryKey, queryFn, options }: UseApiQueryProps<T>) {
  return useQuery<T, ApiError>({
    queryKey,
    queryFn: async () => {
      try {
        return await queryFn();
      } catch (error) {
        throw error;
      }
    },
    ...options,
  });
}
