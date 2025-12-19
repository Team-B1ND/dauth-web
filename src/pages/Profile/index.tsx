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
  usePostAppMutation,
} from "src/queries/App/app.query";
import { useState, useEffect } from "react";
import { App } from "src/types/App/app.type";
import { EScopes } from "src/enum/auth/auth.enum";

const ProfilePage = () => {
  const { data } = useGetMyAppQuery();
  const [selectedService, setSelectedService] = useState<App | null>(null);
  const [isNewServiceModalOpen, setIsNewServiceModalOpen] = useState(false);
  const [isSelectFrameWorkModalOpen, setIsSelectFrameWorkModalOpen] =
    useState(false);
  const [isScopesModalOpen, setIsScopesModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    serviceName: "",
    serviceDescription: "",
    mainUrl: "",
    redirectUrl: "",
    isPublic: false,
  });
  const [selectedFrameworks, setSelectedFrameworks] = useState<number[]>([]);
  const [selectedScopes, setSelectedScopes] = useState<EScopes[]>([]);

  const postAppMutation = usePostAppMutation();

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
    setFormData(data);
    setIsNewServiceModalOpen(false);
    setIsSelectFrameWorkModalOpen(true);
  };

  const handleFrameworksSelect = (frameworks: number[]) => {
    setSelectedFrameworks(frameworks);
    setIsSelectFrameWorkModalOpen(false);
    setIsScopesModalOpen(true);
  };

  const handleScopesSelect = (scopes: EScopes[]) => {
    setSelectedScopes(scopes);
    submitService(selectedFrameworks, scopes);
  };

  const submitService = async (frameworks: number[], scopes: EScopes[]) => {
    const payload = {
      name: formData.serviceName,
      url: formData.mainUrl,
      redirectUrl: formData.redirectUrl,
      description: formData.serviceDescription,
      isPublic: formData.isPublic,
      frameworks: frameworks,
      scopes: scopes,
    };

    try {
      await postAppMutation.mutateAsync(payload);
      setIsSelectFrameWorkModalOpen(false);
      setIsNewServiceModalOpen(false);
      resetModals();
    } catch (error) {
      console.error("서비스 등록 실패:", error);
    }
  };

  const resetModals = () => {
    setFormData({
      serviceName: "",
      serviceDescription: "",
      mainUrl: "",
      redirectUrl: "",
      isPublic: false,
    });
    setSelectedFrameworks([]);
    setSelectedScopes([]);
  };

  return (
    <S.PageContainer>
      <Header />
      <S.MainContent>
        <S.ContentWrapper>
          <S.LeftColumn>
            <ProfileCard
              name="박재민"
              registeredServices={data?.data?.applications?.length || 0}
              joinDate="2025.02.01."
              onOpenNewServiceModal={() => setIsNewServiceModalOpen(true)}
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
        </S.ContentWrapper>
      </S.MainContent>

      {isNewServiceModalOpen && (
        <NewServiceModal
          isOpen={isNewServiceModalOpen}
          close={() => setIsNewServiceModalOpen(false)}
          onNext={handleNextClick}
        />
      )}
      {isSelectFrameWorkModalOpen && (
        <SelectFrameworkModal
          isOpen={isSelectFrameWorkModalOpen}
          close={() => setIsSelectFrameWorkModalOpen(false)}
          onComplete={handleFrameworksSelect}
          isSubmitting={postAppMutation.isPending}
        />
      )}

      {isScopesModalOpen && (
        <ScopesFixModal
          isOpen={isScopesModalOpen}
          close={() => setIsScopesModalOpen(false)}
          onComplete={handleScopesSelect}
        />
      )}

      <Footer />
    </S.PageContainer>
  );
};

export default ProfilePage;
