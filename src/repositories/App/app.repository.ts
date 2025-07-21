import { dodamAxios } from "src/libs/Axios/dodamAxios";
import { MyAppsResponse, AllAppsResponse } from "src/types/App/app.type";
import { Response } from "src/types/Util/response";
import { CreateAppParam, ChangeOwnerParam, UpdateAppParam } from "./app.param";

class AppRepository {
  // 앱 생성
  public async createApp(params: CreateAppParam): Promise<Response> {
    const { data } = await dodamAxios.post("/app", params);
    return data;
  }

  // 소유자 변경
  public async changeOwner(params: ChangeOwnerParam): Promise<Response> {
    const { data } = await dodamAxios.patch("/app/owner", params);
    return data;
  }

  // 앱 정보 수정
  public async updateApp(params: UpdateAppParam): Promise<Response> {
    const { data } = await dodamAxios.patch("/app", params);
    return data;
  }

  // 내 앱 가져오기
  public async getMyApps(): Promise<MyAppsResponse> {
    const { data } = await dodamAxios.get("/app/my");
    return data;
  }

  // 전체 공개 앱 가져오기
  public async getAllApps(): Promise<AllAppsResponse> {
    const { data } = await dodamAxios.get("/app");
    return data;
  }
}

const appRepository = new AppRepository();
export default appRepository;