import { useMemo } from "react";
import { EScopes } from "src/enum/auth/auth.enum";
import { SCOPES_CONSTANTS } from "src/constants/Scopes/scopes.constants";


export const usePermissionsText = (scopes: EScopes[]): string => {
  const permissionsText = useMemo(() => {
    return scopes
      .map((scope) => SCOPES_CONSTANTS.find((s) => s.scope === scope)?.name)
      .filter(Boolean)
      .join(", ");
  }, [scopes]);

  return permissionsText;
};
