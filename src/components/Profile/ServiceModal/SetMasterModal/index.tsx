import * as S from "./style";
import {
  DodamModal,
  DodamFilledTextField,
  DodamFilledButton,
} from "@b1nd/dds-web";
import { useState } from "react";
import { usePatchAppOwnerMutation } from "src/queries/App/app.query";

interface SetMasterModalProps {
  isOpen: boolean;
  close: () => void;
  clientId: string;
}

const SetMasterModal = ({ isOpen, close, clientId }: SetMasterModalProps) => {
  const [masterId, setMasterId] = useState("");
  const patchAppOwnerMutation = usePatchAppOwnerMutation();

  const handleComplete = async () => {
    if (!masterId.trim()) {
      alert("아이디를 입력해주세요.");
      return;
    }
    patchAppOwnerMutation.mutateAsync({
        clientId: clientId,
        newOwnerDodamId: masterId,
      });
      setMasterId("");
      close();
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
        />
        <div>
          <DodamFilledButton
            text="취소"
            size={"Medium"}
            typography={["Body2", "Medium"]}
            customStyle={{ height: "47px" }}
            backgroundColorType="Assistive"
            onClick={close}
          />
          <DodamFilledButton
            text={patchAppOwnerMutation.isPending ? "변경 중..." : "완료"}
            textTheme={"staticWhite"}
            size={"Medium"}
            typography={["Body2", "Medium"]}
            customStyle={{ height: "47px" }}
            onClick={handleComplete}
          />
        </div>
      </S.ModalContainer>
    </DodamModal>
  );
};

export default SetMasterModal;
