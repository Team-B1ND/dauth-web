import axios from "axios";
import config from "src/config/config.json"
import { ACCESS_TOKEN_KEY,REQUEST_TOKEN_KEY } from "src/constants/Token/token.constants";
import cookies from "../Cookie/cookie";
import { dodamAxiosErrorInterceptor } from "./interceptors";

export const dodamAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
    [REQUEST_TOKEN_KEY]: `Bearer ${cookies.getCookie(ACCESS_TOKEN_KEY)!}`,
  },
});

dodamAxios.interceptors.response.use((res) => res, dodamAxiosErrorInterceptor);

export const injectCustomAxiosAccessToken = (token: string) => {
  dodamAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = token;
};
