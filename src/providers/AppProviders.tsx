"use client";
import { ReactNode } from "react";
import ThemeProvider from "./ThemeProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import ErrorFallback from "@/core/boundaries/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import AuthInitializer from "@/guards/AuthInitializer";

interface Props {
  children: ReactNode;
}

export default function AppProviders({ children }: Props) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ReactQueryProvider>
        <ThemeProvider>
          <AuthInitializer>{children}</AuthInitializer>
        </ThemeProvider>
      </ReactQueryProvider>
    </ErrorBoundary>
  );
}
