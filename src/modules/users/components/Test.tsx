// "use client";
// import React, { useState } from "react";

// import { mapApiError } from "../../../core/errors/errorMapper";
// import NetworkState from "../../../core/ui-states/NetworkState";
// import ErrorState from "../../../core/ui-states/ErrorState";
// import LoadingState from "../../../core/ui-states/LoadingState";
// import EmptyState from "../../../core/ui-states/EmptyState";
// import { useFakeErrorQuery, type ErrorType } from "@/hooks/useFakeError";

// const ErrorTester = () => {
//   const [type, setType] = useState<ErrorType | null>(null);

//   const { data, error, status, refetch } = useFakeErrorQuery(type ?? "NETWORK");

//   const handleClick = (t: ErrorType) => setType(t);

//   if (!type)
//     return (
//       <div>
//         <h2>اختر نوع الخطأ لتجربته:</h2>
//         {["NETWORK", "UNAUTHORIZED", "FORBIDDEN", "VALIDATION", "SERVER", "UNKNOWN"].map(t => (
//           <button key={t} onClick={() => handleClick(t as ErrorType)} style={{ margin: 5 }}>
//             {t}
//           </button>
//         ))}
//       </div>
//     );

//   if (status === "pending") return <LoadingState />;

//   if (status === "error") {
//     const appError = mapApiError(error);
//     if (appError.type === "NETWORK") return <NetworkState onRetry={refetch} />;
//     return <ErrorState message={appError.message} onRetry={refetch} />;
//   }

//   if (!data) return <EmptyState />;

//   return <div>لا يوجد خطأ (Data: {JSON.stringify(data)})</div>;
// };

// export default ErrorTester;
