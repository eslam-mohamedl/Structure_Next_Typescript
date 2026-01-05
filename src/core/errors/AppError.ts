export type AppErrorType =
  | "VALIDATION"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "NETWORK"
  | "SERVER"
  | "UNKNOWN";

interface AppErrorProps {
  message: string;
  type: AppErrorType;
  statusCode?: number;
  originalError?: Error;
}

export class AppError extends Error {
  type: AppErrorType;
  statusCode?: number;
  originalError?: Error;

  constructor(props: AppErrorProps) {
    super(props.message);
    this.type = props.type;
    this.statusCode = props.statusCode;
    this.originalError = props.originalError;
  }
}
