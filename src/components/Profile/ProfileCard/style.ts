import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 28px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.Medium}
  width: 280px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px 20px;
  }
`;

export const ProfileImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  > h2 {
    ${DodamTypography.Title2.Bold}
    color: ${({ theme }) => theme.labelNormal};

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
`;

export const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  > span {
    ${DodamTypography.Headline.Medium}
    color: ${({ theme }) => theme.labelNeutral};
  }
  > p {
    ${DodamTypography.Headline.Bold}
    color: ${({ theme }) => theme.labelNormal};
  }
`;

export const RegisterButton = styled.button`
  ${DodamTypography.Body1.Bold}
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.primaryNormal};
  color: ${({ theme }) => theme.staticWhite};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #006acc;
  }
`;