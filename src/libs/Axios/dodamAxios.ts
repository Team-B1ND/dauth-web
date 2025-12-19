import axios from "axios";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "src/constants/Token/token.constants";
import cookies from "../Cookie/cookie";
import { dodamAxiosErrorInterceptor } from "./interceptors";

export const dodamAxios = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

dodamAxios.interceptors.request.use((config) => {
  const token = cookies.getCookie(ACCESS_TOKEN_KEY);
  if (token) {
    config.headers[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
  }
  return config;
});

dodamAxios.interceptors.response.use((res) => res, dodamAxiosErrorInterceptor);

export const injectCustomAxiosAccessToken = (token: string) => {
  dodamAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
};
