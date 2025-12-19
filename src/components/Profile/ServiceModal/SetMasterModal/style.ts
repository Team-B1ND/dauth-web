import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 32em;
  height: 15em;
  background-color: ${({theme}) => theme.backgroundNormal};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${DodamShape.Large}
  > h2{
    ${DodamTypography.Heading1.Bold}
    color: ${({theme}) => theme.labelNeutral};
  }
  >div{
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
`;