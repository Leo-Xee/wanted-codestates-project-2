import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import UserDetail from "@/pages/UserDetail";
import ErrorBanner from "./components/common/ErrorBanner/ErrorBanner";
import Layout from "./components/common/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:nickname" element={<UserDetail />} />
          <Route path="*" element={<ErrorBanner message="잘못된 경로로 접근한 것 같아요!!" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
