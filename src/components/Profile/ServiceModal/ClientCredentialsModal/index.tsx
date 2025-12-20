import * as S from "./style";
import { DodamModal } from "@b1nd/dds-web";
import { B1ndToast } from "@b1nd/b1nd-toastify";

interface ClientCredentialsModalProps {
  isOpen: boolean;
  close: () => void;
  clientId: string;
  clientSecret: string;
}

const ClientCredentialsModal = ({
  isOpen,
  close,
  clientId,
  clientSecret,
}: ClientCredentialsModalProps) => {
  const handleCopy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      B1ndToast.showSuccess(`${label}가 복사되었습니다.`);
    } catch {
      B1ndToast.showError("복사에 실패했습니다.");
    }
  };

  return (
    <DodamModal isOpen={isOpen} $background>
      <S.ModalContainer>
        <S.Title>클라이언트 인증 정보</S.Title>

        <S.CredentialItem>
          <S.Label>Client ID</S.Label>
          <S.ValueContainer>
            <S.Value>{clientId}</S.Value>
            <S.CopyButton onClick={() => handleCopy(clientId, "Client ID")}>
              복사
            </S.CopyButton>
          </S.ValueContainer>
        </S.CredentialItem>

        <S.CredentialItem>
          <S.Label>Client Secret</S.Label>
          <S.ValueContainer>
            <S.Value>{clientSecret}</S.Value>
            <S.CopyButton
              onClick={() => handleCopy(clientSecret, "Client Secret")}
            >
              복사
            </S.CopyButton>
          </S.ValueContainer>
        </S.CredentialItem>

        <S.Warning>
          Client Secret은 외부에 노출되지 않도록 주의해주세요.
        </S.Warning>

        <S.CloseButton onClick={close}>닫기</S.CloseButton>
      </S.ModalContainer>
    </DodamModal>
  );
};

export default ClientCredentialsModal;
