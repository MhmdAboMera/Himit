import { useTranslation } from "react-i18next";
import React from "react";
const Missons = ({ vissonAr, vissonEn, messageAr, messageEn }) => {
    const { i18n } = useTranslation();
    const currantLang = i18n.language;
    return (
        <div className="missons mt-2">
            <div className="container">
                <div className="row">
                    <p className="fs-3 fw-bold missons-heed mb-4">
                        {i18n.t("Vision and mission")}

                    </p>
                    <div className="text-box mb-3">
                        <div className="count">1</div>
                        <p className='name'>{i18n.t("Vision")} </p>
                        <div className="contant">
                            <p className='text-des'>
                                {currantLang == "ar" ? vissonAr : vissonEn}
                            </p>
                        </div>
                    </div>
                    <div className="text-box mb-3">
                        <div className="count">2</div>
                        <p className='name'>{i18n.t("mission")} </p>
                        <div className="contant">
                            <p className='text-des'>
                                {currantLang == "ar" ? messageAr : messageEn}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Missons;