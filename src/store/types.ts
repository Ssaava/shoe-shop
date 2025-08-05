/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AuthState {
  authenticating: boolean;
  refresh_token: string;
  user: {
    contact: string;
    email: string;
    firstname: string;
    isVerified: boolean;
    lastname: string;
    role: string;
  } | null;
  login: (data: { email: string; password: string }) => Promise<any>;
  createAccount: (data: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    contact?: string;
  }) => void;
  refreshToken: (refreshToken: string) => void;
  resendVerification: (email: string) => void;
  logout: () => void;
}
