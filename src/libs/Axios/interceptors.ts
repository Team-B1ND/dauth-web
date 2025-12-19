import axios, { AxiosError } from "axios";
import cookies from "../Cookie/cookie";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "src/constants/Token/token.constants";
import { OAuthTokenResponse } from "src/types/Auth/auth.type";

// 토큰 갱신 전용 axios (인터셉터 없음 - 순환 의존성 방지)
const refreshAxios = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const onRefreshed = (token: string) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

const addRefreshSubscriber = (callback: (token: string) => void) => {
  refreshSubscribers.push(callback);
};

export const dodamAxiosErrorInterceptor = async (error: AxiosError) => {
  const originalRequest = error.config;

  if (error.response?.status === 401 && originalRequest) {
    const refreshToken = cookies.getCookie(REFRESH_TOKEN_KEY);

    if (!refreshToken) {
      cookies.removeCookie(ACCESS_TOKEN_KEY);
      cookies.removeCookie(REFRESH_TOKEN_KEY);
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve) => {
        addRefreshSubscriber(async (token: string) => {
          originalRequest.headers[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
          const { dodamAxios } = await import("./dodamAxios");
          resolve(dodamAxios(originalRequest));
        });
      });
    }

    isRefreshing = true;

    try {
      const { data } = await refreshAxios.post<OAuthTokenResponse>(
        "/oauth/token/internal",
        {
          grantType: "refresh_token",
          clientId: import.meta.env.VITE_OAUTH_CLIENT_ID,
          refreshToken,
        }
      );

      if (data.access_token) {
        cookies.setCookie(ACCESS_TOKEN_KEY, data.access_token);
        cookies.setCookie(REFRESH_TOKEN_KEY, data.refresh_token);

        originalRequest.headers[REQUEST_TOKEN_KEY] = `Bearer ${data.access_token}`;
        onRefreshed(data.access_token);

        // 동적 import로 순환 의존성 방지
        const { dodamAxios } = await import("./dodamAxios");
        return dodamAxios(originalRequest);
      }
    } catch (refreshError) {
      cookies.removeCookie(ACCESS_TOKEN_KEY);
      cookies.removeCookie(REFRESH_TOKEN_KEY);
      window.location.href = "/";
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }

  return Promise.reject(error);
};
