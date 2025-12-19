import * as S from "./style";
import { DodamModal, DodamFilledButton } from "@b1nd/dds-web";
import CheckItem from "src/components/common/CheckItem";
import { useState, useEffect } from "react";
import {
  useGetFrameworksQuery,
  usePatchAppMutation,
  useGetMyAppQuery,
} from "src/queries/App/app.query";
import { EScopes } from "src/enum/auth/auth.enum";
import { FrameWork } from "src/types/App/app.type";

interface SelectFrameWorkModalProps {
  isOpen: boolean;
  close: () => void;
  onComplete?: (frameworks: number[]) => void;
  isSubmitting?: boolean;
  isEditMode?: boolean;
  clientId?: string;
  currentFrameworks?: FrameWork[];
}

const SelectFrameworkModal = ({
  isOpen,
  close,
  onComplete,
  isSubmitting = false,
  isEditMode = false,
  clientId,
  currentFrameworks,
}: SelectFrameWorkModalProps) => {
  const [selectedFrameworks, setSelectedFrameworks] = useState<number[]>([]);
  const { data: frameworksData, isLoading } = useGetFrameworksQuery();
  const patchAppMutation = usePatchAppMutation();
  const { data: myAppData } = useGetMyAppQuery();

  useEffect(() => {
    if (isEditMode && currentFrameworks) {
      setSelectedFrameworks(currentFrameworks.map((fw) => fw.id));
    } else {
      setSelectedFrameworks([]);
    }
  }, [isEditMode, currentFrameworks, isOpen]);

  const frontendFrameworks =
    frameworksData?.data?.filter((fw) => fw.type === "FRONTEND") || [];
  const backendFrameworks =
    frameworksData?.data?.filter((fw) => fw.type === "BACKEND") || [];

  const handleFrameworkToggle = (id: number) => {
    setSelectedFrameworks((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const handleComplete = () => {
    close();
    if (onComplete) {
      onComplete(selectedFrameworks);
    }
  };

  if (isLoading) {
    return (
      <DodamModal isOpen={isOpen} $background>
        <S.ScopesFixContainer>
          <h1>프레임워크 로딩 중...</h1>
        </S.ScopesFixContainer>
      </DodamModal>
    );
  }
  return (
    <DodamModal isOpen={isOpen} $background>
      <S.ScopesFixContainer>
        <h1>사용 프레임워크 선택</h1>

        <S.SelectFrameworkWrapper>
          <S.FrameworkWrapper>
            <span>프론트엔드</span>
            {/* {frontendFrameworks.map((fw) => (
              <CheckItem
                key={fw.id}
                text={fw.name}
                isChecked={selectedFrameworks.includes(fw.id)}
                onChange={() => handleFrameworkToggle(fw.id)}
              />
            ))} */}
            {/* {isLoading ? (
            
            ): ()} */}
          </S.FrameworkWrapper>

          <S.FrameworkWrapper>
            <span>백엔드</span>
            {backendFrameworks.map((fw) => (
              <CheckItem
                key={fw.id}
                text={fw.name}
                isChecked={selectedFrameworks.includes(fw.id)}
                onChange={() => handleFrameworkToggle(fw.id)}
              />
            ))}
          </S.FrameworkWrapper>
        </S.SelectFrameworkWrapper>

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
            text="다음"
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

export default SelectFrameworkModal;
