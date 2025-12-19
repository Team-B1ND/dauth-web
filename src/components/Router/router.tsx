import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "src/pages/Home";
import ProfilePage from "src/pages/Profile";
import LoginQRPage from "src/pages/Login/QR";
import LoginIDPage from "src/pages/Login/Id";
import OAuthCallbackPage from "src/pages/OAuth/Callback";

const LoginRedirect = () => {
  const location = useLocation();
  return <Navigate to={`/login/id${location.search}`} replace />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginRedirect />} />
        <Route path="/login/qr" element={<LoginQRPage />} />
        <Route path="/login/id" element={<LoginIDPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/oauth/callback" element={<OAuthCallbackPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
