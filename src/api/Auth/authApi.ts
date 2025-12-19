import { dodamAxios } from "src/libs/Axios/dodamAxios";
import {
  AuthIdLoginResponse,
  AuthQRResponse,
  OAuthTokenResponse,
} from "src/types/Auth/auth.type";
import {
  PostQRParams,
  authQRCheckParams,
  AuthIdLoginParams,
  OAuthTokenParams,
} from "./auth.params";

class AuthApi {
  public async postAuthQR(params: PostQRParams): Promise<AuthQRResponse> {
    const { data } = await dodamAxios.post<AuthQRResponse>("/auth/qr", params);
    return data;
  }

  public async postAuthQRCheck(
    params: authQRCheckParams
  ): Promise<AuthQRResponse> {
    const { data } = await dodamAxios.post<AuthQRResponse>(
      "/auth/qr/check",
      params
    );
    return data;
  }

  public async postAuthIdLogin(
    params: AuthIdLoginParams
  ): Promise<AuthIdLoginResponse> {
    const { data } = await dodamAxios.post<AuthIdLoginResponse>(
      "/auth/id-login",
      params
    );
    return data;
  }

  public async postOAuthToken(
    params: OAuthTokenParams
  ): Promise<OAuthTokenResponse> {
    const { data } = await dodamAxios.post<OAuthTokenResponse>(
      "/oauth/token",
      params
    );
    return data;
  }
}

export default new AuthApi();
