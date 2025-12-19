import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";
import { DodamShape, DodamTypography } from "@b1nd/dds-web";

const QRAuthFallbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const SkeletonQRCode = styled.div`
  width: 220px;
  height: 220px;
  ${DodamShape.Large}
  ${skeletonAnimtaion}
`;

const QRAuthSkeleton = () => {
  return (
    <QRAuthFallbackContainer>
      <SkeletonQRCode />
    </QRAuthFallbackContainer>
  );
};

export default QRAuthSkeleton;
