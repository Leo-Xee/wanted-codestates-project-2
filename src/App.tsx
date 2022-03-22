import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import UserDetail from "@/pages/UserDetail";
import NavBar from "@/components/common/NavBar";
import Header from "./components/common/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
