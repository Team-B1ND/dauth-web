import * as S from "./style";
import { DodamDivider } from "@b1nd/dds-web";

const Footer = () => {
  return (
    <S.FooterContainer>
      <DodamDivider type="Small"/>
      <S.ContentWrapper>
        <S.LeftSection>
          <span>B1ND(바인드)</span>
          <span>대구소프트웨어마이스터고등학교</span>
          <span>이메일 : mdev_team@dgsw.hs.kr</span>
        </S.LeftSection>
        <S.RightSection>
          <S.LinkColumn>
            <span>DOCS</span>
            <span>서비스</span>
            <span>블로그</span>
          </S.LinkColumn>
          <S.LinkColumn>
            <span>도담도담</span>
            <span>깃허브</span>
          </S.LinkColumn>
        </S.RightSection>
      </S.ContentWrapper>
    </S.FooterContainer>
  );
};

export default Footer;
