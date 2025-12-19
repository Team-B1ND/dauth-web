import ServiceCard, { ServiceCardProps } from "../ServiceCard";
import * as S from "./style";
import { useGetAppsQuery } from "src/queries/App/app.query";
import { HomeSkeleton } from "src/components/common/Skeleton";

const ServiceCardGrid = () => {
  const { data, isLoading, error } = useGetAppsQuery();

  const services: ServiceCardProps[] = (data?.data || [])
    .slice(0, 6)
    .map((app) => ({
      title: app.name,
      url: app.url,
      description: app.description,
      date: app.createdAt,
      author: app.ownerId,
    }));

  return (
    <S.Section>
      <S.SectionHeader>
        <h2>사용 서비스</h2>
        <span>더보기</span>
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

export default ServiceCardGrid;
