
import React from "react";
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './index.css';
import { Route, Routes } from "react-router-dom"; // Remove BrowserRouter import
import { ToastContainer } from "react-toastify";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Header from './components/Header';
import InvestmentGuidancePage from "./pages/InvestmentGuidence";
import FinancialLiteracyPage from "./pages/FinancialLiteracy";
import SecurityPage from "./pages/Security";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/head" element={<Header />} />
        <Route path="/investment-guidence" element={<InvestmentGuidancePage />} />
        <Route path="/financial-literacy" element={<FinancialLiteracyPage />} />
        <Route path="/security" element={<SecurityPage />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
}

export default App;