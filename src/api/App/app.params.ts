import { EScopes } from "src/enum/auth/auth.enum";

export interface PostAppParams {
  name: string;
  url: string;
  redirectUrl: string;
  description?: string;
  isPublic: boolean;
  frameworks: number[];
  scopes?: EScopes[];
}

export interface patchAppOwnerParams {
  clientId: string;
  newOwnerDodamId: string;
}

export interface patchAppParams {
  clientId: string;
  name: string;
  url: string;
  description: string;
  redirectUrl: string;
  isPublic: boolean;
  frameworks: string[];
  scopes: EScopes[];
}