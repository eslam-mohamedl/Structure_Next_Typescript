"use client";
import { LoadingState, ErrorState, EmptyState } from "@/core/ui-states";
import { useUsersQuery } from "../hooks/useUsers";

export const UserList = () => {
  const { data, isError, error, refetch, isPending } = useUsersQuery();
  if (isPending) return <LoadingState />;
  if (isError) return <ErrorState message={error.message} onRetry={refetch} />;
  if (!data || data.length === 0) return <EmptyState />;

  return (
    <div className="ds-container">
      <h2>Users List</h2>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
