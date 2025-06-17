import { DodamShape, DodamTypography } from '@b1nd/dds-web';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 54px;
  border-bottom: 1px solid ${({ theme }) => theme.lineAlternative};
  ${({ theme }) => theme.backgroundNormal};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

// 더미 데이터
export const LoginButton = styled.button`
  background-color: #0083F0;
  color: white;
  padding: 8px 16px;
  border: none;
  ${DodamShape.Medium}
  ${DodamTypography.Body1.Bold}
  cursor: pointer;
`;