export type AppErrorType =
  | "NETWORK"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "VALIDATION"
  | "SERVER"
  | "UNKNOWN";

export class AppError extends Error {
  type: AppErrorType;
  statusCode?: number;
  originalError?: unknown;

  constructor(params: {
    message: string;
    type: AppErrorType;
    statusCode?: number;
    originalError?: unknown;
  }) {
    super(params.message);
    this.type = params.type;
    this.statusCode = params.statusCode;
    this.originalError = params.originalError;
  }
}
