import { useQuery, useMutation } from "react-query";
import appRepository from "src/repositories/App/app.repository";
import { CreateAppParam, ChangeOwnerParam, UpdateAppParam } from "src/repositories/App/app.param";
import { QUERY_KEYS } from "src/queries/queryKey";

// 내 앱 조회
export const useGetMyAppsQuery = () => {
  return useQuery(
    QUERY_KEYS.app.getMyApps,
    () => appRepository.getMyApps(),
    {
      staleTime: 1000 * 60 * 5, // 5분
    }
  );
};

// 전체 공개 앱 조회
export const useGetAllAppsQuery = () => {
  return useQuery(
    QUERY_KEYS.app.getAllApps,
    () => appRepository.getAllApps(),
    {
      staleTime: 1000 * 60 * 5, // 5분
    }
  );
};

// 앱 생성
export const useCreateAppMutation = () => {
  return useMutation((params: CreateAppParam) => appRepository.createApp(params));
};

// 소유자 변경
export const useChangeOwnerMutation = () => {
  return useMutation((params: ChangeOwnerParam) => appRepository.changeOwner(params));
};

// 앱 정보 수정
export const useUpdateAppMutation = () => {
  return useMutation((params: UpdateAppParam) => appRepository.updateApp(params));
};