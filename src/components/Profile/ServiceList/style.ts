import { DodamTypography, DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  width: 280px;

  @media (max-width: 768px) {
    width: 100%;
  }
  > h3 {
    ${DodamTypography.Heading1.Bold}
    color: ${({ theme }) => theme.labelNeutral};
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  overflow-y: auto;
  max-height: 800px;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    max-height: none;
  }
`;

export const ListItem = styled.div<{ $isHighlighted?: boolean }>`
  padding: 12px 20px;
  background-color: ${(props) =>
    props.$isHighlighted
      ? props.theme.primaryNormal
      : props.theme.backgroundNormal};
  color: ${(props) =>
    props.$isHighlighted ? props.theme.staticWhite : props.theme.labelNormal};
  ${DodamShape.Medium}
  cursor: pointer;
  ${DodamTypography.Headline.Bold}
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) =>
      props.$isHighlighted
        ? props.theme.primaryNormal
        : props.theme.fillAlternative};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 16px;
  }
`;
