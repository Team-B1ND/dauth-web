import { DodamTypography, DodamShape} from "@b1nd/dds-web";
import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 24px;
  background: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.Large}
  flex: 1;
  min-height: 166px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 16px 20px;
  }

  > h1 {
    ${DodamTypography.Title2.Bold}
    color: ${({ theme }) => theme.labelNormal};

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;


export const CardUrl = styled.p`
  ${DodamTypography.Body2.Medium}
  color: ${({ theme }) => theme.labelAssistive};
`;

export const CardDescription = styled.p`
  ${DodamTypography.Heading2.Medium}
  color: ${({ theme }) => theme.labelNeutral};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  span{
    ${DodamTypography.Caption1.Medium}
    color: ${({ theme }) => theme.labelAlternative};
  }
`;