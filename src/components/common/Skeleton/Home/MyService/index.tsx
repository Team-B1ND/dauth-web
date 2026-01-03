import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";
import { DodamShape } from "@b1nd/dds-web";

const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const SkeletonServiceItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  ${DodamShape.Large}
  box-sizing: border-box;
  height: 56px;
  ${skeletonAnimtaion}

  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;

const MyServiceSkeleton = () => {
  return (
    <ServiceList>
      {[...Array(3)].map((_, idx) => (
        <SkeletonServiceItem key={idx} />
      ))}
    </ServiceList>
  );
};

export default MyServiceSkeleton;
