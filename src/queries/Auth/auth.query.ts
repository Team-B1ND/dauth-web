import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import authApi from "src/api/Auth/authApi";
import {
  authQRCheckParams,
  PostQRParams,
  AuthIdLoginParams,
} from "src/api/Auth/auth.params";
import { B1ndToast } from "@b1nd/b1nd-toastify";

export const usePostAuthQRMutation = (params: PostQRParams) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => authApi.postAuthQR(params),
    onSuccess: () => {
      B1ndToast.showSuccess("QR 코드가 생성되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["qr", params] });
    },
    onError: () => {
      B1ndToast.showError("QR 코드 생성에 실패했습니다. 다시 시도해주세요.");
    },
  });

  return mutation;
};

export const usePostAuthIdLoginMutation = (onSuccess?: (data: any) => void) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (params: AuthIdLoginParams) => authApi.postAuthIdLogin(params),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["id-login"] });
      onSuccess?.(data);
    },
    onError: () => {
      B1ndToast.showError("로그인에 실패했습니다. 다시 시도해주세요.");
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
