// src/hooks/useApiQuery.ts
import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";
import apiClient from "../services/ApiClient";

interface UseApiQueryProps<
  T,
  P extends Record<string, unknown> = Record<string, never>
> {
  queryKey: readonly [...(string | number | P)[]]; // key متنوع
  url: string;
  params?: P; // Query params اختياري
  options?: UseQueryOptions<T>; // React Query Options
  enabled?: boolean;
}

export function useApiQuery<
  T,
  P extends Record<string, unknown> = Record<string, never>
>({ queryKey, url, params, options, enabled = true }: UseApiQueryProps<T, P>) {
  return useQuery<T>({
    queryKey,
    queryFn: () => apiClient.get<T, P>(url, params),
    enabled,
    ...options,
  });
}
