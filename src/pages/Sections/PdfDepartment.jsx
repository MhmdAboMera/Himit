import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { ImageFun } from "../../components/ImageFun";
import { useGlobalState } from "../../Context";
import React from "react";
const PdfDepartment = () => {
  const { i18n } = useTranslation();
  const { apiUrl } = useGlobalState()
  const currantLang = i18n.language;
  useEffect(() => {
    getprofData();
  }, []);
  const [PDF, setPDF] = useState();
  const { name } = useParams();
  const getprofData = async () => {
    const depId = await axios.get(
      `${apiUrl}/api/website/departments`
    );
    const info = depId.data.find(
      (dep) => dep.name_en === name.replace("-", " ")
    );
    setPDF(info);
  };

  return (
    <>
      {PDF && <iframe width="100%" height="800px" src={ImageFun(PDF?.Internal_Regulation)} />}
    </>
  )
}

export default PdfDepartment