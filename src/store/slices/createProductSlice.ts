import { fetchData } from "@/lib/utils";
import { StateCreator } from "zustand";
import { ProductState } from "../types";
import { AxiosResponse } from "axios";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const initialState = {
  products: [],
  fetching_products: false,
};
export const createProductSlice: StateCreator<ProductState> = (set) => ({
  ...initialState,

  getAllProducts: async () => {
    set({ fetching_products: true });
    const response = (await fetchData(
      `${SERVER_URL}/api/product/products/all`,
    )) as AxiosResponse;
    if (response.status === 200) {
      set({ products: response.data.products });
      set({ fetching_products: false });
      return response.data.products;
    }
    set({ fetching_products: false });
    return response;
  },

  getProduct: async (product_id: string) => {
    set({ fetching_products: true });
    const response = (await fetchData(
      `${SERVER_URL}/api/product/${product_id}`,
    )) as AxiosResponse;
    console.log(response);
    if (response.status === 200) {
      set({ fetching_products: false });
      return response.data.product;
    }
    set({ fetching_products: false });
    return response;
  },
});
