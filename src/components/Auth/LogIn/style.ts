import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img {
    width: 108px;
    height: 108px;
  }
  gap: 24px;
`;
export const PointWord = styled.div`
  ${DodamTypography.Title2.Bold}
  color: ${({ theme }) => theme.primaryNormal};

  span {
    ${DodamTypography.Title2.Medium}
    color: ${({ theme }) => theme.labelNormal};
  }
`;

export const WrapIdAndPassword = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: right;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px;
    height: auto;
  }

  p {
    ${DodamTypography.Label.Medium}
    color: ${({ theme }) => theme.labelAlternative};
    span {
      color: ${({ theme }) => theme.labelNormal};
      text-decoration: underline;
    }
  }
`;

export const WrapButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  span {
    ${DodamTypography.Body2.Bold}
    color: ${({ theme }) => theme.primaryNormal};
    text-decoration: underline;
  }
`;
