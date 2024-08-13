import React, { useEffect } from 'react';
import CustomButton from '../CustomButton';
import man from '../../assets/images/man-prof.png';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import { ImageFun } from '../ImageFun';
import { useGlobalState } from '../../Context';
import { NavLink } from 'react-router-dom';

const Prof = () => {
    const { t, i18n } = useTranslation();
    const { apiUrl } = useGlobalState();

    const currentLanguage = i18n.language;
    const getMessage = async () => {
        const response = await axios.get(`${apiUrl}/api/website/messageOfDeanInstitute`);
        return response.data;
    };

    const { data: message, error: messageError, isLoading: isLoadingMessage } = useQuery('message', getMessage);

    const getdean = async () => {
        const response = await axios.get(`${apiUrl}/api/website/doctor/${message?.doctor_id || "1"}`);
        return response.data;
    };

    const { data: dean, error: deanError, isLoading: isLoadingDean } = useQuery('dean', getdean, {
        enabled: !!message, // Only run this query when message is available
    });

    if (isLoadingMessage) {
        return <div className='prof Prof_loading'><div className="prof-loader position-absolute start-50 top-50 translate-middle"></div></div>;
    }

    if (messageError) {
        return <div className='prof Prof_loading'><div className="prof-loader position-absolute start-50 top-50 translate-middle"></div></div>;
    }

    if (isLoadingDean) {
        return <div className='prof Prof_loading'><div className="prof-loader position-absolute start-50 top-50 translate-middle"></div></div>;
    }

    if (deanError) {
        return <div className='prof Prof_loading'><div className="prof-loader position-absolute start-50 top-50 translate-middle"></div></div>;
    }

    return (
        <div className="prof">
            <div className="container pb-3">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-8">
                        <p className="fs-1 fw-bold heed">
                            {t('Dean of the Institute')}
                        </p>
                        <p className="fs-3 fw-bold">
                            {currentLanguage === "ar" ? `أ.د/ ${dean?.name_ar}` : `Mr. Dr/ ${dean?.name_en}`}
                        </p>
                        <p className='mb-2 notes'>
                            {currentLanguage === "ar" ? message?.notes1_ar : message?.notes1_en}
                        </p>
                        <p className='mb-2 notes'>
                            {currentLanguage === "ar" ? message?.notes2_ar : message?.notes2_en}
                        </p>
                        <div className="d-flex justify-content-start mb-5">
                            <CustomButton text={t("For More")} color={'#000'} routeTo={`/doctor/${dean?.name_en.split(' ').join("-")}`} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex justify-content-center" >
                        <NavLink to={`/doctor/${dean?.name_en.split(' ').join("-")}`}>
                            <div className="box-img-prof ">
                                <img src={dean ? ImageFun(dean?.photo) : man} alt="man" width={"190px"} height={"100%"} className="img-prof img-fluid" />
                                <div className="img-title fs-5">
                                    {currentLanguage === "ar" ? `أ.د/ ${dean?.name_ar}` : `Mr. Dr/ ${dean?.name_en}`}
                                </div>
                            </div>
                        </NavLink>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prof;