import * as S from './style'

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.CompanyInfo>
            <S.Link href="#">B1ND(바인드)</S.Link>
            <S.Link href="#">대구소프트웨어마이스터고등학교</S.Link>
            <S.Link href="mailto:mdev_team@dgsw.hs.kr">이메일 : mdev_team@dgsw.hs.kr</S.Link>
        </S.CompanyInfo>
        <S.LinkSection>
          <S.LinkList>
            <li><S.Link href="#">DOCS</S.Link></li>
            <li><S.Link href="#">서비스</S.Link></li>
            <li><S.Link href="#">블로그</S.Link></li>
          </S.LinkList>
          <S.LinkList>
            <li><S.Link href="#">도담도담</S.Link></li>
            <li><S.Link href="#">깃허브</S.Link></li>
          </S.LinkList>
        </S.LinkSection>
      </S.FooterContent>
    </S.FooterContainer>
  );
};

export default Footer;