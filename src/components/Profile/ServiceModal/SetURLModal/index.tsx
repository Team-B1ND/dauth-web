import { DodamModal } from "@b1nd/dds-web";
import { DodamFilledTextField, DodamFilledButton } from "@b1nd/dds-web";
import * as S from "./style";
import { useState } from "react";
import {
  usePatchAppMutation,
  useGetMyAppQuery,
} from "src/queries/App/app.query";

interface SetURLModalProps {
  isOpen: boolean;
  close: () => void;
  clientId: string;
  currentMainUrl: string;
  currentRedirectUrl: string;
}

const SetURLModal = ({
  isOpen,
  close,
  clientId,
  currentMainUrl,
  currentRedirectUrl,
}: SetURLModalProps) => {
  const [mainUrl, setMainUrl] = useState(currentMainUrl);
  const [redirectUrl, setRedirectUrl] = useState(currentRedirectUrl);

  const patchAppMutation = usePatchAppMutation();
  const { data: myAppData } = useGetMyAppQuery();

  const handleComplete = async () => {
    if (!mainUrl.trim() || !redirectUrl.trim()) {
      alert("모든 URL을 입력해주세요.");
      return;
    }

    try {
      new URL(mainUrl);
      new URL(redirectUrl);
    } catch {
      alert("올바른 URL 형식을 입력해주세요.");
      return;
    }

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
        url: mainUrl,
        redirectUrl: redirectUrl,
        isPublic: true,
        frameworks: currentApp.frameworks?.map((fw: any) => fw.name) || [],
        scopes: currentApp.scopes || [],
      },
      {
        onSuccess: () => {
          close();
          setMainUrl(currentMainUrl);
          setRedirectUrl(currentRedirectUrl);
        },
      }
    );
  };

  return (
    <DodamModal isOpen={isOpen} $background>
      <S.ModalContainer>
        <h2>URL 설정</h2>
        <DodamFilledTextField
          type="text"
          label="메인 URL"
          value={mainUrl}
          placeholder="https://example.com"
          onChange={(e) => setMainUrl(e.target.value)}
        />
        <span>서비스의 메인 페이지 URL을 입력해 주세요.</span>
        <DodamFilledTextField
          type="text"
          label="리다이렉트 URL"
          value={redirectUrl}
          placeholder="https://example.com/callback"
          onChange={(e) => setRedirectUrl(e.target.value)}
        />
        <span>로그인 이후 리다이렉트 될 페이지의 URL을 입력해 주세요.</span>
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
            text={patchAppMutation.isPending ? "수정 중..." : "완료"}
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

export default SetURLModal;
