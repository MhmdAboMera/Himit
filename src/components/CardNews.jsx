import newsImg from '../assets/images/news-img-sec.png'
import { NavLink } from 'react-router-dom'
import CustomButton from './CustomButton'
import { useTranslation } from 'react-i18next';
import { ImageFun } from './ImageFun';
import i18next from 'i18next';
import React from "react";

const CardNews = ({ news, col }) => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    return (
        <>
            {
                news?.map((blog, index) => {
                    const blogName = blog.name_en.replace(/\s+/g, '-');
                    return (
                        <div className={`${col} mb-5 `} key={index}>
                            <div className="news-contant d-flex shadow p-2 rounded">
                                <NavLink to={`/news/single/${blogName}`} className={`text-decoration-none w-100`}>
                                    <div className="img-news-box">
                                        <img src={blog.photo ? ImageFun(blog?.photo) : newsImg} alt="news img" width={"100%"} height={"100%"} />
                                    </div>
                                </NavLink>
                                <p className="news-name  fw-bold text-center my-3">
                                    {currentLanguage == "ar" ? blog.name_ar : blog.name_en}
                                </p>
                                <CustomButton text={i18next.t('For More')} color={`#000`} routeTo={`/news/single/${blogName}`} />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
export default CardNews;