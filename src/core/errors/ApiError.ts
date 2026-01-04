export type ApiErrorType =
  | "NETWORK"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "VALIDATION"
  | "SERVER"
  | "UNKNOWN";

export class ApiError extends Error {
  statusCode: number;
  type: ApiErrorType;
  details?: unknown;

  constructor(
    message: string,
    type: ApiErrorType = "UNKNOWN",
    statusCode = 500,
    details?: unknown
  ) {
    super(message);
    this.name = "ApiError";
    this.type = type;
    this.statusCode = statusCode;
    this.details = details;
  }
}
