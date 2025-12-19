import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 32em;
  height: 25em;
  background-color: ${({theme}) => theme.backgroundNormal};
  padding: 20px;
  ${DodamShape.Large}
  display: flex;
  flex-direction: column;
  gap: 20px;
  > h2{
    ${DodamTypography.Heading1.Bold}
    color: ${({theme}) => theme.labelNeutral};
  }
  > div{
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
  >span{
    ${DodamTypography.Label.Medium}
    color: ${({theme})=> theme.labelAlternative};
    margin-top: -12px;
  }
`;