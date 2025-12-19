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

export const useAuthParams = (): AuthParams => {
  const location = useLocation();

  const authParams = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    const clientId = searchParams.get("client_id") ?? "";
    const clientSecret = searchParams.get("client_secret") ?? "";
    const redirectUrl = searchParams.get("redirect_url") ?? "";
    const scopesRaw = searchParams.get("scopes") ?? "";
    const state = searchParams.get("state") ?? "";

    const scopes = scopesRaw
      ? (scopesRaw
          .trim()
          .split(/[\s,]+/)
          .filter(Boolean) as EScopes[])
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
