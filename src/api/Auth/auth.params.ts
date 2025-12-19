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
  code: string;
  clientSecret: string;
}
