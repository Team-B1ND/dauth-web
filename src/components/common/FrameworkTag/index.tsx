import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

interface FrameworkTagProps{
  name: string;
  color: string;
}

const FrameworkTag = ({ name, color }: FrameworkTagProps) => {
  return(
    <TagContainer color={color}>
      <p>{name}</p>
    </TagContainer>
  )
}

export default FrameworkTag;

const TagContainer = styled.div<{ color: string}>`
  padding: 8px 12px;
  background-color: ${({color}) => color};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 33px;
  > p{
    color: #fff;
    ${DodamTypography.Caption1.Medium}
  }
`