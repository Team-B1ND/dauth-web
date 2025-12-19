import * as S from "./style";
import { DodamModal, DodamFilledButton, DodamCheckBox } from "@b1nd/dds-web";
import { SCOPES_CONSTANTS } from "src/constants/Scopes/scopes.constants";
import { useState, useEffect } from "react";
import { EScopes } from "src/enum/auth/auth.enum";
import {
  usePatchAppMutation,
  useGetMyAppQuery,
} from "src/queries/App/app.query";

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

  const patchAppMutation = usePatchAppMutation();
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

  const handleComplete = async () => {
    if (isEditMode && clientId) {
      const currentApp = myAppData?.data?.applications?.find(
        (app: any) => app.clientId === clientId
      );

      if (!currentApp) {
        alert("서비스 정보를 찾을 수 없습니다.");
        return;
      }

      patchAppMutation.mutate(
        {
          clientId,
          name: currentApp.name,
          description: currentApp.description,
          url: currentApp.url,
          redirectUrl: currentApp.redirectUrl,
          isPublic: true,
          frameworks: currentApp.frameworks?.map((fw: any) => fw.name) || [],
          scopes: selectedScopes,
        },
        {
          onSuccess: () => {
            close();
          },
        }
      );
    } else {
      if (onComplete) {
        onComplete(selectedScopes);
      }
      setSelectedScopes([]);
    }
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
            text={patchAppMutation.isPending ? "수정 중..." : "완료"}
            textTheme={"staticWhite"}
            size={"Medium"}
            typography={["Body2", "Medium"]}
            customStyle={{ height: "47px", width: "100%" }}
            onClick={handleComplete}
          />
        </S.ButtonContainer>
      </S.ScopesFixContainer>
    </DodamModal>
  );
};

export default ScopesFixModal;
