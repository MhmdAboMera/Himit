import { useParams } from "react-router-dom";
import Missons from "../../components/Missons"
import { useGlobalState } from "../../Context";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ImageFun } from "../../components/ImageFun";
import React from "react";
const MainUnits = () => {
    const { unitName } = useParams();
    const { apiUrl } = useGlobalState()
    const [units, setUnits] = useState();
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
    useEffect(() => {
        UnitsData();
    }, [unitName]);
    const UnitsData = async () => {
        const response = await axios.get(
            `${apiUrl}/api/website/units`
        );
        const info = response.data.find(
            (unit) => {
                const name = unit.name_en.split('-').join(" ");
                return name === unitName.split('-').join(" ")
            }
        );
        const unitId = info.id;
        const mainUnit = await axios.get(
            `${apiUrl}/api/website/unit/${unitId}`
        );
        setUnits(mainUnit.data);
    };
    return (
        <>
            <div className="message mt-2 py-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-8">
                            <div className="text-message-contant">
                                <p className="fs-4 mb-3 fw-bold title">
                                    {t('Objectives')} {currentLang == 'ar' ? units?.name_ar : units?.name_en}
                                </p>
                                <p className="mb-3">
                                    {currentLang == 'ar' ? units?.goals_ar : units?.goals_en}
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="box-message-img">
                                <img src={ImageFun(units?.photo)} alt={currentLang == 'ar' ? units?.name_ar : units?.name_en} width="100%" height="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Missons vissonAr={units?.vision_ar} vissonEn={units?.vision_en} messageAr={units?.message_ar} messageEn={units?.message_en} />
        </>
    )
}

export default MainUnits