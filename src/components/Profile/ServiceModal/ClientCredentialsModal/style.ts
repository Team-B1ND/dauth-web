import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 28em;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 16px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.Large}
`;

export const Title = styled.h2`
  ${DodamTypography.Heading1.Bold}
  color: ${({ theme }) => theme.labelNormal};
  margin: 0;
`;

export const CredentialItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.span`
  ${DodamTypography.Body2.Medium}
  color: ${({ theme }) => theme.labelNeutral};
`;

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background-color: ${({ theme }) => theme.fillAlternative};
  border-radius: 8px;
`;

export const Value = styled.code`
  ${DodamTypography.Body2.Medium}
  color: ${({ theme }) => theme.labelNormal};
  flex: 1;
  word-break: break-all;
  font-family: monospace;
`;

export const CopyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.primaryNormal};
  color: ${({ theme }) => theme.staticWhite};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #006acc;
  }
`;

export const Warning = styled.p`
  ${DodamTypography.Caption1.Medium}
  color: ${({ theme }) => theme.statusNegative};
  margin: 0;
  padding: 8px 12px;
  background-color: rgba(255, 59, 48, 0.1);
  border-radius: 6px;
`;

export const CloseButton = styled.button`
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