import { postData } from "@/lib/utils";
import { AxiosResponse } from "axios";
import { StateCreator } from "zustand";
import { useAuthStore } from "../store";
import { AuthState } from "../types";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const initialState = {
  authenticating: false,
  refresh_token: "",
  user: null,
};

export const createAuthSlice: StateCreator<AuthState, [], [], AuthState> = (
  set
) => ({
  ...initialState,

  login: async (data: { email: string; password: string }) => {
    const response = (await postData<{
      email: string;
      password: string;
    }>(`${SERVER_URL}/api/auth/login`, data)) as AxiosResponse;
    console.log(response);
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
  refreshToken: async (refreshToken: string) => {
    console.log(refreshToken);
  },
  resendVerification: async (email: string) => {
    console.log(email);
  },
  logout: () => {
    useAuthStore.persist.clearStorage();
    set({ ...initialState });
  },
});
