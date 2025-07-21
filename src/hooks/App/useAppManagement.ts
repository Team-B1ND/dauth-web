import { useState, ChangeEvent } from "react";
import { useQueryClient } from "react-query";
import { AxiosError } from "axios";
import { 
  useCreateAppMutation, 
  useUpdateAppMutation, 
  useChangeOwnerMutation 
} from "src/queries/App/app.query";
import { CreateAppParam, UpdateAppParam, ChangeOwnerParam } from "src/repositories/App/app.param";
import { QUERY_KEYS } from "src/queries/queryKey";
import errorHandler from "src/utils/Error/errorHandler";

export const useAppManagement = () => {
  const queryClient = useQueryClient();
  const createAppMutation = useCreateAppMutation();
  const updateAppMutation = useUpdateAppMutation();
  const changeOwnerMutation = useChangeOwnerMutation();

  const [createAppData, setCreateAppData] = useState<CreateAppParam>({
    name: "",
    url: "",
    redirectUrl: "",
    isPublic: false,
    frameworks: [],
  });

  const [updateAppData, setUpdateAppData] = useState<UpdateAppParam>({
    clientId: "",
    name: "",
    url: "",
    redirectUrl: "",
    isPublic: false,
    frameworks: [],
  });

  const [changeOwnerData, setChangeOwnerData] = useState<ChangeOwnerParam>({
    clientId: "",
    newOwnerDodamId: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: "create" | "update" | "changeOwner",
    field: string
  ) => {
    const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    
    if (type === "create") {
      setCreateAppData(prev => ({ ...prev, [field]: value }));
    } else if (type === "update") {
      setUpdateAppData(prev => ({ ...prev, [field]: value }));
    } else if (type === "changeOwner") {
      setChangeOwnerData(prev => ({ ...prev, [field]: value }));
    }
  };

  // 프레임워크 선택
  const handleFrameworkSelect = (
    frameworkId: number, 
    type: "create" | "update"
  ) => {
    if (type === "create") {
      setCreateAppData(prev => ({
        ...prev,
        frameworks: prev.frameworks.includes(frameworkId)
          ? prev.frameworks.filter(id => id !== frameworkId)
          : [...prev.frameworks, frameworkId]
      }));
    } else {
      setUpdateAppData(prev => ({
        ...prev,
        frameworks: prev.frameworks?.includes(frameworkId)
          ? prev.frameworks.filter(id => id !== frameworkId)
          : [...(prev.frameworks || []), frameworkId]
      }));
    }
  };

  // 앱 생성
  const handleCreateApp = () => {
    if (!createAppData.name || !createAppData.url || !createAppData.redirectUrl) {
      console.error("필수 항목을 모두 입력해주세요.");
      return;
    }

    createAppMutation.mutate(createAppData, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.app.getMyApps);
        queryClient.invalidateQueries(QUERY_KEYS.app.getAllApps);
        console.log("앱이 성공적으로 생성되었습니다.");
        resetCreateForm();
      },
      onError: (error) => {
        const errorAxios = error as AxiosError;
        errorHandler.createApp(errorAxios);
      }
    });
  };

  // 앱 정보 수정
  const handleUpdateApp = () => {
    if (!updateAppData.clientId) {
      console.error("클라이언트 ID를 입력해주세요.");
      return;
    }

    updateAppMutation.mutate(updateAppData, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.app.getMyApps);
        queryClient.invalidateQueries(QUERY_KEYS.app.getAllApps);
        console.log("앱 정보가 성공적으로 수정되었습니다.");
        resetUpdateForm();
      },
      onError: (error) => {
        const errorAxios = error as AxiosError;
        errorHandler.updateApp(errorAxios);
      }
    });
  };

  // 소유자 변경
  const handleChangeOwner = () => {
    if (!changeOwnerData.clientId || !changeOwnerData.newOwnerDodamId) {
      console.error("클라이언트 ID와 새 소유자 도담 ID를 모두 입력해주세요.");
      return;
    }

    changeOwnerMutation.mutate(changeOwnerData, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.app.getMyApps);
        console.log("소유자가 성공적으로 변경되었습니다.");
        resetChangeOwnerForm();
      },
      onError: (error) => {
        const errorAxios = error as AxiosError;
        errorHandler.changeOwner(errorAxios);
      }
    });
  };

  // 폼 초기화 함수들
  const resetCreateForm = () => {
    setCreateAppData({
      name: "",
      url: "",
      redirectUrl: "",
      isPublic: false,
      frameworks: [],
    });
  };

  const resetUpdateForm = () => {
    setUpdateAppData({
      clientId: "",
      name: "",
      url: "",
      redirectUrl: "",
      isPublic: false,
      frameworks: [],
    });
  };

  const resetChangeOwnerForm = () => {
    setChangeOwnerData({
      clientId: "",
      newOwnerDodamId: "",
    });
  };

  return {
    createAppData,
    updateAppData,
    changeOwnerData,
    handleInputChange,
    handleFrameworkSelect,
    handleCreateApp,
    handleUpdateApp,
    handleChangeOwner,
    resetCreateForm,
    resetUpdateForm,
    resetChangeOwnerForm,
    isCreating: createAppMutation.isLoading,
    isUpdating: updateAppMutation.isLoading,
    isChangingOwner: changeOwnerMutation.isLoading,
  };
};