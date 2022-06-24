import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import NavBar from "../NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
