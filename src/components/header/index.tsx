import * as S from './style'
import dauth from 'src/assets/dauth.svg'

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Logo>
        <img src={dauth} alt="dauth" style={{ width: 79, height: 32}} />
      </S.Logo>
      <S.LoginButton>로그인</S.LoginButton> 
    </S.HeaderContainer>
  );
};

export default Header;