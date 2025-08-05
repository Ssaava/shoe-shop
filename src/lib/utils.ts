import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const postData = async <D, P = undefined>(
  url: string,
  data: D,
  token?: string,
  params?: P
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  try {
    let response;
    if (token) {
      response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,

        params,
      });
    } else {
      response = await axios.post(url, data, { withCredentials: true });
    }

    return response;
  } catch (error) {
    return error;
  }
};
