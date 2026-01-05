// src/hooks/useApiMutation.ts
"use client";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { ApiError } from "@/core/errors/ApiError";

export function useApiMutation<TPayload, TResponse>(
  mutationFn: (payload: TPayload) => Promise<TResponse>,
  options?: Omit<UseMutationOptions<TResponse, ApiError, TPayload>, "mutationFn">
) {
  return useMutation<TResponse, ApiError, TPayload>({
    mutationFn: async (payload: TPayload) => {
      try {
        return await mutationFn(payload);
      } catch (error: unknown) {
        throw error;
      }
    },
    ...options,
  });
}
