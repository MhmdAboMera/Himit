import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ScrollToTop from "../../components/ScrollToTop";
import Footer from "../../components/Footer";
import SideNave from "./SideNave";
import React from "react";
const ServicesLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <ScrollToTop />
      <main className="overflow-hidden main-contant  ">
        <div className="container">
          <div className="row">
            <SideNave />
            <div className="col-sm-12 col-md-9 section-container Suggestions_Complaints">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default ServicesLayout;
