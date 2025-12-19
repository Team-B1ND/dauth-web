import { Response } from "../Util/response.type";
import { EScopes } from "src/enum/auth/auth.enum";


export interface App {
  name: string;
  url: string;
  description: string;
  ownerId: string;
  createdAt: string;
  scopes: EScopes[];
  redirectUrl: string;
  clientId: string;
  clientSecret: string;
  frameworks: FrameWork[];
}

export interface MyAppResponse extends Response {
  data: {
    user: number;
    applications: App[];
  };
}

export interface FrameWork{
  id: number;
  name: string;
  color: string;
  type: "FRONTEND" | "BACKEND";
}

export interface FrameWorksResponse extends Response {
  data: FrameWork[];
}

export interface AppsResponse extends Response{
  data: App[];
}

export interface ServicesCountResponse extends Response{
  data: {
    count: number;
  }
}

export interface UserInfoResponse extends Response {
  data: {
    sub: string;
    name: string;
    email: string;
    profileImage: string;
    role: "STUDENT" | "TEACHER" | "ADMIN";
    phone: string;
  };
}

export interface AppNameResponse extends Response {
  data: string;
}