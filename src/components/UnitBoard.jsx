import { useTranslation } from "react-i18next";
import avater from "../assets/images/avater.jpg";
import { ImageFun } from "./ImageFun";
import { NavLink } from "react-router-dom";
import React from "react";
const UnitBoard = ({ nameAr, nameEn, photo, count }) => {
  const { i18n } = useTranslation();
  const currantLang = i18n.language;
  return (
    <div className="col-sm-12 col-md-4 mb-3">
      <NavLink to={`/doctor/${nameEn.split(' ').join("-")}`} className={`text-decoration-none`}>
        <div className="unit-box-contant m-3">
          <div className="unit-box-img">
            <img src={photo ? ImageFun(photo) : avater} alt="unit img" title="unit_img" style={{ width: "100%", height: "100%" }} loading="lazy" />
          </div>
          <div className="text-box">
            <div className="count fs-5">{count}</div>
            <div className="unit-name my-3">
              {currantLang == "ar" ? nameAr : nameEn}
            </div>

          </div>
        </div>
      </NavLink>
    </div>
  );
};
export default UnitBoard;