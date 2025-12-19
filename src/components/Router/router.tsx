import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "src/pages/Home";
import ProfilePage from "src/pages/Profile";
import LoginQRPage from "src/pages/Login/QR";
import LoginIDPage from "src/pages/Login/Id";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Navigate to="/login/qr" replace />} />
        <Route path="/login/qr" element={<LoginQRPage />} />
        <Route path="/login/id" element={<LoginIDPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
