import axios from "axios"
import { FaGraduationCap, FaUsers } from "react-icons/fa"
import { MdCastForEducation } from "react-icons/md"
import { useQuery } from "react-query"
import { useGlobalState } from "../../Context"
import { useTranslation } from "react-i18next"

const Graduation = <FaGraduationCap className='icon-info text-white' />
const users = <FaUsers className='icon-info text-white' />
const education = <MdCastForEducation className='icon-info text-white' />
const Statistics = () => {
    const { t, i18n } = useTranslation();
    const { apiUrl } = useGlobalState()
    const getStatistics = async () => {
        const response = await axios.get(`${apiUrl}/api/website/webCounts`);
        return response.data;
    };
    const { data: statistics, error: statisticsError, isLoading: isLoadingStatistics } = useQuery('statistics', getStatistics);
    return (
        <>
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                <div className="icon-contant text-white d-flex flex-column">
                    {users}
                    <div className="info-count fs-4 mb-0 mt-3">
                        {isLoadingStatistics ? <div className="statistics-loader"></div> : null}
                        {statisticsError ? <div className="statistics-loader"></div> : null}
                        {statistics && statistics[0]?.SC}
                    </div>
                </div>
                <p className="info-title fs-3 fw-bold">
                    {t('New students')}
                </p>
            </div>
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                <div className="icon-contant text-white d-flex flex-column">
                    {education}
                    <div className="info-count fs-4 mb-0 mt-3">
                        {isLoadingStatistics ? <div className="statistics-loader"></div> : null}
                        {statisticsError ? <div className="statistics-loader"></div> : null}
                        {statistics && statistics[2]?.D1C}
                    </div>
                </div>
                <p className="info-title fs-3 fw-bold">
                    {t("Teaching Staff")}
                </p>
            </div>
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                <div className="icon-contant text-white d-flex flex-column">
                    {education}
                    <div className="info-count fs-4 mb-0 mt-3">
                        {isLoadingStatistics ? <div className="statistics-loader"></div> : null}
                        {statisticsError ? <div className="statistics-loader"></div> : null}
                        {statistics && statistics[3]?.D2C}
                    </div>
                </div>

                <p className="info-title fs-3 fw-bold">
                    {t("He is an assistant")}
                </p>
            </div>
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                <div className="icon-contant text-white d-flex flex-column">
                    {Graduation}
                    <div className="info-count fs-4 mb-0 mt-3">
                        {isLoadingStatistics ? <div className="statistics-loader"></div> : null}
                        {statisticsError ? <div className="statistics-loader"></div> : null}
                        {statistics && statistics[1]?.GC}
                    </div>
                </div>
                <p className="info-title fs-3 fw-bold">
                    {t("Graduates")}
                </p>
            </div>
        </>
    )
}

export default Statistics;