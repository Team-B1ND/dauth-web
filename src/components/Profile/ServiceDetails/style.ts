import { DodamTypography, DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
  > h3 {
    ${DodamTypography.Heading1.Bold}
    color: ${({ theme }) => theme.labelNeutral};
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;


export const DetailBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.Medium}
  height: 96px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    gap: 12px;
  }
`;

export const DetailBoxRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailContent = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 20px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DetailColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  white-space: nowrap;

  @media (max-width: 768px) {
    white-space: normal;
  }

  > span {
    ${DodamTypography.Body2.Medium}
    color: ${({ theme }) => theme.labelAlternative};
  }

  > p {
    ${DodamTypography.Heading2.Medium}
    color: ${({ theme }) => theme.labelNeutral};
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;


export const DetailValueLarge = styled.div`
${DodamTypography.Heading1.Bold}
color: ${({theme})=> theme.labelNormal};

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const WrapFrameworkTag = styled.div`
  display: flex;
  gap: 4px;
`