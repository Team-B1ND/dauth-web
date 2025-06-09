import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "src/pages/Main";
import LoginPage from "src/pages/Login";

const Router = () => {
  return (
    <BrowserRouter basename="/dauth-web">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
