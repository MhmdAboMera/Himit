import { useGlobalState } from '../../Context';
import { useTranslation } from 'react-i18next';
import unitsImg from '../../assets/images/Units-img.png'
import axios from 'axios';
import { useQuery } from 'react-query';
import { ImageFun } from '../ImageFun';
import { NavLink } from 'react-router-dom';
import i18next from 'i18next';
const Units = () => {
    const { apiUrl } = useGlobalState()
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const getUnits = async () => {
        const response = await axios.get(`${apiUrl}/api/website/units`);
        return response.data;
    };
    const { data: units, error: unitsError, isLoading: isLoadingUnits } = useQuery('units', getUnits);
    if (isLoadingUnits) {
        return <p>Loading...</p>;
    }
    if (unitsError) {
        return <p>Error loading data</p>;
    }
    return (
        <div className="units py-2 mt-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12">
                        <div className="units-box  text-center">
                            <p className="units-heed fs-1 fw-bold m-0 p-0">
                                {i18next.t('Units')}
                            </p>
                            {/* <p className="my-sm-0 my-md-2 col-12  col-md-6 mx-auto">تعمل وحدة تقنية المعلومات في المعهد علي تقديم رؤيتها الاستراتيجية والتزامها بتحقيق تقدم متميز في المعهد علي تقديم رؤيتها الاستراتيجية والتزامها بتحقيق تقدم متميز ..</p> */}
                        </div>
                    </div>
                    {
                        units.map((unit) => {
                            const unitsName = unit.name_en.split(" ").join("-");
                            return (
                                <div className="col-md-4 col-lg-3 mb-3" key={unit.id}>
                                    <NavLink to={`/units/${unitsName}`} className={`text-decoration-none text-dark`}>
                                        <div className="units-box">
                                            <div className="box-img">
                                                <img src={unit.photo ? ImageFun(unit?.photo) : unitsImg} alt="units" width={"100%"} height={"100%"} />
                                            </div>
                                            <p className="fs-4 mt-4 text-center">
                                                {currentLanguage == 'ar' ? unit.name_ar : unit.name_en}
                                            </p>
                                        </div>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Units;