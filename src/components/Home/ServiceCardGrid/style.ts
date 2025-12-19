import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  > h2 {
    ${DodamTypography.Heading1.Bold}
    color: ${({theme})=> theme.labelNeutral};
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  > span {
    ${DodamTypography.Headline.Medium}
    color: ${({ theme }) => theme.primaryNormal};
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;
