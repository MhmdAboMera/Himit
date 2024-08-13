import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
import StudentLanding from "../components/StudentLanding";
import man from '../assets/images/girl.png';
import CardNews from "../components/CardNews";
import React from "react";
// import newsImg from '../assets/images/news-img-sec.png';
import axios from "axios";
import { useGlobalState } from "../Context";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { ImageFun } from "../components/ImageFun";
import NewsAside from "../components/NewsAside";

const BlogPage = () => {
  const { i18n } = useTranslation();
  const currantLang = i18n.language;
  const { apiUrl } = useGlobalState();
  const { catName } = useParams();
  const [news, setNews] = useState(null);
  // const [Cats, setCats] = useState(null);
  const [newsCat, setNewsCat] = useState(null);
  // const [LastNews, setLastNewsCat] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    getNewsData();
  }, [catName]);

  const getNewsData = async () => {
    try {
      const ctaNews = await axios.get(
        `${apiUrl}/api/website/newsClassification`
      );
      // setCats(ctaNews.data)
      const DataNews = ctaNews.data.find(
        (news) => news.name_en === catName.split("-").join(" ")
      );
      setNewsCat(DataNews);
      let catID = +DataNews.id;
      const news = await axios.get(
        `${apiUrl}/api/website/news`
      );
      const dataNeeded = news.data.filter(newsItem => newsItem.Classification_id === catID);
      setNews(dataNeeded);

      // const getLastNews = await axios.get(`${apiUrl}/api/website/lastNews`);
      // setLastNewsCat(getLastNews.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Calculate total pages
  const totalPages = Math.ceil((news?.length || 0) / itemsPerPage);

  // Calculate the start and end indices of the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = news?.slice(startIndex, endIndex) || [];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <SEO
        title="blog - Himit"
        description="lorem lorem lorem lorem lorem"
        name="Himit"
        keywords="Himit"
        ogImage={window.location.href + "src/assets/images/himit-logo.png"}
      />
      <StudentLanding man={man} name={
        currantLang == "ar" ? newsCat?.name_ar : newsCat?.name_en
      } des={
        currantLang == "ar" ? newsCat?.notes_ar : newsCat?.notes_en
      } />
      <div className="news my-3 py-5">
        <div className="container">
          <p className="fs-1 fw-bold heed mb-5">
            {
              currantLang == "ar" ? newsCat?.name_ar : newsCat?.name_en
            }
          </p>
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="row">
                <CardNews news={currentItems} col={`col-md-6 col-lg-4`} />
              </div>
              <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    disabled={currentPage === index + 1}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
            <NewsAside />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
