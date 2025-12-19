import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";
import { DodamShape } from "@b1nd/dds-web";

const SelectFrameworkWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  flex: 1;
  overflow-y: auto;
`;

const FrameworkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SkeletonCheckItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  height: 22px;
`;

const FrameworkSkeleton = () => {
  return (
    <SelectFrameworkWrapper>
      <FrameworkWrapper>
        {[...Array(4)].map((_, idx) => (
          <SkeletonCheckItem key={`frontend-${idx}`} />
        ))}
      </FrameworkWrapper>

      <FrameworkWrapper>
        {[...Array(4)].map((_, idx) => (
          <SkeletonCheckItem key={`backend-${idx}`} />
        ))}
      </FrameworkWrapper>
    </SelectFrameworkWrapper>
  );
};

export default FrameworkSkeleton;
