import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;

  img {
    width: 108px;
    height: 108px;
    user-select: none;
    -webkit-user-drag: none;
    pointer-events: none;
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

export const WrapIdAndPassword = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: right;
  width: 304px;

  /* DodamTextField border 위치 수정 */
  > div {
    border-bottom: 2px solid ${({ theme }) => theme.lineNormal};
    transition: border-color 0.2s ease;

    &:focus-within {
      border-bottom-color: ${({ theme }) => theme.primaryNormal};
    }

    input {
      border: none !important;
      border-bottom: none !important;
      outline: none;
    }
  }
`;

export const WrapButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 304px;

  > span {
    ${DodamTypography.Body2.Bold}
    color: ${({ theme }) => theme.primaryNormal};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LoginButton = styled.button`
  ${DodamTypography.Body1.Bold}
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.primaryNormal};
  color: ${({ theme }) => theme.staticWhite};
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover:not(:disabled) {
    background: #006acc;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    background: rgba(0, 131, 240, 0.4);
    color: ${({ theme }) => theme.staticWhite};
    cursor: not-allowed;
  }
`;
