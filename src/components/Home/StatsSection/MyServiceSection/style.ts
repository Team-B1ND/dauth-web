import styled from "styled-components";
import { DodamTypography, DodamShape } from "@b1nd/dds-web";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.primaryNormal};
  ${DodamShape.Large}
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Title = styled.span`
  ${DodamTypography.Heading2.Medium}
  color: ${({ theme }) => theme.staticWhite};

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Count = styled.span`
  ${DodamTypography.Title2.Bold}
  font-size: 40px;
  color: ${({ theme }) => theme.staticWhite};

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.Large}
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;

export const ServiceName = styled.span`
  ${DodamTypography.Heading2.Medium}
  color: ${({ theme }) => theme.labelNeutral};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const LoadingText = styled.p`
  ${DodamTypography.Heading2.Medium}
  color: ${({ theme }) => theme.labelNeutral};
  text-align: center;
  padding: 20px;
`;

export const EmptyText = styled.p`
  ${DodamTypography.Heading2.Medium}
  color: ${({ theme }) => theme.labelAlternative};
  text-align: center;
  padding: 20px;
`;
