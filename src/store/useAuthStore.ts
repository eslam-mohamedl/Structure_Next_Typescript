import { create } from "zustand";

interface AuthState {
  user: string | null;
  setUser: (user: string | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));



//  store استخدام 
// "use client";
// import { useAuthStore } from "@/store/useAuthStore";

// export default function Navbar() {
//   const { user, setUser, logout } = useAuthStore();

//   return (
//     <div className="p-4">
//       {user ? (
//         <>
//           <p>Welcome, {user}</p>
//           <button onClick={logout}>Logout</button>
//         </>
//       ) : (
//         <button onClick={() => setUser("Eslam")}>Login</button>
//       )}
//     </div>
//   );
// }


// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// interface AuthState {
//   user: string | null;
//   setUser: (user: string | null) => void;
//   logout: () => void;
// }

// export const useAuthStore = create<AuthState>()(
//   persist(
//     (set) => ({
//       user: null,
//       setUser: (user) => set({ user }),
//       logout: () => set({ user: null }),
//     }),
//     {
//       name: "auth-storage", // اسم المفتاح في localStorage
//     }
//   )
// );
