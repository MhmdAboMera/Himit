import { useParams } from 'react-router-dom';
import { ImageFun } from '../../components/ImageFun';
import axios from 'axios';
import { useGlobalState } from '../../Context';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import React from "react";
const StudentPdf = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    const { apiUrl } = useGlobalState()
    const { pdfName } = useParams()
    const [pdf, setPdf] = useState(null)
    useEffect(() => {
        getFile()
    }, [pdfName])
    const getFile = async () => {
        const file = await axios.get(
            `${apiUrl}/api/website/${pdfName}`
        );
        setPdf(file.data);
    }

    return (
        <>
            <div className="pdf-info mt-2 mb-4">
                <div className="container">
                    {
                        pdf?.map((pdf, index) => {
                            return (
                                <div className="row align-items-center" key={index}>
                                    <div className={`col-sm-12 ${pdf?.photo ? "col-md-7" : 'col-md-12'}`}>
                                        <div className="pdf-info-title fs-5 fw-bold mb-2">
                                            {t('biography')}                                        </div>
                                        <div className="pdf-info-des">
                                            {
                                                currentLang == "ar" ? pdf?.notes_ar : pdf?.notes_en
                                            }
                                        </div>
                                    </div>
                                    {
                                        pdf?.photo ?
                                            <div className="col-sm-12 col-md-5">
                                                <div className="pdf-box-img">
                                                    <img src={ImageFun(pdf?.photo)} alt={currentLang == 'ar' ? pdf?.notes_ar : pdf?.notes_en} width="100%" height="100%" />
                                                </div>
                                            </div>
                                            : null
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {pdf && <iframe width="100%" height="800px" src={ImageFun(pdf[0]?.file)} />}
        </>
    )
}

export default StudentPdf;