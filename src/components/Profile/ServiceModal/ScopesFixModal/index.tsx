import * as S from "./style";
import { DodamModal, DodamFilledButton, DodamCheckBox } from "@b1nd/dds-web";
import { SCOPES_CONSTANTS } from "src/constants/Scopes/scopes.constants";
import { useState, useEffect } from "react";
import { EScopes } from "src/enum/auth/auth.enum";
import {
  usePatchAppMutation,
  useGetMyAppQuery,
} from "src/queries/App/app.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";

interface ScopesFixModalProps {
  isOpen: boolean;
  close: () => void;
  onComplete?: (scopes: EScopes[]) => void;
  clientId?: string;
  currentScopes?: EScopes[];
}

const ScopesFixModal = ({
  isOpen,
  close,
  onComplete,
  clientId,
  currentScopes,
}: ScopesFixModalProps) => {
  const [selectedScopes, setSelectedScopes] = useState<EScopes[]>([]);
  const isEditMode = !!clientId;

  const patchAppMutation = usePatchAppMutation(() => close());
  const { data: myAppData } = useGetMyAppQuery();

  useEffect(() => {
    if (isEditMode && currentScopes) {
      setSelectedScopes(currentScopes);
    } else {
      setSelectedScopes([]);
    }
  }, [isEditMode, currentScopes, isOpen]);

  const handleScopeToggle = (scope: EScopes) => {
    setSelectedScopes((prev) =>
      prev.includes(scope) ? prev.filter((s) => s !== scope) : [...prev, scope]
    );
  };

  const handleEditSubmit = () => {
    if (!clientId) {
      B1ndToast.showError("서비스 정보를 찾을 수 없습니다.");
      return;
    }

    const currentApp = myAppData?.data?.applications?.find(
      (app: any) => app.clientId === clientId
    );

    if (!currentApp) {
      B1ndToast.showError("서비스 정보를 찾을 수 없습니다.");
      return;
    }

    patchAppMutation.mutate({
      clientId,
      name: currentApp.name,
      description: currentApp.description,
      url: currentApp.url,
      redirectUrl: currentApp.redirectUrl,
      isPublic: true,
      frameworks: currentApp.frameworks?.map((fw: any) => fw.name) || [],
      scopes: selectedScopes,
    });
  };

  const handleCreateNext = () => {
    onComplete?.(selectedScopes);
    setSelectedScopes([]);
  };

  const modalConfig = {
    buttonText: isEditMode ? "완료" : "다음",
    onSubmit: isEditMode ? handleEditSubmit : handleCreateNext,
    isLoading: patchAppMutation.isPending,
  };

  return (
    <DodamModal isOpen={isOpen} $background>
      <S.ScopesFixContainer>
        <h1>권한 설정</h1>

        <S.ScopesCheckboxContainer>
          {SCOPES_CONSTANTS.map(({ name, scope }) => (
            <S.CheckBoxWrapper key={scope}>
              <DodamCheckBox
                isDisabled={selectedScopes.includes(scope as EScopes)}
                onClick={() => handleScopeToggle(scope as EScopes)}
              />
              <p>{name}</p>
            </S.CheckBoxWrapper>
          ))}
        </S.ScopesCheckboxContainer>

        <S.ButtonContainer>
          <DodamFilledButton
            text="취소"
            size={"Medium"}
            typography={["Body2", "Medium"]}
            customStyle={{ height: "47px", width: "100%" }}
            backgroundColorType="Assistive"
            onClick={close}
          />
          <DodamFilledButton
            text={modalConfig.isLoading ? "처리 중..." : modalConfig.buttonText}
            textTheme={"staticWhite"}
            size={"Medium"}
            typography={["Body2", "Medium"]}
            customStyle={{ height: "47px", width: "100%" }}
            onClick={modalConfig.onSubmit}
          />
        </S.ButtonContainer>
      </S.ScopesFixContainer>
    </DodamModal>
  );
};

export default ScopesFixModal;
