// // useFakeError.ts
// import { useQuery } from "@tanstack/react-query";
// import { AxiosError } from "axios";

// export type ErrorType =
//   | "NETWORK"
//   | "UNAUTHORIZED"
//   | "FORBIDDEN"
//   | "VALIDATION"
//   | "SERVER"
//   | "UNKNOWN";

// export const useFakeErrorQuery = (type: ErrorType) => {
//   return useQuery({
//     queryKey: ["fakeError", type],
//     queryFn: () => {
//       switch (type) {
//         case "NETWORK":
//           throw new AxiosError("Network Error"); // no response
//         case "UNAUTHORIZED":
//           throw new AxiosError("Unauthorized", undefined, undefined, undefined, {
//             status: 401,
//           } as any);
//         case "FORBIDDEN":
//           throw new AxiosError("Forbidden", undefined, undefined, undefined, {
//             status: 403,
//           } as any);
//         case "VALIDATION":
//           throw new AxiosError("Validation failed", undefined, undefined, undefined, {
//             status: 422,
//           } as any);
//         case "SERVER":
//           throw new AxiosError("Server failed", undefined, undefined, undefined, {
//             status: 500,
//           } as any);
//         case "UNKNOWN":
//           throw new Error("Some unknown error"); // مش Axios
//       }
//     },
//     retry: false,
//   });
// };
