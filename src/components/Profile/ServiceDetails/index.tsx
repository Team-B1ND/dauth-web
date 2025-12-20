import * as S from "./style";
import { ChevronRight, Gear } from "@b1nd/dds-web";
import { EScopes } from "src/enum/auth/auth.enum";
import FrameworkTag from "src/components/common/FrameworkTag";
import { FrameWork } from "src/types/App/app.type";
import { useServiceModals } from "src/hooks/Modal/useServiceModals";
import { useServiceDetailsModals } from "src/hooks/Modal/useServiceDetailsModals";
import { usePermissionsText } from "src/hooks/Scopes/usePermissionsText";
 
export interface ServiceDetailsProps {
  serviceName: string;
  description: string;
  mainUrl: string;
  redirectUrl: string;
  permissions: EScopes[];
  registrationDate: string;
  owner: string;
  clientId: string;
  clientSecret: string;
  frameworks?: FrameWork[];
}

const ServiceDetails = ({
  serviceName,
  description,
  mainUrl,
  redirectUrl,
  permissions,
  registrationDate,
  owner,
  clientId,
  clientSecret,
  frameworks,
}: ServiceDetailsProps) => {
  const { modals, openModal, closeModal } = useServiceModals();
  const permissionsText = usePermissionsText(permissions);

  const modalsComponents = useServiceDetailsModals({
    modals,
    closeModal,
    clientId,
    clientSecret,
    serviceName,
    description,
    mainUrl,
    redirectUrl,
    permissions,
    frameworks,
  });

  return (
    <S.Container>
      <h3>
        <Gear color="labelNormal" /> 서비스 상세 정보
      </h3>

      <S.DetailBox onClick={() => openModal("serviceName")}>
        <S.DetailContent>
          <S.DetailColumn>
            <span>서비스명</span>
            <S.DetailValueLarge>{serviceName}</S.DetailValueLarge>
          </S.DetailColumn>
          <S.DetailColumn>
            <span>설명</span>
            {description ? (
              <p>{description}</p>
            ) : (
              <S.EmptyText>설명이 없습니다</S.EmptyText>
            )}
          </S.DetailColumn>
        </S.DetailContent>
        <ChevronRight color={"lineNormal"} />
      </S.DetailBox>

      <S.DetailBoxRow>
        <S.DetailBox onClick={() => openModal("url")}>
          <S.DetailContent>
            <S.DetailColumn>
              <span>메인 URL</span>
              <p>{mainUrl}</p>
            </S.DetailColumn>
          </S.DetailContent>
          <ChevronRight color={"lineNormal"} />
        </S.DetailBox>

        <S.DetailBox onClick={() => openModal("url")}>
          <S.DetailContent>
            <S.DetailColumn>
              <span>리다이렉트 URL</span>
              <p>{redirectUrl}</p>
            </S.DetailColumn>
          </S.DetailContent>
          <ChevronRight color={"lineNormal"} />
        </S.DetailBox>
      </S.DetailBoxRow>

      <S.DetailBox onClick={() => openModal("scopes")}>
        <S.DetailContent>
          <S.DetailColumn>
            <span>권한</span>
            <p>{permissionsText}</p>
          </S.DetailColumn>
        </S.DetailContent>
        <ChevronRight color={"lineNormal"} />
      </S.DetailBox>

      <S.DetailBox onClick={() => openModal("credentials")}>
        <S.DetailContent>
          <S.DetailColumn>
            <span>클라이언트 인증 정보</span>
            <p>Client ID, Client Secret 보기</p>
          </S.DetailColumn>
        </S.DetailContent>
        <ChevronRight color={"lineNormal"} />
      </S.DetailBox>

      <S.DetailBoxRow>
        <S.DetailBox>
          <S.DetailContent>
            <S.DetailColumn>
              <span>서비스 등록일</span>
              <p>{registrationDate}</p>
            </S.DetailColumn>
          </S.DetailContent>
        </S.DetailBox>

        <S.DetailBox onClick={() => openModal("owner")}>
          <S.DetailContent>
            <S.DetailColumn>
              <span>서비스 주인</span>
              <p>{owner}</p>
            </S.DetailColumn>
          </S.DetailContent>
          <ChevronRight color={"lineNormal"} />
        </S.DetailBox>
      </S.DetailBoxRow>

      <S.DetailBox onClick={() => openModal("frameworks")}>
        <S.DetailContent>
          <S.DetailColumn>
            <span>사용 프레임워크</span>
            {frameworks && frameworks.length > 0 ? (
              <S.WrapFrameworkTag>
                {frameworks.map((framework) => (
                  <FrameworkTag
                    key={framework.id}
                    name={framework.name}
                    color={framework.color}
                  />
                ))}
              </S.WrapFrameworkTag>
            ) : (
              <S.EmptyText>프레임워크가 없습니다</S.EmptyText>
            )}
          </S.DetailColumn>
        </S.DetailContent>
        <ChevronRight color={"lineNormal"} />
      </S.DetailBox>

      {modalsComponents}
    </S.Container>
  );
};

export default ServiceDetails;
