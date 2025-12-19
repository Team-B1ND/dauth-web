import token from "../Token/token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "src/constants/Token/token.constants";
import authApi from "src/api/Auth/authApi";

const oauthConfig = {
  CLIENT_ID: import.meta.env.VITE_OAUTH_CLIENT_ID,
  REDIRECT_URI: import.meta.env.VITE_OAUTH_REDIRECT_URI,
  AUTHORIZE_URL: import.meta.env.VITE_OAUTH_AUTHORIZE_URL,
  SCOPES: (import.meta.env.VITE_OAUTH_SCOPES || "").split(","),
};

class OAuth {
  public startOAuthLogin(): void {
    const params = new URLSearchParams({
      client_id: oauthConfig.CLIENT_ID,
      redirect_uri: oauthConfig.REDIRECT_URI,
      scope: oauthConfig.SCOPES.join(" "),
      response_type: "code",
    });

    window.location.href = `${oauthConfig.AUTHORIZE_URL}?${params.toString()}`;
  }

  public async exchangeCodeForToken(code: string): Promise<boolean> {
    try {
      const response = await authApi.postOAuthToken({
        grantType: "authorization_code",
        clientId: oauthConfig.CLIENT_ID,
        code,
      });

      if (response.access_token) {
        token.setToken(ACCESS_TOKEN_KEY, response.access_token);
        token.setToken(REFRESH_TOKEN_KEY, response.refresh_token);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Token exchange failed:", error);
      return false;
    }
  }

  public async refreshAccessToken(): Promise<boolean> {
    try {
      const refreshToken = token.getToken(REFRESH_TOKEN_KEY);
      if (!refreshToken) {
        return false;
      }

      const response = await authApi.postOAuthToken({
        grantType: "refresh_token",
        clientId: oauthConfig.CLIENT_ID,
        refreshToken,
      });

      if (response.access_token) {
        token.setToken(ACCESS_TOKEN_KEY, response.access_token);
        token.setToken(REFRESH_TOKEN_KEY, response.refresh_token);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Token refresh failed:", error);
      return false;
    }
  }

  public isLoggedIn(): boolean {
    const accessToken = token.getToken(ACCESS_TOKEN_KEY);
    return !!accessToken;
  }

  public logout(): void {
    token.clearToken();
    window.location.href = "/";
  }
}

const oauth = new OAuth();
export default oauth;
