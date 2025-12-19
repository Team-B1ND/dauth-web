import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 40px;
  background-color: ${({theme})=> theme.backgroundNormal};
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 16px 24px;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  > p {
    ${DodamTypography.Title2.Bold}
    color: ${({ theme }) => theme.primaryNormal};
  }
`;
