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

export interface OAuthTokenResponse {
  access_token: string;
  refresh_token: string;
  id_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}
