import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import '../styles/about/about.css'
import SEO from "../components/SEO";
import Features from "../components/about/Features";
import OurGoal from "../components/about/OurGoal";
import AboutUs from "../components/about/AboutUs";
import Message from "../components/home/Message";
import { useGlobalState } from "../Context";
import { ImageFun } from "../components/ImageFun";
import Missons from "../components/Missons";
import News from "../components/home/News";
import Professors from "../components/home/Professors";
import Departments from "../components/home/Departments";
import React from "react";
const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [langClass, setLangClass] = useState("en");
  const { seeting } = useGlobalState();
  useEffect(() => {
    setLangClass(currentLanguage);
  }, []);
  return (
    <>
      <SEO
        title="About - Himit"
        description="lorem lorem lorem lorem lorem"
        name="Himit"
        keywords="Himit"
        ogImage={window.location.href + "src/assets/images/himit-logo.png"}
      />
      <div className="kfs-kafrElSheikh py-5">
        <div className="video-box">
          <video controls={true} autoPlay={true} loop={true} muted={true}>
            {seeting ? (
              <>
                <source src={ImageFun(seeting.video)} type="video/mp4" />
                <source src={ImageFun(seeting.video)} type="video/webm" />
                <source src={ImageFun(seeting.video)} type="video/ogg" />
              </>
            ) : (
              <p>Your browser does not support the video tag.</p>
            )}
          </video>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="heed fs-1 fw-bold mb-sm-2 mb-md-5">
                {
                  currentLanguage == "ar" ? `${seeting?.name_ar}..` : seeting?.name_en
                }
              </div>
              <p className="m-0 fs-5">
                {
                  currentLanguage == "ar" ? `${seeting?.mission}..` : seeting?.mission
                }
              </p>
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <Missons vissonAr={seeting?.vision} vissonEn={seeting?.vision} messageAr={seeting?.mission} messageEn={seeting?.mission} />
      {/* <Message /> */}
      <div className="message">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-8">
              <div className="text-message-contant">
                <p className="fs-1 mb-3 fw-bold title">
                  {i18n.t("The establishment of the institute")}
                </p>
                <p className="mb-3 des">
                  {seeting?.establishment}
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="img-landing-box">
                <img src={seeting ? ImageFun(seeting.photo) : ''} alt="img land" width="100%" height="100%" className="img-landing" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <OurGoal />
      <Professors />
      <Departments />
      <News />
    </>
  )
}

export default AboutPage