import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
import '../styles/units/units.css'
import '../styles/sections/sections.css'
import unitImg from '../assets/images/unitImg.png'
import logo from '../assets/images/himit-logo.png'
import Missons from "../components/Missons";
import React from "react";
const Units = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title="Our Units"
        description="lorem lorem lorem lorem lorem"
        name="Himit"
        keywords="Himit"
        ogImage={window.location.href + "src/assets/images/himit-logo.png"}
      />
      <div className="units-land">
        <div className="container-fluid">
          <div className="logo-img-unit">
            <img src={logo} alt="logo" className="img-fluid" />
          </div>
          <div className="row">
            <div className="col-md-6 d-flex justify-content-end">
              <div className="text-box mt-3">
                <p className="fs-1 fw-bold heed mb-5 text-center">
                  الوحدات
                </p>
                <p className="m-0 fs-4 ">
                  يضم الجهاز الأكاديمي للمعهد نخبه من الأساتذة وأعضاء هيئه التدريس ذوي خبره عالية في مجالات التخصص والإدارة منهم المعينين.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box w-100 d-flex justify-content-end">
                <img src={unitImg} alt="unitImg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="units-goals py-5">
        <div className="container">
          <div className="row">
            <p className="fs-1 fw-bold heed mb-5">
              أهداف الوحدة
            </p>
            <div className="col-md-4 mb-3">
              <div className="goals-name goal-name1">
                <svg id="sw-js-blob-svg" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" className="bg-svg">
                  <defs>
                    <clipPath id="clip-path-polygon">
                      <polygon points="75,0 100,50 75,100 0,100 25,50 0,0" />
                    </clipPath>
                    <linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}>
                      <stop id="stop1" stopColor="transparent" offset="0%" />
                      <stop id="stop2" stopColor="transparent" offset="100%" />
                    </linearGradient>
                  </defs>
                  <rect x={0} y={0} width={100} height={100} fill="url(#sw-gradient)" clipPath="url(#clip-path-polygon)" />
                  <polygon points="75,0 100,50 75,100 0,100 25,50 0,0" fill="none" stroke="#AD2026" strokeWidth={2} />
                </svg>
                <p className="fs-4 fw-bold gol-text heed">
                  الأنجاز
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="goals-name goal-name2">
                <svg id="sw-js-blob-svg" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" className="bg-svg">
                  <defs>
                    <clipPath id="clip-path-polygon">
                      <polygon points="75,0 100,50 75,100 0,100 25,50 0,0" />
                    </clipPath>
                    <linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}>
                      <stop id="stop1" stopColor="transparent" offset="0%" />
                      <stop id="stop2" stopColor="transparent" offset="100%" />
                    </linearGradient>
                  </defs>
                  <rect x={0} y={0} width={100} height={100} fill="url(#sw-gradient)" clipPath="url(#clip-path-polygon)" />
                  <polygon points="75,0 100,50 75,100 0,100 25,50 0,0" fill="none" stroke="#1A3051" strokeWidth={2} />
                </svg>
                <p className="fs-4 fw-bold gol-text heed">
                  الأنجاز
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="goals-name goal-name3">
                <svg id="sw-js-blob-svg" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" className="bg-svg">
                  <defs>
                    <clipPath id="clip-path-polygon">
                      <polygon points="75,0 100,50 75,100 0,100 25,50 0,0" />
                    </clipPath>
                    <linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}>
                      <stop id="stop1" stopColor="transparent" offset="0%" />
                      <stop id="stop2" stopColor="transparent" offset="100%" />
                    </linearGradient>
                  </defs>
                  <rect x={0} y={0} width={100} height={100} fill="url(#sw-gradient)" clipPath="url(#clip-path-polygon)" />
                  <polygon points="75,0 100,50 75,100 0,100 25,50 0,0" fill="none" stroke="#3f5def" strokeWidth={2} />
                </svg>
                <p className="fs-4 fw-bold gol-text heed">
                  الأنجاز
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Missons />
    </>
  );
};

export default Units;
