import { useEffect } from "react";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/constants/Token/token.constant";
import cookie from "src/libs/Cookie/cookie";

const useTokenCheck = () => {
  useEffect(() => {
    if (
      !cookie.getCookie(ACCESS_TOKEN_KEY) ||
      !cookie.getCookie(REFRESH_TOKEN_KEY)
    ) {
      console.warn("토큰이 없습니다. 로그인이 필요합니다.");
    }
  }, []);

  return {};
};

export default useTokenCheck;