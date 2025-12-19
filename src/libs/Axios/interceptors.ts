import { AxiosError } from "axios";
import cookies from "../Cookie/cookie";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "src/constants/Token/token.constants";

export const dodamAxiosErrorInterceptor = async (config: AxiosError) => {
  if (config.response) {
    const {
      response: { status },
    } = config;

    const accessToken = cookies.getCookie(ACCESS_TOKEN_KEY);
    const refreshToken = cookies.getCookie(REFRESH_TOKEN_KEY);

    if (accessToken && refreshToken && status === 401) {
      try {
        // refresh token 엔드포인트가 있으면 여기에 구현
        // const { data } = await dodamAxios.post("/auth/refresh", { refreshToken });
        // cookies.setCookie(ACCESS_TOKEN_KEY, data);
        // injectCustomAxiosAccessToken(data);
      } catch (error) {
        window.alert("세션만료");
        cookies.removeCookie(ACCESS_TOKEN_KEY);
        cookies.removeCookie(REFRESH_TOKEN_KEY);
        // window.location.href = "https://dodam.b1nd.com/sign";
      }
    }

    return Promise.reject(config);
  }
};
