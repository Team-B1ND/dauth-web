import ServiceCard, { ServiceCardProps } from "../ServiceCard";
import * as S from "../ServiceCardGrid/style";
import { useGetAppsQuery } from "src/queries/App/app.query";
import { HomeSkeleton } from "src/components/common/Skeleton";

const AllServiceList = () => {
  const { data, isLoading, error } = useGetAppsQuery();

  const services: ServiceCardProps[] = (data?.data || []).map((app) => ({
    title: app.name,
    url: app.url,
    description: app.description,
    date: app.createdAt,
    author: app.ownerId,
  }));

  return (
    <S.Section>
      <S.SectionHeader>
        <h2>전체 서비스 목록</h2>
        <span>{services.length}개의 서비스</span>
      </S.SectionHeader>
      <S.Grid>
        {isLoading ? (
          <HomeSkeleton />
        ) : services.length > 0 ? (
          services.map((service, idx) => <ServiceCard key={idx} {...service} />)
        ) : (
          <p>등록된 서비스가 없습니다.</p>
        )}
      </S.Grid>
    </S.Section>
  );
};

export default AllServiceList;
