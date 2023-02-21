//Packages
import { useState, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

//Styles
import "./App.scss";

//Utils
import { changeRTL, changeLTR } from "./store/actions";
//Components
import LoginPage from "./pages/LoginPage";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const language = localStorage.getItem("i18nextLng");
    language === "ar" ? dispatch(changeRTL()) : dispatch(changeLTR());
  }, []);

  return (
    <Suspense>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
