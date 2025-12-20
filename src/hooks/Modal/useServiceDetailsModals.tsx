import { useMemo, ReactNode } from "react";
import ScopesFixModal from "src/components/Profile/ServiceModal/ScopesFixModal";
import SetURLModal from "src/components/Profile/ServiceModal/SetURLModal";
import SetMasterModal from "src/components/Profile/ServiceModal/SetMasterModal";
import FixServiceNameModal from "src/components/Profile/ServiceModal/FixServiceNameModal";
import SelectFrameworkModal from "src/components/Profile/ServiceModal/SelectFrameworkModal";
import ClientCredentialsModal from "src/components/Profile/ServiceModal/ClientCredentialsModal";
import { EScopes } from "src/enum/auth/auth.enum";
import { FrameWork } from "src/types/App/app.type";
import { ModalState } from "src/hooks/Modal/useServiceModals";

export interface UseServiceDetailsModalsParams {
  modals: ModalState;
  closeModal: (modalName: keyof ModalState) => void;
  clientId: string;
  clientSecret: string;
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
  clientSecret,
  serviceName,
  description,
  mainUrl,
  redirectUrl,
  permissions,
  frameworks,
}: UseServiceDetailsModalsParams): ReactNode => {
  return useMemo(
    () => (
      <>
        {modals.serviceName && (
          <FixServiceNameModal
            isOpen={modals.serviceName}
            close={() => closeModal("serviceName")}
            clientId={clientId}
            currentName={serviceName}
            currentDescription={description}
          />
        )}
        {modals.url && (
          <SetURLModal
            isOpen={modals.url}
            close={() => closeModal("url")}
            clientId={clientId}
            currentMainUrl={mainUrl}
            currentRedirectUrl={redirectUrl}
          />
        )}
        {modals.scopes && (
          <ScopesFixModal
            isOpen={modals.scopes}
            close={() => closeModal("scopes")}
            clientId={clientId}
            currentScopes={permissions}
          />
        )}
        {modals.owner && (
          <SetMasterModal
            isOpen={modals.owner}
            close={() => closeModal("owner")}
            clientId={clientId}
          />
        )}
        {modals.frameworks && (
          <SelectFrameworkModal
            isOpen={modals.frameworks}
            close={() => closeModal("frameworks")}
            isEditMode={true}
            clientId={clientId}
            currentFrameworks={frameworks}
          />
        )}
        {modals.credentials && (
          <ClientCredentialsModal
            isOpen={modals.credentials}
            close={() => closeModal("credentials")}
            clientId={clientId}
            clientSecret={clientSecret}
          />
        )}
      </>
    ),
    [
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
    ]
  );
};
