import { useTheme } from "styled-components";
import QRCode from "react-qr-code";
import Logo from "src/assets/logo.svg";
import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import {
  usePostAuthQRMutation,
  useQRCheckPollingQuery,
} from "src/queries/Auth/auth.query";
import { useEffect, useState } from "react";
import { authQRCheckParams } from "src/api/Auth/auth.params";
import { useAuthParams } from "src/hooks/Auth/useAuthParams";
import { useAuthTokenFlow } from "src/hooks/Auth/useAuthTokenFlow";

const QRAuth = () => {
  const theme = useTheme();
  const { clientId, clientSecret, redirectUrl, state, scopes } = useAuthParams();
  const { handleAuthCode } = useAuthTokenFlow();

  const [qrCheckParams, setQrCheckParams] = useState<authQRCheckParams | null>(
    null
  );
  const [pollingEnabled, setPollingEnabled] = useState(false);

  const { data, error, mutate } = usePostAuthQRMutation({
    clientId,
    scopes,
  });

  useEffect(() => {
    if (scopes.length > 0) {
      mutate();
    }
  }, [mutate, scopes, clientId]);

  useEffect(() => {
    if (data?.data?.code) {
      setQrCheckParams({
        code: data.data.code,
        redirectUrl: redirectUrl,
      });
      setPollingEnabled(true);
    }
  }, [data]);

  useQRCheckPollingQuery(qrCheckParams, pollingEnabled, (code) => {
    handleAuthCode(code, {
      clientSecret,
      redirectUrl,
      state,
    });
  });

  if (error) {
    console.error(error);
    return <S.QRContainer>QR 코드 생성에 실패했습니다.</S.QRContainer>;
  }

  if (!data) {
    return <S.QRContainer>QR 코드를 생성 중입니다...</S.QRContainer>;
  }

  const code = data.data.code;
  const qrValue = `https://deeplink.b1nd.com/?clientId=${clientId}&code=${code}`;

  return (
    <S.QRContainer>
      <img src={Logo} alt="로고" />
      <S.PointWord>
        도담도담 <span>계정으로</span>
        <br />
        <span>client에 연결하기</span>
      </S.PointWord>

      <QRCode
        value={qrValue}
        size={180}
        bgColor={theme.fillNormal}
        fgColor={theme.labelNormal}
        level="L"
        style={{
          padding: "20px",
          backgroundColor: theme.fillNormal,
          borderRadius: "12px",
        }}
      />
    </S.QRContainer>
  );
};

export default QRAuth;
