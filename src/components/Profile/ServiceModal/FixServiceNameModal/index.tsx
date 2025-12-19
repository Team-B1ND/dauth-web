import * as S from "./style";
import {
  DodamFilledButton,
  DodamFilledTextField,
  DodamModal,
} from "@b1nd/dds-web";
import { useState } from "react";
import {
  usePatchAppMutation,
  useGetMyAppQuery,
} from "src/queries/App/app.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";

interface FixServiceNameModalProps {
  isOpen: boolean;
  close: () => void;
  clientId: string;
  currentName: string;
  currentDescription: string;
}

const FixServiceNameModal = ({
  isOpen,
  close,
  clientId,
  currentName,
  currentDescription,
}: FixServiceNameModalProps) => {
  const [serviceName, setServiceName] = useState(currentName);
  const [description, setDescription] = useState(currentDescription);

  const patchAppMutation = usePatchAppMutation(() => {
    setServiceName(currentName);
    setDescription(currentDescription);
    close();
  });
  const { data: myAppData } = useGetMyAppQuery();

  const handleComplete = () => {
    if (!serviceName.trim()) {
      alert("서비스명을 입력해주세요.");
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
      name: serviceName,
      description,
      url: currentApp.url,
      redirectUrl: currentApp.redirectUrl,
      isPublic: true,
      frameworks: currentApp.frameworks?.map((fw: any) => fw.name) || [],
      scopes: currentApp.scopes || [],
    });
  };

  return (
    <DodamModal isOpen={isOpen} $background>
      <S.ServiceNameModalContainer>
        <DodamFilledTextField
          type="text"
          label="서비스명"
          value={serviceName}
          placeholder="서비스명을 입력해주세요"
          onChange={(e) => setServiceName(e.target.value)}
        />
        <DodamFilledTextField
          type="text"
          label="설명"
          value={description}
          placeholder="서비스 설명을 입력해주세요"
          onChange={(e) => setDescription(e.target.value)}
        />
        <div>
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
        </div>
      </S.ServiceNameModalContainer>
    </DodamModal>
  );
};

export default FixServiceNameModal;
