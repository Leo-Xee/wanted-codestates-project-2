import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import UserDetail from "@/pages/UserDetail";
import Header from "./components/common/Header";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:nickname" element={<UserDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
