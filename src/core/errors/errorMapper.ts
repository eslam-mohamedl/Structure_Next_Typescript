import { AxiosError } from "axios";
import { AppError } from "./AppError";

export function mapApiError(error: unknown): AppError {
  if (error instanceof AxiosError) {
    const status = error.response?.status;

    if (!error.response) {
      return new AppError({
        message: "Network error, please check your connection",
        type: "NETWORK",
        originalError: error,
      });
    }

    if (status === 401) {
      return new AppError({
        message: "Unauthorized access",
        type: "UNAUTHORIZED",
        statusCode: 401,
        originalError: error,
      });
    }

    if (status === 403) {
      return new AppError({
        message: "Access denied",
        type: "FORBIDDEN",
        statusCode: 403,
        originalError: error,
      });
    }

    if (status === 422) {
      return new AppError({
        message: "Validation error",
        type: "VALIDATION",
        statusCode: 422,
        originalError: error,
      });
    }

    return new AppError({
      message: "Server error",
      type: "SERVER",
      statusCode: status,
      originalError: error,
    });
  }

  return new AppError({
    message: "Unexpected error",
    type: "UNKNOWN",
    originalError: error,
  });
}
