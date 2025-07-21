import axios from "axios";
import config from "src/config/config.json";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/constants/Token/token.constant";
import cookie from "../Cookie/cookie";

export const dodamAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
    [REFRESH_TOKEN_KEY]: `Bearer ${cookie.getCookie(ACCESS_TOKEN_KEY)!}`,
  },
});

export const injectCustomAxiosAccessToken = (token: string) => {
  dodamAxios.defaults.headers.common[REFRESH_TOKEN_KEY] = token;
};
