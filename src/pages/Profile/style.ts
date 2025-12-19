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
  padding: 24px max(40px, calc((100% - 1360px) / 2));
  background-color: ${({theme})=> theme.backgroundNeutral};
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 16px 24px;
    gap: 16px;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 280px 280px 1fr;
  gap: 20px;
  width: 100%;
  height: 600px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    height: auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 1024px) {
    grid-column: 1 / -1;
  }
`;

export const MiddleColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    grid-column: 1 / -1;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    grid-column: 1 / -1;
  }
`;
