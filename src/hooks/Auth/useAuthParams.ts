import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { EScopes } from "src/enum/auth/auth.enum";

export interface AuthParams {
  clientId: string;
  clientSecret: string;
  redirectUrl: string;
  scopesRaw: string;
  state: string;
  scopes: EScopes[];
}

// OAuth scope를 서버 형식으로 변환 (openid -> OPENID, read:profile -> READ_PROFILE)
const normalizeScope = (scope: string): string => {
  return scope.toUpperCase().replace(/:/g, "_");
};

export const useAuthParams = (): AuthParams => {
  const location = useLocation();

  const authParams = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    const clientId = searchParams.get("client_id") ?? "";
    const clientSecret = searchParams.get("client_secret") ?? "";
    // OAuth 표준(redirect_uri)과 기존 형식(redirect_url) 모두 지원
    const redirectUrl = searchParams.get("redirect_uri") ?? searchParams.get("redirect_url") ?? "";
    // OAuth 표준(scope)과 기존 형식(scopes) 모두 지원
    const scopesRaw = searchParams.get("scope") ?? searchParams.get("scopes") ?? "";
    const state = searchParams.get("state") ?? "";

    const scopes = scopesRaw
      ? (scopesRaw
          .trim()
          .split(/[\s,]+/)
          .filter(Boolean)
          .map(normalizeScope) as EScopes[])
      : [];

    return {
      clientId,
      clientSecret,
      redirectUrl,
      scopesRaw,
      state,
      scopes,
    };
  }, [location.search]);

  return authParams;
};
