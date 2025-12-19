import { useState } from "react";

export const useProfileModals = () => {
  const [isNewServiceModalOpen, setIsNewServiceModalOpen] = useState(false);
  const [isSelectFrameWorkModalOpen, setIsSelectFrameWorkModalOpen] =
    useState(false);
  const [isScopesModalOpen, setIsScopesModalOpen] = useState(false);

  const closeAllModals = () => {
    setIsNewServiceModalOpen(false);
    setIsSelectFrameWorkModalOpen(false);
    setIsScopesModalOpen(false);
  };

  const openNewServiceModal = () => setIsNewServiceModalOpen(true);
  const closeNewServiceModal = () => setIsNewServiceModalOpen(false);

  const openSelectFrameworkModal = () => setIsSelectFrameWorkModalOpen(true);
  const closeSelectFrameworkModal = () => setIsSelectFrameWorkModalOpen(false);

  const openScopesModal = () => setIsScopesModalOpen(true);
  const closeScopesModal = () => setIsScopesModalOpen(false);

  // 모달 전환 함수 (배경 깜빡임 방지)
  const transitionToSelectFramework = () => {
    setIsSelectFrameWorkModalOpen(true);
    setIsNewServiceModalOpen(false);
  };

  const transitionToScopes = () => {
    setIsScopesModalOpen(true);
    setIsSelectFrameWorkModalOpen(false);
  };

  return {
    isNewServiceModalOpen,
    isSelectFrameWorkModalOpen,
    isScopesModalOpen,
    openNewServiceModal,
    closeNewServiceModal,
    openSelectFrameworkModal,
    closeSelectFrameworkModal,
    openScopesModal,
    closeScopesModal,
    closeAllModals,
    transitionToSelectFramework,
    transitionToScopes,
  };
};
