import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import appApi from "src/api/App/appApi";
import {
  PostAppParams,
  patchAppOwnerParams,
  patchAppParams,
} from "src/api/App/app.params";
import { QUERY_KEY } from "../queryKey";
import { B1ndToast } from "@b1nd/b1nd-toastify";

export const useGetFrameworksQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY.app.getFrameworks],
    queryFn: () => appApi.getFramework(),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
  });
};

export const usePostAppMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: PostAppParams) => appApi.postApp(params),
    onSuccess: () => {
      B1ndToast.showSuccess("앱이 성공적으로 등록되었습니다.");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.app.getMyApp],
      });
    },
    onError: (error) => {
      B1ndToast.showError("앱 등록에 실패했습니다. 다시 시도해주세요.");
    },
  });
};

export const useGetMyAppQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY.app.getMyApp],
    queryFn: () => appApi.getMyApp(),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 15,
  });
};

export const useGetAppsQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY.app.getApp],
    queryFn: () => appApi.getApps(),
    staleTime: 1000 * 60 * 6,
    gcTime: 1000 * 60 * 16,
  });
};

export const useGetStatsServicesCountQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY.app.getStatsServicesCount],
    queryFn: () => appApi.getStatsServicesCount(),
    staleTime: 1000 * 60 * 6,
    gcTime: 1000 * 60 * 16,
  });
};

export const useGetStatsUsersCountQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY.app.getStatsUsersCount],
    queryFn: () => appApi.getStatsUsersCount(),
    staleTime: 1000 * 60 * 6,
    gcTime: 1000 * 60 * 16,
  });
};

export const usePatchAppOwnerMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: patchAppOwnerParams) => appApi.patchAppOwner(params),
    onSuccess: () => {
      B1ndToast.showSuccess("서비스 주인이 성공적으로 변경되었습니다.");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.app.getMyApp],
      });
    },
    onError: (error) => {
      B1ndToast.showError("서비스 주인 변경에 실패했습니다. 다시 시도해주세요.");    
    },
  });
};

export const usePatchAppMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: patchAppParams) => appApi.patchApp(params),
    onSuccess: () => {
      B1ndToast.showSuccess("앱이 성공적으로 수정되었습니다.");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.app.getMyApp],
      });
    },
    onError: (error) => {
      B1ndToast.showError("앱 수정에 실패했습니다. 다시 시도해주세요.");
    },
  });
};
