import { EScopes } from "src/enum/auth/auth.enum";

export interface PostQRParams {
  clientId: string;
  scopes: EScopes[];
}

export interface authQRCheckParams {
  code: string;
  redirectUrl: string;
}

export interface AuthIdLoginParams {
  id: string;
  password: string;
  clientId: string;
  redirectUrl: string;
  scopes: EScopes[];
}

export interface OAuthTokenParams {
  grantType: "authorization_code" | "refresh_token";
  clientId: string;
  code?: string;
  refreshToken?: string;
}
