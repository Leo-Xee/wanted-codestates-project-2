import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Layout from "./components/common/Layout/Layout";

const LazyUserDetail = lazy(() => import("@/pages/UserDetail"));
const LazyNotFound = lazy(() => import("./pages/NotFound"));

function App() {
  useEffect(() => {
    import("./pages/UserDetail");
    import("./pages/NotFound");
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/users/:nickname"
            element={
              <Suspense fallback="...">
                <LazyUserDetail />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback="...">
                <LazyNotFound />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
