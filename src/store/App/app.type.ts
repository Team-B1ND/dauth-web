import { Response } from "src/types/Util/response";

export interface App {
  name: string;
  url: string;
  redirectUrl: string;
  clientId: string;
  clientSecret: string;
  frameworks: string[];
}

export interface PublicApp {
  name: string;
  url: string;
  redirectUrl: string;
  frameworks: string[];
}

export interface MyAppsResponse extends Response {
  data: {
    user: number;
    applications: App[];
  };
}

export interface AllAppsResponse extends Response {
  data: PublicApp[];
}