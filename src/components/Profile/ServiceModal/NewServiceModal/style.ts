import { DodamTypography, DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const ServiceContainer = styled.div`
  width: 32em;
  height: 43em;
  background-color: ${({ theme }) => theme.backgroundNormal};
  padding: 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  ${DodamShape.Large}
  > h1{
    ${DodamTypography.Heading1.Bold}
    color: ${({theme})=> theme.labelNeutral};
  }
  >span{
    ${DodamTypography.Label.Medium}
    color: ${({theme})=> theme.labelNeutral};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
`;

export const RegisterButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  > span{
    ${DodamTypography.Label.Medium}
    color: ${({theme})=> theme.labelAlternative};
  }
`;