import axios from "axios";
import { useQuery } from "react-query";
import { useGlobalState } from "../../Context";
import CardNews from "../CardNews";
import i18next from "i18next";
const News = () => {
    const { apiUrl } = useGlobalState()
    const getNews = async () => {
        const response = await axios.get(`${apiUrl}/api/website/lastNews`);
        return response.data;
    };
    const { data: news, error: newsError, isLoading: isLoadingNews } = useQuery('news', getNews);
    if (isLoadingNews) {
        return <p>Loading...</p>;
    }
    if (newsError) {
        return <p>Error loading data</p>;
    }

    return (
        <div className="news my-3 py-5">
            <div className="container">
                <p className="fs-1 fw-bold text-center mb-5">{i18next.t('Latest News')}</p>
                <div className="row">
                    <CardNews news={news.slice(0, 4)} col={`col-md-4 col-lg-3`} />
                </div>
            </div>
        </div>
    )
}

export default News;