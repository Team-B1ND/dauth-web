import * as S from "./style";
import { BarChart } from "@b1nd/dds-web";
import { useGetMyAppQuery } from "src/queries/App/app.query";
import { App } from "src/types/App/app.type";
import { useState, useEffect } from "react";

export interface ServiceItem {
  name: string;
  isHighlighted?: boolean;
}

export interface ServiceListProps {
  services?: ServiceItem[];
  onSelectService?: (service: App) => void;
}

const ServiceList = ({ services, onSelectService }: ServiceListProps) => {
  const { data, isLoading, error } = useGetMyAppQuery();
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    if (
      data?.data?.applications &&
      data.data.applications.length > 0 &&
      onSelectService
    ) {
      onSelectService(data.data.applications[0]);
    }
  }, [data, onSelectService]);

  const myServices: ServiceItem[] = (data?.data?.applications || []).map(
    (app, idx) => ({
      name: app.name,
      isHighlighted: idx === selectedIdx,
    })
  );

  const displayServices =
    services && services.length > 0 ? services : myServices;

  const handleServiceClick = (idx: number) => {
    setSelectedIdx(idx);
    if (onSelectService && data?.data?.applications) {
      onSelectService(data.data.applications[idx]);
    }
  };

  return (
    <S.Container>
      <h3>
        <BarChart /> 내가 등록한 서비스
      </h3>
      <S.ListWrapper>
        {isLoading ? (
          <p>로딩 중...</p>
        ) : displayServices.length > 0 ? (
          displayServices.map((service, idx) => (
            <S.ListItem
              key={idx}
              $isHighlighted={service.isHighlighted}
              onClick={() => handleServiceClick(idx)}
              style={{ cursor: "pointer" }}
            >
              {service.name}
            </S.ListItem>
          ))
        ) : (
          <p>등록한 서비스가 없습니다.</p>
        )}
      </S.ListWrapper>
    </S.Container>
  );
};

export default ServiceList;
