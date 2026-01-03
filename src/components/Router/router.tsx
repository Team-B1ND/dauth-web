import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "src/pages/Home";
import ProfilePage from "src/pages/Profile";
import LoginQRPage from "src/pages/Login/QR";
import LoginIDPage from "src/pages/Login/Id";
import OAuthCallbackPage from "src/pages/OAuth/Callback";
import oauth from "src/libs/OAuth/oauth";
import ServiceListPage from "src/pages/ServiceList";

const LoginRedirect = () => {
  const location = useLocation();
  return <Navigate to={`/login/id${location.search}`} replace />;
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!oauth.isLoggedIn()) {
    oauth.startOAuthLogin();
    return null;
  }
  return <>{children}</>;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginRedirect />} />
        <Route path="/login/qr" element={<LoginQRPage />} />
        <Route path="/login/id" element={<LoginIDPage />} />
        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="/oauth/callback" element={<OAuthCallbackPage />} />
        <Route path="/service/list" element={<ServiceListPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
