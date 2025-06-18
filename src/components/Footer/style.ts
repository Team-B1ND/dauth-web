import { DodamTypography } from '@b1nd/dds-web';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.lineAlternative};
  padding: 24px 16px;
`;

export const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  @media (min-width: 768px) {
    gap: 12px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 26px;
    align-items: center;
  }
`;

export const LinkSection = styled.div`
  display: flex;
  gap: 24px;
  flex-shrink: 0;
  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px; // 8px → 6px
  min-width: 60px;
  @media (max-width: 480px) {
    flex-direction: row;
    gap: 12px; // 16px → 12px
    flex-wrap: wrap;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.labelAssistive};
  ${DodamTypography.Caption2.Regular}
  text-decoration: none;
  transition: color 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    color: ${({ theme }) => theme.primaryNormal};
  }
`;