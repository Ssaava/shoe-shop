/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import { z } from "zod";
export interface Address {
  street: string;
  city: string;
  countryCode: string;
  country: string;
  isDefault: boolean;
}

export interface Order {
  user: User;
  products: {
    product: Product;
    quantity: number;
    price: number;
    size: string;
  };
  shipping_address: Address;
  payment_method: string;
  payment_status: "pending" | "completed" | "failed";
  order_status: "processing" | "shipped" | "delivered" | "cancelled";
  total_price: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  contact: string;
  email: string;
  firstname: string;
  isVerified: boolean;
  lastname: string;
  role: string;
  wishlist: Product[];
  orders: Order[];
  addresses: Address[];
  image: string;
  coverImage: string;
  joined: string;
}
export interface AuthState {
  authenticating: boolean;
  loading: boolean;
  user: User | null;
  hasRefreshed: boolean;
  loggingOut: boolean;
  login: (data: { email: string; password: string }) => Promise<AxiosResponse>;
  createAccount: (data: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    contact?: string;
  }) => void;
  refreshToken: () => Promise<AxiosResponse | undefined>;
  resendVerification: (email: string) => void;
  registerUser: (data: RegisterUserType) => Promise<AxiosResponse | any>;
  logout: () => Promise<AxiosResponse | undefined>;
}

// product slice
export interface Product {
  _id: string;
  name: string;
  price: number;
  stock: number;
  gender: "male" | "female" | "both";
  description: string;
  images: ProductImage[];
  sizes: string[];
  avRating: number;
  ratings: Rating[]; // adjust this if ratings have a structure later
  createdAt: string;
  updatedAt: string;
  __v: number;
  brand?: Brand | null;
  category?: Category | null;
}

export interface ProductImage {
  url: string;
  image_id: string;
  public_id: string;
  _id: string;
}

export interface Brand {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Category {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Rating {
  value: number;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ProductState {
  products: Product[];
  fetchingProducts: boolean;
  getAllProducts: () => Promise<AxiosResponse>;
  getProduct: (product_id: string) => Promise<Product>;
}

export const RegisterUserSchema = z.object({
  firstname: z.string().nonempty("firstname is required"),
  lastname: z.string().nonempty("lastname is required"),
  email: z.string().nonempty("email is required"),
  password: z.string().nonempty("password is required"),
});

export type RegisterUserType = z.infer<typeof RegisterUserSchema>;

export const LoginUserSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  password: z.string().nonempty("password is required"),
});

export type LoginUserType = z.infer<typeof LoginUserSchema>;
