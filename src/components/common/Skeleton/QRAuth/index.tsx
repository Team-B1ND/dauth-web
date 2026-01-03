import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";
import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import Logo from "src/assets/logo.svg";
import AppNameSkeleton from "../Auth/AppName";

const QRAuthFallbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;

  > img {
    width: 108px;
    height: 108px;
    user-select: none;
    -webkit-user-drag: none;
    pointer-events: none;
  }
`;

const PointWord = styled.div`
  ${DodamTypography.Title2.Bold}
  color: ${({ theme }) => theme.primaryNormal};

  span {
    ${DodamTypography.Title2.Medium}
    color: ${({ theme }) => theme.labelNormal};
  }
`;

const SkeletonQRCode = styled.div`
  width: 220px;
  height: 220px;
  ${DodamShape.Large}
  ${skeletonAnimtaion}
`;

const SkeletonText = styled.div`
  width: 200px;
  height: 20px;
  border-radius: 4px;
  ${skeletonAnimtaion}
`;

const QRAuthSkeleton = () => {
  return (
    <QRAuthFallbackContainer>
      <img src={Logo} alt="로고" />
      <PointWord>
        도담도담 <span>계정으로</span>
        <br />
        <span><AppNameSkeleton/>에 연결하기</span>
      </PointWord>
      <SkeletonQRCode />
      <SkeletonText />
    </QRAuthFallbackContainer>
  );
};

export default QRAuthSkeleton;
