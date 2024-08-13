import ScrollToTop from "../../components/ScrollToTop";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import SideNave from "./SideNave";
import Navbar from "../../components/Navbar";
const SectionLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <ScrollToTop />
      <main className="overflow-hidden main-contant ">
        <div className="container">
          <div className="row">
            <SideNave />
            <div className="col-sm-12 col-md-9 section-container">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default SectionLayout;
