import React from "react";
import ErrorState from "../ui-states/ErrorState";
import { ApiError } from "../errors/ApiError";
import { errorMessages } from "../errors/errorMessages";

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  error: ApiError | null;
}

export class QueryErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: ApiError) {
    return { error };
  }

  componentDidCatch(error: ApiError) {
    console.error("Query Error:", error);
    // TODO: log to monitoring system
  }

  handleRetry = () => {
    this.setState({ error: null });
  };

  render() {
    const { error } = this.state;

    if (error) {
      return (
        <ErrorState
          message={errorMessages[error.type] || error.message}
          onRetry={this.handleRetry}
        />
      );
    }

    return this.props.children;
  }
}
