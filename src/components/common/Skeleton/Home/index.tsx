import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";
import { DodamShape } from "@b1nd/dds-web";

const SkeletonCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 24px;
  ${DodamShape.Large}
  flex: 1;
  min-height: 166px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 16px 20px;
  }
  ${skeletonAnimtaion}
`;

const HomeSkeleton = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, idx) => (
        <SkeletonCard key={idx} />
      ))}
    </>
  );
};

export default HomeSkeleton;
