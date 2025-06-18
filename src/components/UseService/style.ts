import { DodamShape, DodamTypography } from '@b1nd/dds-web';
import styled from 'styled-components';

export const SectionContainer = styled.section`
  margin-bottom: 16px;
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
    width: 10px;
    height: 10px;
    margin: 0 6px;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.primaryNormal};
    opacity: 1;
    width: 10px;
    height: 10px;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
`;

export const ServiceCard = styled.div`
  background-color: ${({ theme }) => theme.fillNormal};
  ${DodamShape.Medium}
  padding: 20px;
  border: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 330px;
  max-width: 330px;
`;

export const ServiceName = styled.h3`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Title2.Bold}
  margin-bottom: 6px;
`;

export const ServiceUrl = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Body1.Regular}
  margin-bottom: 12px;
  flex-grow: 1;
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-top: auto;
`;