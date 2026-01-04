// "use client";
// import LoadingState from "../../../core/ui-states/LoadingState";
// import NetworkState from "../../../core/ui-states/NetworkState";
// import ErrorState from "../../../core/ui-states/ErrorState";
// import EmptyState from "../../../core/ui-states/EmptyState";
// import { useUsersQuery } from "../hooks/useUsers";
// import ErrorTester from "./Test";
// export const UserList = () => {
//   const { data, error, status, refetch } = useUsersQuery();

//   if (status === "pending") return <LoadingState />;

//   if (status === "error") {
//     // مثال: لو الرسالة تحتوي على Network Error
//     if ((error as Error).message.toLowerCase().includes("network")) {
//       return <NetworkState onRetry={refetch} />;
//     }

//     return <ErrorState message={(error as Error).message} onRetry={refetch} />;
//   }

//   if (!data || data.length === 0) return <EmptyState />;

//   return (
//     <div>
//       <h2>Users List</h2>
//       <ErrorTester />
//       <ul>
//         {data.map(user => (
//           <li key={user.id}>
//             {user.name} — {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
