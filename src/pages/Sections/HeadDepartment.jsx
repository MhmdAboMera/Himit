import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useParams } from "react-router-dom";
import { ImageFun } from "../../components/ImageFun";
import avater from '../../assets/images/avater.jpg'
import SectionLanding from "./SectionLanding";
import { useGlobalState } from "../../Context";
const HeadDepartment = () => {
  const { i18n } = useTranslation();
  const currantLang = i18n.language;
  useEffect(() => {
    getprofData();
  }, []);
  const [Prof, setProf] = useState();
  const [part, setPart] = useState();
  const { name } = useParams();
  const { apiUrl } = useGlobalState()
  const getprofData = async () => {
    const depId = await axios.get(
      `${apiUrl}/api/website/departments`
    );
    const info = depId.data.find(
      (dep) => dep.name_en === name.replace("-", " ")
    );
    setPart(info)
    const response = await axios.get(
      `${apiUrl}/api/website/bossOfDepartment/${info.id} `
    );

    const profData = await axios.get(
      `${apiUrl}/api/website/doctor/${response.data.doctors.id} `
    );
    setProf(profData.data);
  };
  return (
    <>
      <SectionLanding nameAr={part?.name_ar} nameEn={part?.name_en} photo={part?.photo} messageEn={part?.message_en} messageAr={part?.message_ar} />
      <div className="prof-section py-5 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
              <p className="fs-2 fw-bold dean-name">
                {
                  currantLang == "ar" ? `أ.د/ ${Prof?.name_ar ? Prof?.name_ar : ""}` : `${Prof?.name_en ? Prof?.name_en : ""}`
                }
              </p>
              <p className="fw-bold">
                {
                  currantLang == "ar" ? Prof?.websiteWords : Prof?.websiteWords
                }
              </p>
            </div>
            <div className="col-sm-12 col-md-6 d-flex justify-content-center mt-3" >
              <NavLink to={`/doctor/${Prof?.name_en.split(' ').join("-")}`}>
                <div className="img-landing-box">
                  <img src={Prof ? ImageFun(Prof?.photo) : avater} alt="img land" width="100%" height="100%" className="img-landing" />
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadDepartment;
