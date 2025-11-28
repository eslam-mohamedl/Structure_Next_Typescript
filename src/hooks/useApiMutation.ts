import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

export function useApiMutation<TPayload, TResponse>(
  apiFn: (payload: TPayload) => Promise<TResponse>,
  options?: UseMutationOptions<TResponse, Error, TPayload>
) {
  return useMutation<TResponse, Error, TPayload>({
    mutationFn: apiFn,
    ...options,
  });
}
