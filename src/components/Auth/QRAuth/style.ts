import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const QRContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 108px;
    height: 108px;
    margin-bottom: 24px;
  }
`;

export const PointWord = styled.div`
  ${DodamTypography.Title2.Bold}
  color: ${({ theme }) => theme.primaryNormal};

  span {
    ${DodamTypography.Title2.Medium}
    color: ${({ theme }) => theme.labelNormal};
  }

  margin-bottom: 24px;
`;


export const QRNotice = styled.div`
  color: ${({ theme }) => theme.labelNormal};
  margin-top: 34px;
  ${DodamTypography.Headline.Medium}

  span {
    color: ${({ theme }) => theme.primaryNormal};
    ${DodamTypography.Headline.Bold}
  }
`;

export const LoginLink = styled.div`
  color: ${({ theme }) => theme.primaryNormal};
  ${DodamTypography.Body2.Bold}
  margin-top: 12px;
  text-decoration: underline;
`;
