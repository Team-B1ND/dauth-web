import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";
import { DodamShape } from "@b1nd/dds-web";

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 1024px) {
    grid-column: 1 / -1;
  }
`;

const SkeletonProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 28px 32px;
  ${skeletonAnimtaion}
  ${DodamShape.Medium}
  width: 280px;
  height: 25em;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px 20px;
  }
`;

const SkeletonServiceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  width: 280px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SkeletonListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const SkeletonListItem = styled.div`
  padding: 12px 20px;
  height: 44px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.Medium}
  ${skeletonAnimtaion}
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px 16px;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    grid-column: 1 / -1;
  }
`;

const SkeletonDetailBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  ${skeletonAnimtaion}
  ${DodamShape.Medium}
  height: 34em;
  box-sizing: border-box;
  width: 760px;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    gap: 12px;
  }
`;

const ProfileSkeleton = () => {
  return (
    <>
      <LeftColumn>
        <SkeletonProfileCard></SkeletonProfileCard>
      </LeftColumn>

      <SkeletonServiceList>
        <SkeletonListWrapper>
          {Array.from({ length: 5 }).map((_, idx) => (
            <SkeletonListItem key={idx} />
          ))}
        </SkeletonListWrapper>
      </SkeletonServiceList>

      <RightColumn>
        <SkeletonDetailBox />
      </RightColumn>
    </>
  );
};

export default ProfileSkeleton;
