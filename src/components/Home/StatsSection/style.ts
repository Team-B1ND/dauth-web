import styled from "styled-components";
import { DodamTypography,DodamShape } from "@b1nd/dds-web";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  min-height: 280px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  background-color: ${({theme}) => theme.fillNormal};
  ${DodamShape.Large}
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const StatTitle = styled.h3`
  ${DodamTypography.Heading1.Bold}
  color: ${({ theme }) => theme.labelNeutral};
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const StatGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 18px 20px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.Large}
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    padding: 12px 16px;
  }
  > span {
    ${DodamTypography.Body1.Bold}
    color: ${({ theme }) => theme.labelNeutral}
  }
  > p {
    ${DodamTypography.Title1.Bold}
    color: ${({ theme }) => theme.primaryNormal};

    @media (max-width: 768px) {
      font-size: 24px;
      letter-spacing: -0.72px;
    }
  }
`;


export const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.Large}
  padding: 10px;

  > p {
    ${DodamTypography.Heading2.Bold}
    color: ${({ theme }) => theme.labelNeutral};

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;



export const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  ${DodamShape.Large}
  justify-content: center;

  @media (max-width: 768px) {
    padding: 16px;
    gap: 12px;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 20px 24px;
    background-color: ${({ theme }) => theme.backgroundNormal};
    border: none;
    ${DodamShape.Large}
    cursor: pointer;
    color: ${({ theme }) => theme.primaryNormal};
    ${DodamTypography.Heading2.Bold}

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 16px 20px;
    }
  }
`;


export const DocsCTA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 48px;
  background-color: ${({ theme }) => theme.primaryNormal};
  ${DodamShape.Large}
  justify-content: center;

  > h4 {
    ${DodamTypography.Heading1.Bold}
    color: ${({ theme }) => theme.staticWhite};
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  > span {
    display: inline;
    ${DodamTypography.Title1.Bold}
    font-size: 64px;
    cursor: pointer;
    color: ${({ theme }) => theme.staticWhite};
    @media (max-width: 768px) {
      font-size: 36px;
      letter-spacing: -1.08px;
    }
  }
`;
