import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { AuthState } from "./types";
import { createAuthSlice } from "./slices/createAuthSlice";
export const useAuthStore = create<AuthState>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        user: state.user,
      }),
    }
  )
);
