import { DodamTypography, DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const ScopesFixContainer = styled.div`
  width: 42.5em;
  height: 25em;
  background-color: ${({ theme }) => theme.backgroundNormal};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${DodamShape.Large}
  > h1 {
    ${DodamTypography.Heading1.Bold}
    color: ${({ theme }) => theme.labelNeutral};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
`;

export const ScopesCheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  > p {
    ${DodamTypography.Heading1.Medium}
    color: ${({ theme }) => theme.labelNormal};
    margin-left: 4px;
  }
`;

export const FrameworkDivider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SelectFrameworkWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  flex: 1;
  overflow-y: auto;
`;

export const FrameworkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  > span {
    ${DodamTypography.Heading1.Medium}
    color: ${({ theme }) => theme.labelNormal};
  }
`;
