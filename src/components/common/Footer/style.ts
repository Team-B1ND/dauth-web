import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  padding: 40px max(40px, calc((100% - 1360px) / 2)) 72px;
  background-color: ${({ theme }) => theme.backgroundNeutral};
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 24px 24px 48px;
    gap: 24px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  > span {
    ${DodamTypography.Caption2.Regular}
    color: ${({ theme }) => theme.labelAssistive};
    white-space: nowrap;

    @media (max-width: 768px) {
      white-space: normal;
    }
  }
`;


export const RightSection = styled.div`
  display: flex;
  gap: 80px;
  align-items: flex-start;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LinkItem = styled.span`
  ${DodamTypography.Caption2.Bold}
  color: ${({ theme }) => theme.labelNeutral};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primaryNormal};
  }
`;