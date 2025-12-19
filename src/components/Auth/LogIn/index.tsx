import * as S from "./style";
import Logo from "src/assets/logo.svg";
import { DodamTextField } from "@b1nd/dds-web";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { usePostAuthIdLoginMutation } from "src/queries/Auth/auth.query";
import { useAuthParams } from "src/hooks/Auth/useAuthParams";
import { useAuthTokenFlow } from "src/hooks/Auth/useAuthTokenFlow";

const LogIn = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const { clientId, redirectUrl, scopes, state } =
    useAuthParams();
  const { handleAuthCode } = useAuthTokenFlow();
  const { mutate, isPending } = usePostAuthIdLoginMutation((data) => {
    handleAuthCode(data.data.code, {
      redirectUrl,
      state,
    });
  });

  const handleLogin = async () => {
    if (!id || !password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    mutate({
      id,
      password,
      clientId,
      redirectUrl,
      scopes,
    });
  };

  return (
    <>
      <S.LogInContainer>
        <img src={Logo} alt="로고" />

        <S.PointWord>
          도담도담 <span>계정으로</span>
          <br />
          <span>client에 연결하기</span>
        </S.PointWord>

        <S.WrapIdAndPassword>
          <DodamTextField
            id="id"
            name="id"
            type="text"
            value={id}
            label="아이디"
            onChange={(e) => {
              setId(e.target.value);
            }}
            onRemoveClick={() => setId("")}
            width={304}
          />
          <DodamTextField
            id="password"
            name="password"
            type="password"
            value={password}
            label="비밀번호"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onRemoveClick={() => setPassword("")}
            width={304}
          />
        </S.WrapIdAndPassword>

        <S.WrapButton>
          <S.LoginButton
            onClick={handleLogin}
            disabled={!id || !password || isPending}
          >
            {isPending ? "로그인 중..." : "로그인"}
          </S.LoginButton>

          <span onClick={() => navigate(`/login/qr${location.search}`)}>
            QR로 간편 로그인
          </span>
        </S.WrapButton>
      </S.LogInContainer>
    </>
  );
};

export default LogIn;
