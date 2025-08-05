import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios, { AxiosResponse } from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const postData = async <D, P = undefined>(
  url: string,
  data?: D,
  params?: P
): Promise<AxiosResponse | unknown> => {
  try {
    if (params) {
      const response = await axios.post(url, data, {
        withCredentials: true,
        params,
      });
      return response;
    }

    const response = await axios.post(url, data ?? {}, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const fetchData = async <P = undefined>(
  url: string,
  params?: P
): Promise<AxiosResponse | unknown> => {
  try {
    if (params) {
      const response = await axios.get(url, {
        withCredentials: true,
        params,
      });
      return response;
    }
    const response = await axios.get(url, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    return error;
  }
};
