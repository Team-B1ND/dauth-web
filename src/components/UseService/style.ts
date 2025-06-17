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

export const SwiperContainer = styled.div`
  .swiper {
    padding-bottom: 40px;
  }

  .swiper-slide {
    height: auto;
    display: flex;
  }

  .swiper-pagination {
    bottom: 0px;
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.labelNormal};
    opacity: 1;
    width: 11px;
    height: 11px;
    margin: 0 6px;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.primaryNormal};
    opacity: 1;
    width: 11px;
    height: 11px;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
`;

export const ServiceGrid = styled.div`
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

export const ServiceCard = styled.div`
  background-color: ${({ theme }) => theme.fillNormal};;
  ${DodamShape.Medium}
  padding: 20px;
  border: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 370px;
  max-width: 370px;
`;

export const ServiceName = styled.h3`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Title2.Bold}
  margin-bottom: 8px;
`;

export const ServiceUrl = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Headline.Regular}
  margin-bottom: 16px;
  flex-grow: 1;
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-top: auto;
`;

export const Tag = styled.span<{ color: string }>`
  background-color: ${props => props.color};
  color: #fff;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
`;