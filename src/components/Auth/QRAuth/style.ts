import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const QRContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;

  > img {
    width: 108px;
    height: 108px;
    user-select: none;
    -webkit-user-drag: none;
    pointer-events: none;
  }

  > p {
    ${DodamTypography.Headline.Medium}
    color: ${({ theme }) => theme.labelNormal};
  }
`;

export const PointWord = styled.div`
  ${DodamTypography.Title2.Bold}
  color: ${({ theme }) => theme.primaryNormal};

  span {
    ${DodamTypography.Title2.Medium}
    color: ${({ theme }) => theme.labelNormal};
  }

  strong {
    ${DodamTypography.Title2.Bold}
    color: ${({ theme }) => theme.primaryNormal};
  }
`;

export const QRNotice = styled.div`
  ${DodamTypography.Headline.Medium}
  color: ${({ theme }) => theme.labelNormal};

  span {
    ${DodamTypography.Headline.Bold}
    color: ${({ theme }) => theme.primaryNormal};
  }
`;

export const LoginLink = styled.div`
  ${DodamTypography.Body2.Bold}
  color: ${({ theme }) => theme.primaryNormal};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const GoIdLink = styled.span`
  ${DodamTypography.Body2.Bold}
  color: ${({ theme }) => theme.primaryNormal};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.p`
  ${DodamTypography.Headline.Medium}
  color: ${({ theme }) => theme.statusNegative};
`;