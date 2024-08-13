import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import React from "react";
const Layout = () => {
  return (
    <>
      <header><Navbar /></header>
      <ScrollToTop />
      <main className="overflow-hidden main-contant">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
