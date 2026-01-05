import axios, { AxiosError } from "axios";
import { AppError } from "./AppError";
import type { ApiErrorResponse } from "@/types/api-error-response";

export function mapApiError(error: AxiosError<ApiErrorResponse> | Error): AppError {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    // 🌐 Network / CORS / Timeout
    if (!error.response) {
      return new AppError({
        message: "تعذر الاتصال بالخادم. تحقق من اتصال الإنترنت",
        type: "NETWORK",
        originalError: error,
      });
    }

    // من هنا فصاعدًا: response موجودة ✔
    const status = error.response.status;
    const data = error.response.data;

    // 🟡 Validation / Client errors
    if (status === 400 || status === 409 || status === 422) {
      return new AppError({
        message: getMessageFromResponse(data, "البيانات غير صحيحة او موجوده بالفعل"),
        type: "VALIDATION",
        statusCode: status,
        originalError: error,
      });
    }

    if (status === 401) {
      return new AppError({
        message: "يجب تسجيل الدخول",
        type: "UNAUTHORIZED",
        statusCode: status,
        originalError: error,
      });
    }

    if (status === 403) {
      return new AppError({
        message: "غير مسموح لك",
        type: "FORBIDDEN",
        statusCode: status,
        originalError: error,
      });
    }

    if (status === 404) {
      return new AppError({
        message: "العنصر غير موجود",
        type: "NOT_FOUND",
        statusCode: status,
        originalError: error,
      });
    }

    // 🔴 Server errors
    if (status >= 500) {
      return new AppError({
        message: "خطأ في السيرفر",
        type: "SERVER",
        statusCode: status,
        originalError: error,
      });
    }
  }

  // Runtime / logic errors
  return new AppError({
    message: error.message,
    type: "UNKNOWN",
    originalError: error,
  });
}

function getMessageFromResponse(data: ApiErrorResponse | undefined, fallback: string): string {
  if (!data) return fallback;
  if (data.message) return data.message;
  if (data.error) return data.error;
  return fallback;
}
