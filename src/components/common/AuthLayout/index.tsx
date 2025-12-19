import { ReactNode } from "react";
import styled from "styled-components";
import { DodamShape } from "@b1nd/dds-web";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default AuthLayout;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundNeutral};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 25em;
  min-height: 520px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  padding: 48px 60px;
  ${DodamShape.Large}
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
