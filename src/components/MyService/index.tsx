import * as S from './style'
import { People, SmilingFace } from '@b1nd/dds-web';

interface Application {
  name: string;
  url: string;
  redirectUrl: string;
  clientId: string;
  clientSecret: string;
  frameworks: string[];
}

interface MyServiceApiResponse {
  user: number;
  applications: Application[];
}

interface MyServiceProps {
  data?: MyServiceApiResponse;
}

const MyService = ({ data }: MyServiceProps) => {
  const defaultData: MyServiceApiResponse = {
    user: 3,
    applications: [
      {
        name: "테스트 앱",
        url: "https://test.com",
        redirectUrl: "https://test.com/callback",
        clientId: "test-client-id",
        clientSecret: "test-client-secret",
        frameworks: ["React", "Spring"]
      },
      {
        name: "테스트 앱22222",
        url: "https://test.com",
        redirectUrl: "https://test.com/callback",
        clientId: "test-client-id",
        clientSecret: "test-client-secret",
        frameworks: ["React", "Spring"]
      }
    ]
  };

  const currentData = data || defaultData;

  return (
    <S.SectionContainer>
      <S.SectionTitle>
        <SmilingFace/>
        내 서비스
      </S.SectionTitle>
      <S.StatGrid>
        <S.StatCard>
          <S.StatHeader>
            <People color='labelNormal'/>
            <S.StatTitle>전체 사용자 수</S.StatTitle>
          </S.StatHeader>
          <S.StatValue>{currentData.user}명</S.StatValue>
        </S.StatCard>
        <S.StatCard>
          <S.StatHeader>
            <People color='labelNormal'/>
            <S.StatTitle>등록된 서비스 수</S.StatTitle>
          </S.StatHeader>
          <S.StatValue>{currentData.applications.length}개</S.StatValue>
        </S.StatCard>
      </S.StatGrid>
    </S.SectionContainer>
  );
};

export default MyService;