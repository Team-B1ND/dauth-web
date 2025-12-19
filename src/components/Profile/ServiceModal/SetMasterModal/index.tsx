import * as S from "./style";
import { DodamModal, DodamFilledTextField } from "@b1nd/dds-web";
import { useState } from "react";
import { usePatchAppOwnerMutation } from "src/queries/App/app.query";

interface SetMasterModalProps {
  isOpen: boolean;
  close: () => void;
  clientId: string;
}

const SetMasterModal = ({ isOpen, close, clientId }: SetMasterModalProps) => {
  const [masterId, setMasterId] = useState("");
  const patchAppOwnerMutation = usePatchAppOwnerMutation(() => {
    setMasterId("");
    close();
  });

  const handleComplete = () => {
    if (!masterId.trim()) {
      alert("아이디를 입력해주세요.");
      return;
    }
    patchAppOwnerMutation.mutate({
      clientId: clientId,
      newOwnerDodamId: masterId,
    });
  };

  return (
    <DodamModal isOpen={isOpen} $background>
      <S.ModalContainer>
        <h2>서비스 주인 설정</h2>
        <DodamFilledTextField
          type="text"
          label="도담아이디"
          value={masterId}
          placeholder="아이디로 설정"
          onChange={(e) => setMasterId(e.target.value)}
          onRemoveClick={() => setMasterId("")}
        />
        <S.ButtonContainer>
          <S.CancelButton onClick={close}>취소</S.CancelButton>
          <S.PrimaryButton
            onClick={handleComplete}
            disabled={!masterId.trim() || patchAppOwnerMutation.isPending}
          >
            {patchAppOwnerMutation.isPending ? "변경 중..." : "완료"}
          </S.PrimaryButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </DodamModal>
  );
};

export default SetMasterModal;
