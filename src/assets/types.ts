import z from "zod";

export type Product = {
  id: string;
  name: string;
  quantity: number;
  price: string;
  category: string;
  brand: string;
  gender: string;
  size: string;
  availability: string;
  date: Date;
  totalSales: string;
  image: string;
  color: string;
};
export type Wishlist = {
  id: string;
  productId: string;
  name: string;
  category: string;
  brand: string;
  price: string;
  color: string;
  size: string;
  quantity: number;
  total: string;
  addedDate: Date;
  priority: "High" | "Medium" | "Low";
  userNotes?: string;
  image: string;
};

export type Order = {
  id: string;
  productName: string;
  productId: string;
  customer: string;
  price: string;
  status: string;
  deliveryDate: string;
  image: string;
  quantity: number;
  deliveryStatus: string;
  paymentStatus: string;
};

export type Brand = {
  id: string;
  name: string;
  country: string;
  established: number;
  category: string;
};

export type CustomerFormType = {
  addProduct: boolean;
  confirmPassword: string;
  deleteProduct: boolean;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  upDateProduct: boolean;
  role: string;
};
export interface Notification {
  id: string;
  title: string;
  message: string;
  status: string;
  customerProfile: {
    name: string;
    email: string;
    profileImage: string;
  };
}
export const productSchema = z.object({
  productName: z.string().min(4).max(20),
  category: z.string(),
  gender: z.string(),
  quantity: z.number(),
  price: z.string(),
  size: z.string(),
  date: z.date(),
  description: z.string(),
  brand: z.string(),
  availability: z.string(),
  image: z.string(),
});

export const resetPasswordSchema = z.object({
  newPassword: z.string(),
  confirmNewPassword: z.string(),
});
export const requestResetPasswordSchema = z.object({
  email: z.string(),
});
export const resetTokenSchema = z.object({
  otp: z.string(),
});

export const createUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  addProduct: z.boolean(),
  upDateProduct: z.boolean(),
  deleteProduct: z.boolean(),
  role: z.string(),
});

export type Customers = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  permissions: {
    "add-product": boolean;
    "update-product": boolean;
    "delete-product": boolean;
  };
};

export type FaqData = {
  id: string;
  title: string;
  message: string;
};
