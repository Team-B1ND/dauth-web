import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { DodamFilledButton } from "@b1nd/dds-web";
import HeaderLogo from "src/assets/header-logo.svg";
import DefaultProfile from "src/assets/user.svg";
import oauth from "src/libs/OAuth/oauth";
import { useGetUserInfoQuery } from "src/queries/App/app.query";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = oauth.isLoggedIn();
  const { data: userInfo } = useGetUserInfoQuery(isLoggedIn);

  return (
    <S.HeaderContainer>
      <S.LogoSection onClick={() => navigate("/")}>
        <img src={HeaderLogo} alt="DAuth" />
      </S.LogoSection>
      {isLoggedIn && userInfo?.data ? (
        <S.ProfileWrapper>
          <S.UserProfile onClick={() => navigate("/profile")}>
            <S.ProfileImage
              src={userInfo.data.profileImage || DefaultProfile}
              alt="프로필"
            />
            <S.UserName>{userInfo.data.name}</S.UserName>
          </S.UserProfile>
          <S.DropdownMenu>
            <S.DropdownItem onClick={() => oauth.logout()}>
              로그아웃
            </S.DropdownItem>
          </S.DropdownMenu>
        </S.ProfileWrapper>
      ) : (
        <DodamFilledButton
          text="로그인"
          textTheme={"staticWhite"}
          size={"Medium"}
          typography={["Body2", "Medium"]}
          customStyle={{ height: "40px", cursor: "pointer", width: "5rem" }}
          onClick={() => oauth.startOAuthLogin()}
        />
      )}
    </S.HeaderContainer>
  );
};

export default Header;
