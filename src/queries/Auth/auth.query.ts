import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import authApi from "src/api/Auth/authApi";
import {
  authQRCheckParams,
  PostQRParams,
  AuthIdLoginParams,
  OAuthTokenParams,
} from "src/api/Auth/auth.params";

export const usePostAuthQRMutation = (params: PostQRParams) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => authApi.postAuthQR(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["qr", params] });
    },
  });

  return mutation;
};

export const usePostAuthIdLoginMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (params: AuthIdLoginParams) => authApi.postAuthIdLogin(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["id-login"] });
    },
  });

  return mutation;
};

export const usePostOAuthTokenMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (params: OAuthTokenParams) => authApi.postOAuthToken(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["oauth-token"] });
    },
  });

  return mutation;
};

export const useQRCheckPollingQuery = (
  params: authQRCheckParams | null,
  enabled: boolean = false,
  onSuccess?: (code: string, redirectUrl: string) => void
) => {
  return useQuery({
    queryKey: ["qr-check-polling", params],
    queryFn: async () => {
      if (!params) return null;
      const result = await authApi.postAuthQRCheck(params);
      if (result?.data?.code) {
        onSuccess?.(result.data.code, result.data.redirectUrl);
      }
      return result;
    },
    enabled: enabled && !!params,
    refetchInterval: 2000,
    refetchIntervalInBackground: true,
    staleTime: 0,
    gcTime: 0,
  });
};
