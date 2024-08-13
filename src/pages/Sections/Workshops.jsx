import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import SectionLanding from "./SectionLanding";
import workImg from '../../assets/images/news-img-sec.png'
import { ImageFun } from "../../components/ImageFun";
import { useGlobalState } from "../../Context";
const Workshops = () => {
  const { i18n } = useTranslation();
  const { apiUrl } = useGlobalState()
  const currantLang = i18n.language;
  useEffect(() => {
    getprofData();
  }, []);
  const [Workshop, setWorkshop] = useState();
  const [part, setPart] = useState();
  const { name } = useParams();
  const getprofData = async () => {
    const depId = await axios.get(
      `${apiUrl}/api/website/departments`
    );
    const info = depId.data.find(
      (dep) => dep.name_en === name.replace("-", " ")
    );
    setPart(info)
    const response = await axios.get(
      `${apiUrl}/api/website/seminar/${info.id} `
    );
    setWorkshop(response.data);
  };
  return (
    <>
      <SectionLanding nameAr={part?.name_ar} nameEn={part?.name_en} photo={part?.photo} messageEn={part?.message_en} messageAr={part?.message_ar} />
      <div className="work-shop mt-5 py-5">
        <div className="container">
          {/* <div className="row align-items-center"> */}
          {Workshop?.map((work, index) => {
            return (
              <div className={`row align-items-center mb-5 work-box ${index % 2 !== 0 ? 'flex-row-reverse' : ""}`} key={index}>
                <div className="col-md-8">
                  <div className="text-box">
                    <div className="heed fs-2 fw-bold">
                      {currantLang == "ar" ? work.name_ar : work.name_en}
                    </div>
                    <div className="doc-name my-3 fs-4">
                      {currantLang == "ar" ? `تحت اشراف الدكتور /  ${work.doctors.name_ar}` : `Under the supervision of Dr / ${work.doctors.name_en} `}
                    </div>
                    <div className="work-des">
                      {currantLang == "ar" ? work.details_ar : work.details_en}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-img-box">
                    <img src={work ? ImageFun(work.photo) : workImg} alt="work img" />
                  </div>
                </div>
              </div>
            )
          })}
          {/* </div> */}
        </div>
      </div>

      {/* {Workshop && Workshop.map(work =>
        <>
          {work.details_ar}
        </>
      )} */}
    </>
  )
}

export default Workshops