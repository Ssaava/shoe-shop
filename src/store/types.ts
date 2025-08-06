import { AxiosResponse } from "axios";
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
