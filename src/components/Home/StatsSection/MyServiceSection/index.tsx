import * as S from "./style";
import { useGetMyAppQuery } from "src/queries/App/app.query";

const MyServiceSection = () => {
  const { data, isLoading } = useGetMyAppQuery();
  
  const myServices = data?.data?.applications || [];
  const totalCount = myServices.length;

  return (
    <S.Container>
      <S.Header>
        <S.Title>총 서비스 수</S.Title>
        <S.Count>{totalCount}개</S.Count>
      </S.Header>
      <S.ServiceList>
        {isLoading ? (
          <S.LoadingText>로딩 중...</S.LoadingText>
        ) : myServices.length > 0 ? (
          myServices.slice(0, 3).map((service, idx) => (
            <S.ServiceItem key={idx}>
              <S.ServiceName>{service.name}</S.ServiceName>
            </S.ServiceItem>
          ))
        ) : (
          <S.EmptyText>등록된 서비스가 없습니다.</S.EmptyText>
        )}
      </S.ServiceList>
    </S.Container>
  );
};

export default MyServiceSection;