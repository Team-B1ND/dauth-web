export interface CreateAppParam {
  name: string;
  url: string;
  redirectUrl: string;
  isPublic: boolean;
  frameworks: number[];
}

export interface ChangeOwnerParam {
  clientId: string;
  newOwnerDodamId: string;
}

export interface UpdateAppParam {
  clientId: string;
  name?: string;
  url?: string;
  redirectUrl?: string;
  isPublic?: boolean;
  frameworks?: number[];
}