import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import SEO from "../components/SEO";
import NewsAside from "../components/NewsAside";
import newsImg from '../assets/images/news-img-sec.png';
import axios from "axios";
import { useGlobalState } from "../Context";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import React from "react";
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { ImageFun } from "../components/ImageFun";
const SingleBlog = () => {
  const { apiUrl } = useGlobalState()
  const { blogName } = useParams();
  const [findedNew, setFinedNew] = useState(null);
  const [singleNew, setSingleNew] = useState(null);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  useEffect(() => {
    getSingleNews()
  }, [blogName]);
  const getSingleNews = async () => {
    try {
      const news = await axios.get(
        `${apiUrl}/api/website/news`
      );
      const findNew = news.data.find(
        (news) => news.name_en === blogName.split("-").join(" ")
      );
      setFinedNew(findNew);

      const newsID = findNew.id
      const DataNews = await axios.get(
        `${apiUrl}/api/website/allNews/${newsID}`
      );
      setSingleNew(DataNews.data[0])
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <SEO
        title="Blog - Himit Web Solutions"
        description="Himit offers comprehensive web solutions including web design, development, hosting, SEO, and online marketing. Established in 2013, serving numerous clients and institutions."
        name="Himit"
        keywords="web design, web development, SEO, online marketing, e-commerce, web hosting, Himit"

      />
      <div className="single-blog mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="row">
                <div className="col-md-4 col-lg-3">
                  <div className="single-blog-img">
                    <img src={singleNew?.photos ? ImageFun(singleNew?.photos[0].photo) : newsImg} alt={`img `} />
                  </div>
                </div>
                <div className="col-md-8 col-lg-9">
                  {/* <div className="fs-4 fw-bold heed" dangerouslySetInnerHTML={{ __html: currentLanguage == "ar" ? singleNew?.notes_ar : singleNew?.notes_en }}></div> */}
                  <div className="fs-4 fw-bold heed">

                    {currentLanguage == "ar" ? findedNew?.name_ar : findedNew?.name_en}
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  className="mySwiper">
                  {
                    singleNew?.photos?.map((photo) => {
                      return (
                        <SwiperSlide key={photo.id}>
                          <div className="items-imgs p-3 pb-5">
                            <img src={photo.photo ? ImageFun(photo?.photo) : newsImg} alt={photo.name_ar} />
                          </div>
                        </SwiperSlide>
                      )
                    })
                  }
                </Swiper>
              </div>
              <div className="mt-3" dangerouslySetInnerHTML={{ __html: currentLanguage == "ar" ? singleNew?.notes_ar : singleNew?.notes_en }}></div>
            </div>
            <NewsAside />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
