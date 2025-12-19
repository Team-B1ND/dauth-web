import * as S from "./style";
import {
  DodamModal,
  DodamFilledTextField,
  DodamFilledButton,
} from "@b1nd/dds-web";
import { useState, useEffect } from "react";
import CheckItem from "src/components/common/CheckItem";

interface NewServiceModalProps {
  isOpen: boolean;
  close: () => void;
  onNext?: (data: {
    serviceName: string;
    serviceDescription: string;
    mainUrl: string;
    redirectUrl: string;
    isPublic: boolean;
  }) => void;
}

const NewServiceModal = ({ isOpen, close, onNext }: NewServiceModalProps) => {
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [mainUrl, setMainUrl] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setServiceName("");
      setServiceDescription("");
      setMainUrl("");
      setRedirectUrl("");
      setIsPublic(false);
    }
  }, [isOpen]);

  const handleNext = () => {
    if (onNext) {
      onNext({
        serviceName,
        serviceDescription,
        mainUrl,
        redirectUrl,
        isPublic,
      });
    }
  };

  return (
    <DodamModal isOpen={isOpen} $background>
      <S.ServiceContainer>
        <h1>서비스 등록하기</h1>
        <DodamFilledTextField
          type="text"
          label="서비스명"
          value={serviceName}
          placeholder="DAuth Service"
          onChange={(e) => setServiceName(e.target.value)}
        />
        <DodamFilledTextField
          type="text"
          label="설명"
          value={serviceDescription}
          placeholder="서비스의 설명을 입력하세요."
          onChange={(e) => setServiceDescription(e.target.value)}
        />

        <DodamFilledTextField
          type="text"
          label="메인 URL"
          value={mainUrl}
          placeholder="https://example.com"
          onChange={(e) => setMainUrl(e.target.value)}
        />
        <DodamFilledTextField
          type="text"
          label="리다이렉트 URL"
          value={redirectUrl}
          placeholder="https://example.com/verify"
          onChange={(e) => setRedirectUrl(e.target.value)}
        />

        <S.RegisterButtonContainer>
          <span>공개/비공개 설정</span>
          <CheckItem
            text="다른 사용자에게 공개"
            typography="Body"
            isChecked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
          />
        </S.RegisterButtonContainer>

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
            onClick={handleNext}
          />
        </S.ButtonContainer>
      </S.ServiceContainer>
    </DodamModal>
  );
};

export default NewServiceModal;
