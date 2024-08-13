import { NavLink, useParams } from 'react-router-dom';
import { ImageFun } from './ImageFun';
import newsImg from '../assets/images/news-img-sec.png';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useGlobalState } from '../Context';
import { t } from 'i18next';
import React from "react";
const NewsAside = () => {
    const { apiUrl } = useGlobalState();
    const { i18n } = useTranslation();
    const currantLang = i18n.language;
    const [Cats, setCats] = useState(null);
    const [LastNews, setLastNewsCat] = useState(null);
    const { catName } = useParams();
    useEffect(() => {
        getNewsData();
    }, []);
    const getNewsData = async () => {
        try {
            const ctaNews = await axios.get(
                `${apiUrl}/api/website/newsClassification`
            );
            setCats(ctaNews.data)
            const getLastNews = await axios.get(`${apiUrl}/api/website/lastNews`);
            setLastNewsCat(getLastNews.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    return (
        <div className="col-md-4 col-lg-3">
            <div className="aside-news shadow p-3">
                <div className="fs-4 fw-bold heed mb-3">
                    {t('Latest News')}
                </div>
                {
                    LastNews?.map((lastNew, index) => {
                        const name = lastNew.name_en.replace(/\s+/g, '-');
                        return (
                            <NavLink to={`/news/single/${name}`} className={`text-decoration-none`} key={index}>
                                <div className="row align-items-center py-2 item" >
                                    <div className="col-4">
                                        <img src={lastNew.photo ? ImageFun(lastNew?.photo) : newsImg} alt={lastNew.name_ar} />
                                    </div>
                                    <div className="col-8">
                                        <div className="name mb-1">
                                            {
                                                currantLang == "ar" ? lastNew.name_ar : lastNew.name_en
                                            }
                                        </div>
                                        <div className="des" dangerouslySetInnerHTML={{ __html: currantLang == "ar" ? lastNew.notes_ar : lastNew.notes_en }}>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
            <div className="aside-news shadow p-3 mt-3">
                <div className="fs-4 fw-bold heed mb-3">
                    {t('Categories')}                </div>
                <div className="d-flex gap-2 align-items-center flex-wrap">
                    {
                        Cats?.map((cat, index) => {
                            const CategoryName = cat.name_en.replace(/\s+/g, '-');
                            return (
                                <NavLink to={`/news/${CategoryName}`} className={`text-decoration-none text-white words`} key={index}>
                                    {
                                        currantLang == "ar" ? cat.name_ar : cat.name_en
                                    }
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default NewsAside