import * as S from './style'
import { Megaphone, People } from '@b1nd/dds-web';

interface ServiceSituationData {
  totalUsers: number;
  activeFrameworks: number;
  totalServices: number;
}

interface ServiceSituationProps {
  data?: ServiceSituationData;
}

const ServiceSituation = ({ data }: ServiceSituationProps) => {
  const defaultData: ServiceSituationData = {
    totalUsers: 3,
    activeFrameworks: 3,
    totalServices: 3
  };

  const currentData = data || defaultData;

  return (
    <S.SectionContainer>
      <S.SectionTitle>
        <Megaphone color='labelNormal'/>
        서비스 현황
      </S.SectionTitle>
      <S.StatGrid>
        <S.StatCard>
          <S.StatHeader>
            <People color='labelNormal'/>
            <S.StatTitle>전체 사용자 수</S.StatTitle>
          </S.StatHeader>
          <S.StatValue>{currentData.totalUsers}명</S.StatValue>
        </S.StatCard>
        <S.StatCard>
          <S.StatHeader>
            <People color='labelNormal'/>
            <S.StatTitle>활성 프레임워크 수</S.StatTitle>
          </S.StatHeader>
          <S.StatValue>{currentData.activeFrameworks}개</S.StatValue>
        </S.StatCard>
        <S.StatCard>
          <S.StatHeader>
            <People color='labelNormal'/>
            <S.StatTitle>등록된 서비스 수</S.StatTitle>
          </S.StatHeader>
          <S.StatValue>{currentData.totalServices}개</S.StatValue>
        </S.StatCard>
      </S.StatGrid>
    </S.SectionContainer>
  );
};

export default ServiceSituation;