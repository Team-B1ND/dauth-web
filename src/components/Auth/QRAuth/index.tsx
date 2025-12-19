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
import { QRAuthSkeleton } from "src/components/common/Skeleton";
import { useGetAppNameQuery } from "src/queries/App/app.query";

const QRAuth = () => {
  const theme = useTheme();
  const { clientId, redirectUrl, state, scopes } =
    useAuthParams();
  const { handleAuthCode } = useAuthTokenFlow();
  const { data: appNameData } = useGetAppNameQuery(clientId);
  const appName = appNameData?.data || "서비스";
  const navigate = useNavigate();
  const location = useLocation();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      redirectUrl,
      state,
    });
  });

  return (
    <S.QRContainer>
      {error ? (
        <>
          <img src={Logo} alt="로고" />
          <S.PointWord>
            도담도담 <span>계정으로</span>
            <br />
            <span><strong>{appName}</strong>에 연결하기</span>
          </S.PointWord>
          <S.ErrorMessage>QR 코드 생성에 실패했습니다.</S.ErrorMessage>
          <S.GoIdLink
            onClick={() => navigate(`/login/id${location.search}`)}
          >
            ID / PW로 로그인
          </S.GoIdLink>
        </>
      ) : !data ? (
        <QRAuthSkeleton />
      ) : (
        <>
          {(() => {
            const code = data.data.code;
            const qrValue = `https://deeplink.b1nd.com/?clientId=${clientId}&code=${code}`;
            return (
              <>
                <img src={Logo} alt="로고" />
                <S.PointWord>
                  도담도담 <span>계정으로</span>
                  <br />
                  <span><strong>{appName}</strong>에 연결하기</span>
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

                <p>휴대폰 카메라로 QR코드를 스캔해주세요.</p>
                <S.GoIdLink
                  onClick={() => navigate(`/login/id${location.search}`)}
                >
                  ID / PW로 로그인
                </S.GoIdLink>
              </>
            );
          })()}
        </>
      )}
    </S.QRContainer>
  );
};

export default QRAuth;
