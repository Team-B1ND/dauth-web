import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";
import { DodamShape } from "@b1nd/dds-web";

const AppNameSkeletonWrapper = styled.span`
  display: inline-block;
  width: 140px;
  height: 28px;
  ${DodamShape.ExtraSmall}
  ${skeletonAnimtaion}
`;

const AppNameSkeleton = () => {
  return <AppNameSkeletonWrapper />;
};

export default AppNameSkeleton;
