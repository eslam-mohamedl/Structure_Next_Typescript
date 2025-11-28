// config/env.ts
export const ENV = {
  DEV_MODE: process.env.NEXT_PUBLIC_DEV_MODE === "true",
  API_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000",
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || "",
  APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0",
  APP_ENV: process.env.NEXT_PUBLIC_APP_ENV || "development",
  ACCESS_TOKEN_KEY: process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY || "accessToken",
  REFRESH_TOKEN_KEY: process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY || "refreshToken",
};
