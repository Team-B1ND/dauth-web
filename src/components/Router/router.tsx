import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/Login";
import MainPage from "../../pages/Main";

const Router = () => {
  return (
    <BrowserRouter basename="/dauth-web">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
