import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 max(40px, calc((100% - 1360px) / 2));
  background-color: ${({ theme }) => theme.backgroundNormal};
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 68px;
    padding: 0 24px;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  > img {
    height: 32px;
    width: auto;
  }
`;

export const ProfileWrapper = styled.div`
  position: relative;

  &:hover > div:last-child {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 4px 12px;
  height: 40px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.fillNormal};
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  min-width: 120px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
  z-index: 100;
  overflow: hidden;
`;

export const DropdownItem = styled.button`
  ${DodamTypography.Body2.Medium}
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.labelNormal};
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.fillAlternative};
  }
`;

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserName = styled.span`
  ${DodamTypography.Body2.Medium}
  color: ${({ theme }) => theme.labelNormal};
`;
