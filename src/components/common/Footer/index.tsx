import * as S from "./style";
import { DodamDivider } from "@b1nd/dds-web";

const FOOTER_LINKS = {
  docs: "https://docs.b1nd.com",
  service: "https://b1nd.com",
  blog: "https://tech.b1nd.com",
  dodam: "https://dodam.b1nd.com",
  github: "https://github.com/Team-B1ND",
};

const Footer = () => {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
            <S.LinkItem onClick={() => openLink(FOOTER_LINKS.docs)}>DOCS</S.LinkItem>
            <S.LinkItem onClick={() => openLink(FOOTER_LINKS.service)}>서비스</S.LinkItem>
            <S.LinkItem onClick={() => openLink(FOOTER_LINKS.blog)}>블로그</S.LinkItem>
          </S.LinkColumn>
          <S.LinkColumn>
            <S.LinkItem onClick={() => openLink(FOOTER_LINKS.dodam)}>도담도담</S.LinkItem>
            <S.LinkItem onClick={() => openLink(FOOTER_LINKS.github)}>깃허브</S.LinkItem>
          </S.LinkColumn>
        </S.RightSection>
      </S.ContentWrapper>
    </S.FooterContainer>
  );
};

export default Footer;
