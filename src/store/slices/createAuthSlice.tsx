import { postData } from "@/lib/utils";
import { AxiosResponse } from "axios";
import { StateCreator } from "zustand";
import { useAuthStore, useProductStore } from "../store";
import { AuthState } from "../types";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const initialState = {
  authenticating: false,
  user: null,
  hasRefreshed: false,
  loading: false,
};

export const createAuthSlice: StateCreator<AuthState, [], [], AuthState> = (
  set,
  get
) => ({
  ...initialState,

  login: async (data: { email: string; password: string }) => {
    const response = (await postData<{
      email: string;
      password: string;
    }>(`${SERVER_URL}/api/auth/login`, data)) as AxiosResponse;
    set({ user: response.data.user });
    return response;
  },
  createAccount: async (data: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    contact?: string;
  }) => {
    const response = await postData<{
      firstname: string;
      lastname: string;
      email: string;
      password: string;
      contact?: string;
    }>(`${SERVER_URL}/api/auth/register`, data);

    return response;
  },
  refreshToken: async () => {
    const { hasRefreshed } = get();
    if (hasRefreshed) return;
    set({ hasRefreshed: true, loading: true });

    const response = (await postData(
      `${SERVER_URL}/api/auth/refresh-token`
    )) as AxiosResponse;
    await useProductStore.getState().getAllProducts();

    console.log("Refreshing token");
    console.log(response);
    if (response.status === 200) {
      set({ user: response.data.user });
    } else {
      set({ ...initialState });
    }
    set({ loading: false });
    return response;
  },
  resendVerification: async (email: string) => {
    console.log(email);
  },
  logout: async () => {
    useAuthStore.persist.clearStorage();
    const response = (await postData(
      `${SERVER_URL}/api/auth/logout`
    )) as AxiosResponse;
    if (response.status === 200) {
      set({ ...initialState });
      console.log("User logged out successfully");
    }
  },
});
