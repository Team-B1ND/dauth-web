import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { DodamFilledButton } from "@b1nd/dds-web";

const Header = () => {
  const navigate = useNavigate();

  return (
    <S.HeaderContainer>
      <S.LogoSection onClick={() => navigate("/")}>
        <p>:DAuth</p>
      </S.LogoSection>
      <DodamFilledButton
        text="로그인"
        textTheme={"staticWhite"}
        size={"Medium"}
        typography={["Body2", "Medium"]}
        customStyle={{ height: "40px", cursor: "pointer", width: "5rem" }}
        onClick={() => {}}
      />
    </S.HeaderContainer>
  );
};

export default Header;
