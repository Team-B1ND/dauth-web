import { useMemo, ReactNode } from "react";
import ScopesFixModal from "src/components/Profile/ServiceModal/ScopesFixModal";
import SetURLModal from "src/components/Profile/ServiceModal/SetURLModal";
import SetMasterModal from "src/components/Profile/ServiceModal/SetMasterModal";
import FixServiceNameModal from "src/components/Profile/ServiceModal/FixServiceNameModal";
import SelectFrameworkModal from "src/components/Profile/ServiceModal/SelectFrameworkModal";
import { EScopes } from "src/enum/auth/auth.enum";
import { FrameWork } from "src/types/App/app.type";
import { ModalState } from "src/hooks/Modal/useServiceModals";

export interface UseServiceDetailsModalsParams {
  modals: ModalState;
  closeModal: (modalName: keyof ModalState) => void;
  clientId: string;
  serviceName: string;
  description: string;
  mainUrl: string;
  redirectUrl: string;
  permissions: EScopes[];
  frameworks?: FrameWork[];
}


export const useServiceDetailsModals = ({
  modals,
  closeModal,
  clientId,
  serviceName,
  description,
  mainUrl,
  redirectUrl,
  permissions,
  frameworks,
}: UseServiceDetailsModalsParams): (JSX.Element | null)[] => {
  const modalConfigs = useMemo(
    () => ({
      serviceName: modals.serviceName ? (
        <FixServiceNameModal
          isOpen={modals.serviceName}
          close={() => closeModal("serviceName")}
          clientId={clientId}
          currentName={serviceName}
          currentDescription={description}
        />
      ) : null,
      url: modals.url ? (
        <SetURLModal
          isOpen={modals.url}
          close={() => closeModal("url")}
          clientId={clientId}
          currentMainUrl={mainUrl}
          currentRedirectUrl={redirectUrl}
        />
      ) : null,
      scopes: modals.scopes ? (
        <ScopesFixModal
          isOpen={modals.scopes}
          close={() => closeModal("scopes")}
          clientId={clientId}
          currentScopes={permissions}
        />
      ) : null,
      owner: modals.owner ? (
        <SetMasterModal
          isOpen={modals.owner}
          close={() => closeModal("owner")}
          clientId={clientId}
        />
      ) : null,
      frameworks: modals.frameworks ? (
        <SelectFrameworkModal
          isOpen={modals.frameworks}
          close={() => closeModal("frameworks")}
          isEditMode={true}
          clientId={clientId}
          currentFrameworks={frameworks}
        />
      ) : null,
    }),
    [
      modals,
      closeModal,
      clientId,
      serviceName,
      description,
      mainUrl,
      redirectUrl,
      permissions,
      frameworks,
    ]
  );

  return Object.values(modalConfigs);
};
