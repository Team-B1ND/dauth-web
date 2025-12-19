import { usePostOAuthTokenMutation } from "src/queries/Auth/auth.query";
import cookies from "src/libs/Cookie/cookie";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "src/constants/Token/token.constants";

export interface UseAuthTokenFlowOptions {
  clientSecret: string;
  redirectUrl: string;
  state: string;
}


export const useAuthTokenFlow = () => {
  const { mutate: mutateToken, isPending: isTokenPending } =
    usePostOAuthTokenMutation();

  const handleAuthCode = (code: string, options: UseAuthTokenFlowOptions) => {
    const { clientSecret, redirectUrl, state } = options;

    if (clientSecret) {
      mutateToken(
        { code, clientSecret },
        {
          onSuccess: (tokenData) => {
            cookies.setCookie(ACCESS_TOKEN_KEY, tokenData.data.accessToken);
            cookies.setCookie(REFRESH_TOKEN_KEY, tokenData.data.refreshToken);

            const url = new URL(redirectUrl);
            if (state) {
              url.searchParams.append("state", state);
            }
            window.location.href = url.toString();
          },
          onError: () => {
            console.error("토큰 발급에 실패했습니다.");
          },
        }
      );
    } else {
      const url = new URL(redirectUrl);
      url.searchParams.append("code", code);
      if (state) {
        url.searchParams.append("state", state);
      }
      window.location.href = url.toString();
    }
  };

  return { handleAuthCode, isTokenPending };
};
