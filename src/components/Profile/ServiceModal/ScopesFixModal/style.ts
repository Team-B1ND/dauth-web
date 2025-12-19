import { DodamTypography, DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const ScopesFixContainer = styled.div`
  width: 42.5em;
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

export const PrimaryButton = styled.button`
  ${DodamTypography.Body2.Medium}
  width: 100%;
  height: 47px;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.primaryNormal};
  color: ${({ theme }) => theme.staticWhite};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover:not(:disabled) {
    background: #006acc;
  }

  &:disabled {
    background: rgba(0, 131, 240, 0.4);
    cursor: not-allowed;
  }
`;

export const CancelButton = styled.button`
  ${DodamTypography.Body2.Medium}
  width: 100%;
  height: 47px;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.fillAlternative};
  color: ${({ theme }) => theme.labelNormal};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const ScopesCheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  
  > div:nth-child(n + 6) {
    grid-column: 2;
  }
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