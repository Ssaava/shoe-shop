import { StateCreator } from "zustand";
import { AuthState } from "../types";
import { postData } from "@/lib/utils";
import { useAuthStore } from "../store";
import { jwtDecode } from "jwt-decode";
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
    const response = await postData<{
      email: string;
      password: string;
    }>(`${SERVER_URL}/api/auth/login`, data);
    console.log(response);

    console.log(jwtDecode(response.data.access_token));

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
