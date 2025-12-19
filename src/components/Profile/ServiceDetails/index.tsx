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
  frameworks,
}: ServiceDetailsProps) => {
  const { modals, openModal, closeModal } = useServiceModals();
  const permissionsText = usePermissionsText(permissions);

  const modalsComponents = useServiceDetailsModals({
    modals,
    closeModal,
    clientId,
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

      <S.DetailBox>
        <S.DetailContent>
          <S.DetailColumn>
            <span>서비스명</span>
            <S.DetailValueLarge>{serviceName}</S.DetailValueLarge>
          </S.DetailColumn>
          <S.DetailColumn>
            <span>설명</span>
            <p>{description}</p>
          </S.DetailColumn>
        </S.DetailContent>
        <div onClick={() => openModal("serviceName")}>
          <ChevronRight color={"lineNormal"} />
        </div>
      </S.DetailBox>

      <S.DetailBoxRow>
        <S.DetailBox>
          <S.DetailContent>
            <S.DetailColumn>
              <span>메인 URL</span>
              <p>{mainUrl}</p>
            </S.DetailColumn>
          </S.DetailContent>
          <div onClick={() => openModal("url")}>
            <ChevronRight color={"lineNormal"} />
          </div>
        </S.DetailBox>

        <S.DetailBox>
          <S.DetailContent>
            <S.DetailColumn>
              <span>리다이렉트 URL</span>
              <p>{redirectUrl}</p>
            </S.DetailColumn>
          </S.DetailContent>
          <div onClick={() => openModal("url")}>
            <ChevronRight color={"lineNormal"} />
          </div>
        </S.DetailBox>
      </S.DetailBoxRow>

      <S.DetailBox>
        <S.DetailContent>
          <S.DetailColumn>
            <span>권한</span>
            <p>{permissionsText}</p>
          </S.DetailColumn>
        </S.DetailContent>
        <div onClick={() => openModal("scopes")}>
          <ChevronRight color={"lineNormal"} />
        </div>
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

        <S.DetailBox>
          <S.DetailContent>
            <S.DetailColumn>
              <span>서비스 주인</span>
              <p>{owner}</p>
            </S.DetailColumn>
          </S.DetailContent>
          <div onClick={() => openModal("owner")}>
            <ChevronRight color={"lineNormal"} />
          </div>
        </S.DetailBox>
      </S.DetailBoxRow>

      <S.DetailBox>
        <S.DetailContent>
          <S.DetailColumn>
            <span>사용 프레임워크</span>
            <S.WrapFrameworkTag>
              {frameworks?.map((framework) => (
                <FrameworkTag
                  key={framework.id}
                  name={framework.name}
                  color={framework.color}
                />
              ))}
            </S.WrapFrameworkTag>
          </S.DetailColumn>
        </S.DetailContent>
        <div onClick={() => openModal("frameworks")}>
          <ChevronRight color={"lineNormal"} />
        </div>
      </S.DetailBox>

      {modalsComponents}
    </S.Container>
  );
};

export default ServiceDetails;
