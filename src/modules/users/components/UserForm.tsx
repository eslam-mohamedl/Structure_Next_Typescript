"use client";
import { LoadingState, ErrorState } from "@/core/ui-states";
import useUserQuery from "../hooks/useUser";

interface props {
  id: number;
}

export function UserFrom({ id }: props) {
  const { data, error, isError, isPending, refetch } = useUserQuery(id);
  if (isPending) return <LoadingState />;
  if (isError) return <ErrorState message={error.message} onRetry={refetch} />;
  return (
    <div className="ds-container">
      <h2> one User </h2>
      <p>
        {data.name} - {data.email}
      </p>
    </div>
  );
}
