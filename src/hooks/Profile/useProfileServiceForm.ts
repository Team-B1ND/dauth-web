import { useState } from "react";
import { EScopes } from "src/enum/auth/auth.enum";

export interface ServiceFormData {
  serviceName: string;
  serviceDescription: string;
  mainUrl: string;
  redirectUrl: string;
  isPublic: boolean;
}

const initialFormData: ServiceFormData = {
  serviceName: "",
  serviceDescription: "",
  mainUrl: "",
  redirectUrl: "",
  isPublic: false,
};

export const useProfileServiceForm = () => {
  const [formData, setFormData] = useState<ServiceFormData>(initialFormData);
  const [selectedFrameworks, setSelectedFrameworks] = useState<number[]>([]);
  const [selectedScopes, setSelectedScopes] = useState<EScopes[]>([]);

  const updateFormData = (data: ServiceFormData) => {
    setFormData(data);
  };

  const updateFrameworks = (frameworks: number[]) => {
    setSelectedFrameworks(frameworks);
  };

  const updateScopes = (scopes: EScopes[]) => {
    setSelectedScopes(scopes);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setSelectedFrameworks([]);
    setSelectedScopes([]);
  };

  return {
    formData,
    selectedFrameworks,
    selectedScopes,
    updateFormData,
    updateFrameworks,
    updateScopes,
    resetForm,
  };
};
