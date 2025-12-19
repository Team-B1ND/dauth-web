import config from "src/config/config.json";
import token from "../Token/token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "src/constants/Token/token.constants";
import authApi from "src/api/Auth/authApi";

const oauthConfig = config.OAUTH;

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
        code,
        clientSecret: oauthConfig.CLIENT_SECRET,
      });

      if (response.data) {
        token.setToken(ACCESS_TOKEN_KEY, response.data.accessToken);
        token.setToken(REFRESH_TOKEN_KEY, response.data.refreshToken);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Token exchange failed:", error);
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
