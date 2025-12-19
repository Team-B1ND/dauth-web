import { EScopes } from "src/enum/auth/auth.enum";
import { Response } from "../Util/response.type";

export interface AuthQRRequest {
  scopes: EScopes[];
}

export interface AuthQRResponse extends Response {
  data: {
    code: string;
    redirectUrl: string;
  };
}

export interface AuthIdLoginResponse extends Response {
  data: {
    code: string;
    redirectUrl: string;
  };
}

export interface OAuthTokenResponse extends Response {
  data: {
    accessToken: string;
    refreshToken: string;
    idToken: string;
    tokenType: string;
  };
}
