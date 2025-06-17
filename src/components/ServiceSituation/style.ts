import { DodamShape, DodamTypography } from '@b1nd/dds-web';
import styled from 'styled-components';

export const SectionContainer = styled.section`
  margin-bottom: 2%;
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.Large}
  padding: 20px;
`;

export const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 8px;
  ${DodamTypography.Headline.Bold}
  color: ${({ theme }) => theme.labelNormal};
  margin-bottom: 17px;
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StatCard = styled.div`
  background-color: ${({ theme }) => theme.fillNormal};
  ${DodamShape.Medium}
  padding: 20px;
  border: none;
`;

export const StatHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

export const StatTitle = styled.span`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Label.Bold}
`;

export const StatValue = styled.div`
  color: ${({ theme }) => theme.primaryNormal};
  ${DodamTypography.Title2.Bold}
`;