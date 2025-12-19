import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import oauth from "src/libs/OAuth/oauth";
import Logo from "src/assets/logo.svg";

const OAuthCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const code = searchParams.get("code");
    const errorParam = searchParams.get("error");

    if (errorParam) {
      setError("인증이 취소되었습니다.");
      return;
    }

    if (!code) {
      setError("인증 코드가 없습니다.");
      return;
    }

    const exchangeToken = async () => {
      const success = await oauth.exchangeCodeForToken(code);
      if (success) {
        navigate("/", { replace: true });
      } else {
        setError("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    };

    exchangeToken();
  }, [searchParams, navigate]);

  if (error) {
    return (
      <Container>
        <Content>
          <img src={Logo} alt="로고" />
          <ErrorMessage>{error}</ErrorMessage>
          <RetryButton onClick={() => navigate("/")}>
            홈으로 돌아가기
          </RetryButton>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Content>
        <img src={Logo} alt="로고" />
        <LoadingText>로그인 처리 중...</LoadingText>
      </Content>
    </Container>
  );
};

export default OAuthCallbackPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundNeutral};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 25em;
  min-height: 300px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  padding: 48px 60px;
  ${DodamShape.Large}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  box-sizing: border-box;

  > img {
    width: 108px;
    height: 108px;
    user-select: none;
    -webkit-user-drag: none;
    pointer-events: none;
  }
`;

const LoadingText = styled.p`
  ${DodamTypography.Headline.Medium}
  color: ${({ theme }) => theme.labelNormal};
`;

const ErrorMessage = styled.p`
  ${DodamTypography.Headline.Medium}
  color: ${({ theme }) => theme.statusNegative};
`;

const RetryButton = styled.button`
  ${DodamTypography.Body1.Bold}
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.primaryNormal};
  color: ${({ theme }) => theme.staticWhite};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #006acc;
  }
`;
