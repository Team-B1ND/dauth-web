import * as S from "./style";
import DefaultProfile from "src/assets/user.svg";

export interface ProfileCardProps {
  name: string;
  profileImage?: string;
  registeredServices: number;
  onOpenNewServiceModal: () => void;
}

const ProfileCard = ({
  name,
  profileImage,
  registeredServices,
  onOpenNewServiceModal,
}: ProfileCardProps) => {
  return (
    <S.Container>
      <S.ProfileImage src={profileImage || DefaultProfile} alt="프로필" />
      <S.ProfileInfo>
        <h2>{name}</h2>
        <S.StatRow>
          <span>등록한 서비스</span>
          <p>{registeredServices}</p>
        </S.StatRow>
      </S.ProfileInfo>

      <S.RegisterButton onClick={onOpenNewServiceModal}>
        새로운 서비스 등록하기
      </S.RegisterButton>
    </S.Container>
  );
};

export default ProfileCard;
