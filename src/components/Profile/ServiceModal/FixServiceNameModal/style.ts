import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const ServiceNameModalContainer = styled.div`
  width: 22em;
  height: 25em;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 12px;
  background-color: ${({theme})=> theme.backgroundNormal};
  ${DodamShape.Large}
  > h2{
    ${DodamTypography.Heading1.Bold}
    color: ${({theme}) => theme.labelNeutral};
  }
  > div{
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
`