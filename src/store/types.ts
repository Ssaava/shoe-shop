import { AxiosResponse } from "axios";
export interface AuthState {
  authenticating: boolean;
  loading: boolean;
  user: {
    contact: string;
    email: string;
    firstname: string;
    isVerified: boolean;
    lastname: string;
    role: string;
  } | null;
  hasRefreshed: boolean;
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
  logout: () => void;
}

// product slice
export interface Product {
  _id: string;
  name: string;
  price: number;
  stock: number;
  gender: "male" | "female";
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
