import axios from "axios";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { useGlobalState } from "../../Context";
import React from "react";
const Features = () => {
    const { t, i18n } = useTranslation();
    const { apiUrl } = useGlobalState()
    const currentLanguage = i18n.language;
    const getFeatures = async () => {
        const response = await axios.get(`${apiUrl}/api/website/features`);
        return response.data;
    };
    const { data: features, error: featuresError, isLoading: isLoadingFeatures } = useQuery('features', getFeatures);
    if (isLoadingFeatures) {
        return <p>Loading...</p>;
    }

    if (featuresError) {
        return <p>Error loading data</p>;
    }
    return (
        <div className="features my-5 py-5">
            <div className="container">
                <div className="shape shape-red" />
                <div className="shape shape-white" />
                <div className="shape shape-black" />
                <div className="row">
                    <div className="col-sm-12 position-relative z-3">
                        <p className="fs-1 fw-bold text-center mb-5">{t('Institute features')}  </p>
                        <div className="row">
                            {
                                features?.map((feature) => {
                                    return (
                                        <div className="col-sm-12 col-lg-6 mb-3" key={feature.id}>
                                            <div className="single-features " >
                                                <div className="d-flex gap-3 mb-3 align-items-center">
                                                    <span className='counter'>{feature.id}</span>
                                                    <p className='mb-0 fs-4'>
                                                        {
                                                            currentLanguage == "ar" ? feature?.name_ar : feature?.name_en
                                                        }
                                                    </p>
                                                </div>
                                                <p className='m-0'>
                                                    {
                                                        currentLanguage == "ar" ? feature?.notes_ar : feature?.notes_en
                                                    }
                                                </p>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;