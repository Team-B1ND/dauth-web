import * as S from "./style";
import { DodamModal, DodamErrorBoundary } from "@b1nd/dds-web";
import { useState, useEffect } from "react";
import {
  useGetFrameworksQuery,
  usePatchAppMutation,
  useGetMyAppQuery,
} from "src/queries/App/app.query";
import { FrameWork } from "src/types/App/app.type";
import FrameworkContent from "./FrameworkContent";
import FrameworkSkeleton from "src/components/common/Skeleton/Profile/Framework";

interface SelectFrameWorkModalProps {
  isOpen: boolean;
  close: () => void;
  onComplete?: (frameworks: number[]) => void;
  isEditMode?: boolean;
  clientId?: string;
  currentFrameworks?: FrameWork[];
}

interface SelectFrameWorkModalProps {
  isOpen: boolean;
  close: () => void;
  onComplete?: (frameworks: number[]) => void;
  isEditMode?: boolean;
  clientId?: string;
  currentFrameworks?: FrameWork[];
}

const SelectFrameworkModal = ({
  isOpen,
  close,
  onComplete,
  isEditMode = false,
  clientId,
  currentFrameworks,
}: SelectFrameWorkModalProps) => {
  const [selectedFrameworks, setSelectedFrameworks] = useState<number[]>([]);
  const { data: frameworksData, isLoading } = useGetFrameworksQuery();
  const patchAppMutation = usePatchAppMutation(() => close());
  const { data: myAppData } = useGetMyAppQuery();

  useEffect(() => {
    if (isEditMode && currentFrameworks) {
      setSelectedFrameworks(currentFrameworks.map((fw) => fw.id));
    } else {
      setSelectedFrameworks([]);
    }
  }, [isEditMode, currentFrameworks, isOpen]);

  const handleFrameworkToggle = (id: number) => {
    setSelectedFrameworks((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const handleEditSubmit = () => {
    if (!clientId) {
      alert("서비스 정보를 찾을 수 없습니다.");
      return;
    }

    const currentApp = myAppData?.data?.applications?.find(
      (app: any) => app.clientId === clientId
    );

    if (!currentApp) {
      alert("서비스 정보를 찾을 수 없습니다.");
      return;
    }

    patchAppMutation.mutate({
      clientId,
      name: currentApp.name,
      description: currentApp.description,
      url: currentApp.url,
      redirectUrl: currentApp.redirectUrl,
      isPublic: true,
      frameworks: selectedFrameworks.map((id) => {
        const fw = frameworksData?.data?.find((f) => f.id === id);
        return fw?.name || "";
      }),
      scopes: currentApp.scopes || [],
    });
  };

  const handleCreateNext = () => {
    onComplete?.(selectedFrameworks);
    close();
  };

  const modalConfig = {
    buttonText: isEditMode ? "수정" : "다음",
    onSubmit: isEditMode ? handleEditSubmit : handleCreateNext,
    isLoading: patchAppMutation.isPending,
  };

  return (
    <DodamModal isOpen={isOpen} $background>
      <S.ScopesFixContainer>
        <h1>사용 프레임워크 선택</h1>

        <DodamErrorBoundary
          text="프레임워크 로딩 중 에러가 발생했습니다"
          showButton={true}
        >
          {isLoading ? (
            <FrameworkSkeleton />
          ) : (
            <FrameworkContent
              frameworksData={frameworksData}
              selectedFrameworks={selectedFrameworks}
              handleFrameworkToggle={handleFrameworkToggle}
            />
          )}
        </DodamErrorBoundary>

        <S.ButtonContainer>
          <S.CancelButton onClick={close}>취소</S.CancelButton>
          <S.PrimaryButton
            onClick={modalConfig.onSubmit}
            disabled={modalConfig.isLoading}
          >
            {modalConfig.isLoading ? "처리 중..." : modalConfig.buttonText}
          </S.PrimaryButton>
        </S.ButtonContainer>
      </S.ScopesFixContainer>
    </DodamModal>
  );
};

export default SelectFrameworkModal;
