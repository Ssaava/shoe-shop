import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { AuthState, ProductState } from "./types";
import { createAuthSlice } from "./slices/createAuthSlice";
import { createProductSlice } from "./slices/createProductSlice";
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

export const useProductStore = create<ProductState>()((...a) => ({
  ...createProductSlice(...a),
}));
