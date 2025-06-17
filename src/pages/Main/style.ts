import styled from 'styled-components';

export const MainBox = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.backgroundNeutral};;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const BodyBox = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 0;
  width: 100%;
  flex: 1;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;
