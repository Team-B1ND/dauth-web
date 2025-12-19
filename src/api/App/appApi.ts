import { dodamAxios } from "src/libs/Axios/dodamAxios";
import {
  AppNameResponse,
  AppsResponse,
  FrameWorksResponse,
  MyAppResponse,
  ServicesCountResponse,
  UserInfoResponse,
} from "src/types/App/app.type";
import {
  patchAppOwnerParams,
  PostAppParams,
  patchAppParams,
} from "./app.params";

class AppApi {
  public async postApp(app: PostAppParams): Promise<void> {
    const { data } = await dodamAxios.post<void>("/app", app);
    return data;
  }

  public async getApps(): Promise<AppsResponse> {
    const { data } = await dodamAxios.get<AppsResponse>("/app");
    return data;
  }

  public async getMyApp(): Promise<MyAppResponse> {
    const { data } = await dodamAxios.get<MyAppResponse>("/app/my");
    return data;
  }

  public async getFramework(): Promise<FrameWorksResponse> {
    const { data } = await dodamAxios.get<FrameWorksResponse>("/framework");
    return data;
  }

  public async getStatsServicesCount(): Promise<ServicesCountResponse> {
    const { data } = await dodamAxios.get<ServicesCountResponse>(
      "/stats/services/count"
    );
    return data;
  }

  public async getStatsUsersCount(): Promise<ServicesCountResponse> {
    const { data } = await dodamAxios.get<ServicesCountResponse>(
      "/stats/users/count"
    );
    return data;
  }

  public async patchAppOwner(owner: patchAppOwnerParams) {
    const { data } = await dodamAxios.patch<void>("/app/owner", owner);
    return data;
  }

  public async patchApp(app: patchAppParams): Promise<void> {
    const { data } = await dodamAxios.patch<void>("/app", app);
    return data;
  }

  public async getUserInfo(): Promise<UserInfoResponse>{
    const { data } = await dodamAxios.get<UserInfoResponse>("/oauth/userinfo");
    return data;
  }

  public async getAppName(clientId: string): Promise<AppNameResponse> {
    const { data } = await dodamAxios.get<AppNameResponse>("/app/name", {
      params: { clientId },
    });
    return data;
  }
}

export default new AppApi();
