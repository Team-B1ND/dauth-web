import { DodamCheckBox, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

interface CheckItemProps {
  text: string;
  isChecked?: boolean;
  onChange?: () => void;
  typography?: "Heading" | "Body";
}

const CheckItem = ({
  text,
  isChecked = false,
  onChange,
  typography = "Heading",
}: CheckItemProps) => {
  return (
    <CheckContainer $typography={typography} onClick={onChange}>
      <DodamCheckBox
        isDisabled={isChecked}
        onClick={(e) => {
          e.stopPropagation();
          onChange?.();
        }}
      />
      <p>{text}</p>
    </CheckContainer>
  );
};

export default CheckItem;

const CheckContainer = styled.div<{ $typography?: "Heading" | "Body" }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  > p {
    ${({ $typography }) =>
      $typography === "Body"
        ? DodamTypography.Body1.Bold
        : DodamTypography.Heading1.Medium}
    color: ${({ theme }) => theme.labelNormal};
  }
`;
