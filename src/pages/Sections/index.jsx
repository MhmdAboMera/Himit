import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import SectionLanding from "./SectionLanding";
import Missons from "../../components/Missons";
import { useGlobalState } from "../../Context";
const Sections = () => {
  
  const { name } = useParams();
  const { apiUrl } = useGlobalState()
  const [data, setData] = useState();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  useEffect(() => {
    sectionData();
  }, [name]);
  const sectionData = async () => {
    const response = await axios.get(
      `${apiUrl}/api/website/departments`
    );
    const info = response.data.find(
      (dep) => dep.name_en === name.replace("-", " ")
    );
    return setData(info);
  };
  return (
    <>
      <SectionLanding nameAr={data?.name_ar} nameEn={data?.name_en} photo={data?.photo} messageEn={data?.notes_en} messageAr={data?.notes} />
      {/* { vissonAr, vissonEn, messageAr, messageEn } */}
      <Missons vissonAr={data?.vision_ar} vissonEn={data?.vision_en} messageAr={data?.message_ar} messageEn={data?.message_en} />
    </>
  );
};

export default Sections;
