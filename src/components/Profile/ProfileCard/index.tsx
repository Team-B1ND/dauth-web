import * as S from "./style";
import { DodamFilledButton } from "@b1nd/dds-web";

export interface ProfileCardProps {
  name: string;
  registeredServices: number;
  joinDate: string;
  onOpenNewServiceModal: () => void;
}

const ProfileCard = ({
  name,
  registeredServices,
  joinDate,
  onOpenNewServiceModal,
}: ProfileCardProps) => {
  return (
    <S.Container>
      <S.ProfileImageWrapper />
      <S.ProfileInfo>
        <h2>{name}</h2>
        <S.StatRow>
          <span>등록한 서비스</span>
          <p>{registeredServices}</p>
        </S.StatRow>
        <S.StatRow>
          <span>가입일자</span>
          <p>{joinDate}</p>
        </S.StatRow>
      </S.ProfileInfo>

      <DodamFilledButton
        text="새로운 서비스 등록하기"
        textTheme={"staticWhite"}
        size={"Medium"}
        typography={["Body1", "Bold"]}
        customStyle={{ height: "48px", width: "100%" }}
        onClick={onOpenNewServiceModal}
      />
    </S.Container>
  );
};

export default ProfileCard;
