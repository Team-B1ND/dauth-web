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
  gap: 10px;
  ${DodamTypography.Headline.Bold}
  color: ${({ theme }) => theme.labelNormal};
  margin-bottom: 17px;
`;

export const GraphGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GraphCard = styled.div`
  background-color: ${({ theme }) => theme.fillNormal};
  ${DodamShape.Medium}
  padding: 20px;
  border: none;
  min-height: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const GraphHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const GraphTitle = styled.span`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Label.Bold}
`;

export const ChartContainer = styled.div`
  flex: 1;
  position: relative;
  min-height: 0;
  width: 100%;
  
  canvas {
    max-height: 100%;
    max-width: 100%;
  }
`;