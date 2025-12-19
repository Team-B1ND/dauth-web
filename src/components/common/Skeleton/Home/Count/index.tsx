import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";
import { DodamShape } from "@b1nd/dds-web";

const StatGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

const SkeletonStatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 18px 20px;
  ${DodamShape.Large}
  align-items: center;
  justify-content: center;
  flex: 1;
  ${skeletonAnimtaion}

  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;

const CountSkeleton = () => {
  return (
    <StatGrid>
      <SkeletonStatItem></SkeletonStatItem>
      <SkeletonStatItem></SkeletonStatItem>
    </StatGrid>
  );
};

export default CountSkeleton;
