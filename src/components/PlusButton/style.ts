import { DodamShape } from '@b1nd/dds-web';
import styled from 'styled-components';

export const SectionContainer = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  height: 50px;
  width: 50px;
  background-color: ${({ theme }) => theme.primaryNormal};
  ${DodamShape.ExtraSmall}
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
`;