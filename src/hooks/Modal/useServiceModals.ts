import { useState } from "react";

export interface ModalState {
  serviceName: boolean;
  url: boolean;
  scopes: boolean;
  frameworks: boolean;
  owner: boolean;
  credentials: boolean;
}

export const useServiceModals = () => {
  const [modals, setModals] = useState<ModalState>({
    serviceName: false,
    url: false,
    scopes: false,
    frameworks: false,
    owner: false,
    credentials: false,
  });

  const openModal = (modalName: keyof ModalState) => {
    setModals((prev) => ({ ...prev, [modalName]: true }));
  };

  const closeModal = (modalName: keyof ModalState) => {
    setModals((prev) => ({ ...prev, [modalName]: false }));
  };

  const closeAll = () => {
    setModals({
      serviceName: false,
      url: false,
      scopes: false,
      frameworks: false,
      owner: false,
      credentials: false,
    });
  };

  return { modals, openModal, closeModal, closeAll };
};
