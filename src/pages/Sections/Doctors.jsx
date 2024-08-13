import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useParams } from "react-router-dom";
import { ImageFun } from "../../components/ImageFun";
import avater from "../../assets/images/avater.jpg";
import SectionLanding from "./SectionLanding";
import SocialIcons from "../../components/SocialIcons";
import { useGlobalState } from "../../Context";
const Doctors = () => {
  const { i18n } = useTranslation();
  const currantLang = i18n.language;
  const { apiUrl } = useGlobalState()

  useEffect(() => {
    getprofData();
  }, [window.location.href]);
  const [doctors, setDoctors] = useState();
  const [part, setPart] = useState();
  const { name } = useParams();
  const getprofData = async () => {
    try {
      const depId = await axios.get(
        `${apiUrl}/api/website/departments`
      );
      const info = depId.data.find(
        (dep) => dep.name_en === name.replace("-", " ")
      );
      setPart(info);
      const response = await axios.get(
        `${apiUrl}/api/website/staff/Departments/${info.id} `
      );
      if (window.location.href.includes("doctors")) {
        setDoctors(response.data.filter((member) => member.kind == 1));
      } else {
        setDoctors(response.data.filter((member) => member.kind == 2));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <SectionLanding
        nameAr={part?.name_ar}
        nameEn={part?.name_en}
        photo={part?.photo}
        messageEn={part?.message_en}
        messageAr={part?.message_ar}
      />

      <div className="unit-board mt-5">
        <div className="container">
          <div className="row">
            <p className="fs-1 fw-bold unit-board-heed text-center my-3">
              {i18n.t('Department faculty members')}
            </p>
            {doctors &&
              doctors.map((doc, index) => (
                <div className="col-sm-12 col-md-4 mb-3" key={doc.name_ar}>

                  <div className="unit-box-contant m-3">
                    <NavLink to={`/doctor/${doc?.name_en.split(' ').join("-")}`}>
                      <div className="unit-box-img">
                        <img
                          src={doc.photo ? ImageFun(doc.photo) : avater}
                          alt="unit img"
                          title="unit_img"
                          style={{ width: "100%", height: "100%" }}
                          loading="lazy"
                        />
                      </div>
                    </NavLink>

                    <div className="text-box flex-column">
                      <div className="count fs-5">{index + 1}</div>
                      <div className="unit-name my-3">
                        <NavLink to={`/doctor/${doc?.name_en.split(' ').join("-")}`} className={`text-decoration-none text-white`}>
                          {currantLang == "ar" ? doc.name_ar : doc.name_en}
                        </NavLink>
                        <div className="mt-2">
                          <SocialIcons tel1={doc.tel} twitter={doc?.twitter} linkedin={doc?.linkedin} youtube={doc?.youtube} instagram={doc?.instagram} />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctors;
