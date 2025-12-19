import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${({theme})=> theme.backgroundNormal};
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  padding: 24px 40px;
  background-color: ${({theme})=> theme.backgroundNeutral};
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 16px 24px;
    gap: 16px;
  }
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;
