import SocialIcons from '../../components/SocialIcons'
import partImg from '../../assets/images/partImg.png'
import { ImageFun } from '../../components/ImageFun'
import { useTranslation } from 'react-i18next';
import React from "react";
const SectionLanding = ({ nameAr, nameEn, photo, messageEn, messageAr }) => {
    const { i18n } = useTranslation();
    const currantLang = i18n.language;
    return (
        <div className="section-landing pt-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="contact">
                            <div className="heed fs-2 fw-bold">
                                {currantLang == "ar" ? nameAr : nameEn}
                            </div>
                            <p className="fs-5 my-3">
                                {currantLang == "ar" ? messageAr : messageEn}
                            </p>
                            <SocialIcons />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img-box mt-3">
                            <img src={photo ? ImageFun(photo) : partImg} alt="part img" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionLanding