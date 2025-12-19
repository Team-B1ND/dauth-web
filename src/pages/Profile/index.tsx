import Header from "src/components/common/Header";
import ProfileCard from "src/components/Profile/ProfileCard";
import ServiceList from "src/components/Profile/ServiceList";
import ServiceDetails from "src/components/Profile/ServiceDetails";
import Footer from "src/components/common/Footer";
import NewServiceModal from "src/components/Profile/ServiceModal/NewServiceModal";
import SelectFrameworkModal from "src/components/Profile/ServiceModal/SelectFrameworkModal";
import ScopesFixModal from "src/components/Profile/ServiceModal/ScopesFixModal";
import * as S from "./style";
import {
  useGetMyAppQuery,
  useGetUserInfoQuery,
  usePostAppMutation,
} from "src/queries/App/app.query";
import { useEffect } from "react";
import { useState } from "react";
import { App } from "src/types/App/app.type";
import { useProfileModals } from "src/hooks/Profile/useProfileModals";
import { useProfileServiceForm } from "src/hooks/Profile/useProfileServiceForm";
import { ProfileSkeleton } from "src/components/common/Skeleton";

const ProfilePage = () => {
  const { data, isLoading } = useGetMyAppQuery();
  const { data: userInfo } = useGetUserInfoQuery();
  const [selectedService, setSelectedService] = useState<App | null>(null);

  const {
    isNewServiceModalOpen,
    isSelectFrameWorkModalOpen,
    isScopesModalOpen,
    openNewServiceModal,
    closeNewServiceModal,
    closeSelectFrameworkModal,
    closeScopesModal,
    closeAllModals,
    transitionToSelectFramework,
    transitionToScopes,
  } = useProfileModals();

  const {
    formData,
    selectedFrameworks,
    selectedScopes,
    updateFormData,
    updateFrameworks,
    updateScopes,
    resetForm,
  } = useProfileServiceForm();

  const postAppMutation = usePostAppMutation(() => {
    closeAllModals();
    resetForm();
  });

  useEffect(() => {
    if (
      data?.data?.applications &&
      data.data.applications.length > 0 &&
      !selectedService
    ) {
      setSelectedService(data.data.applications[0]);
    }
  }, [data, selectedService]);

  const handleNextClick = (data: typeof formData) => {
    updateFormData(data);
    transitionToSelectFramework();
  };

  const handleFrameworksSelect = (frameworks: number[]) => {
    updateFrameworks(frameworks);
    transitionToScopes();
  };

  const handleScopesSelect = (scopes: any) => {
    updateScopes(scopes);
    submitService(selectedFrameworks, scopes);
  };

  const submitService = (frameworks: number[], scopes: any) => {
    const payload = {
      name: formData.serviceName,
      url: formData.mainUrl,
      redirectUrl: formData.redirectUrl,
      description: formData.serviceDescription,
      isPublic: formData.isPublic,
      frameworks: frameworks,
      scopes: scopes,
    };
    postAppMutation.mutate(payload);
  };

  return (
    <S.PageContainer>
      <Header />
      <S.MainContent>
        <S.ContentWrapper>
          {isLoading ? (
            <ProfileSkeleton />
          ) : (
            <>
              <S.LeftColumn>
                <ProfileCard
                  name={userInfo?.data?.name || ""}
                  profileImage={userInfo?.data?.profileImage}
                  registeredServices={data?.data?.applications?.length || 0}
                  onOpenNewServiceModal={openNewServiceModal}
                />
              </S.LeftColumn>

              <S.MiddleColumn>
                <ServiceList onSelectService={setSelectedService} />
              </S.MiddleColumn>

              <S.RightColumn>
                {selectedService ? (
                  <ServiceDetails
                    serviceName={selectedService.name}
                    description={selectedService.description}
                    mainUrl={selectedService.url}
                    redirectUrl={selectedService.redirectUrl}
                    permissions={selectedService.scopes}
                    registrationDate={selectedService.createdAt}
                    owner={selectedService.ownerId}
                    clientId={selectedService.clientId}
                    frameworks={selectedService.frameworks}
                  />
                ) : (
                  <div style={{ padding: "20px", textAlign: "center" }}>
                    서비스를 선택해주세요.
                  </div>
                )}
              </S.RightColumn>
            </>
          )}
        </S.ContentWrapper>
      </S.MainContent>

      {isNewServiceModalOpen && (
        <NewServiceModal
          isOpen={isNewServiceModalOpen}
          close={closeNewServiceModal}
          onNext={handleNextClick}
        />
      )}
      {isSelectFrameWorkModalOpen && (
        <SelectFrameworkModal
          isOpen={isSelectFrameWorkModalOpen}
          close={closeSelectFrameworkModal}
          onComplete={handleFrameworksSelect}
        />
      )}

      {isScopesModalOpen && (
        <ScopesFixModal
          isOpen={isScopesModalOpen}
          close={closeScopesModal}
          onComplete={handleScopesSelect}
        />
      )}

      <Footer />
    </S.PageContainer>
  );
};

export default ProfilePage;
