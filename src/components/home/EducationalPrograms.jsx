import { useTranslation } from 'react-i18next';
import CustomButton from '../CustomButton';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useGlobalState } from '../../Context';
import { NavLink } from 'react-router-dom';
const EducationalPrograms = () => {
    const { i18n } = useTranslation();
    const { apiUrl } = useGlobalState()
    const currentLanguage = i18n.language;
    const getPrograms = async () => {
        const response = await axios.get(`${apiUrl}/api/website/departments`);
        return response.data;
    };
    const { data: programs, error: programsError, isLoading: isLoadingPrograms } = useQuery('programs', getPrograms);
    const filteredPrograms = programs?.filter(item => item.program === 1);
    if (isLoadingPrograms) {
        return <p>Loading...</p>;
    }

    if (programsError) {
        return <p>Error loading data</p>;
    }
    let counter = 1;
    return (
        <div className="educational-programs ">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-8">
                        <p className="fs-2 fw-bold heeding-program">
                            {i18n.t('Educational programs at the institute')}
                        </p>
                        <p className='mb-sm-5 my-md-5 fs-5 notes'>
                            {i18n.t('Educational programs des')}
                        </p>
                        {/* <div className=" d-flex justify-content-center mb-3">
                            <CustomButton text={i18n.t('For More')} color={'#000'} routeTo={'#'} />
                        </div> */}
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center py-3">
                        {
                            filteredPrograms.map(prog => {
                                const departmentName = prog.name_en.replace(/\s+/g, '-');
                                return (
                                    <NavLink key={prog.id} to={`/department/${departmentName}`} className={`text-decoration-none`}>
                                        <div className="contant-prg-all position-relative mb-4" >
                                            <div className="bef-color"></div>
                                            <div className="program-contant shadow ">
                                                <div className="aft-color"></div>
                                                <div className="program-name fs-5 fw-bold text-dark">
                                                    {currentLanguage == "ar" ? prog.name_ar : prog.name_en}
                                                </div>
                                                <div className="program-count fs-5 fw-bold">{counter++}</div>
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default EducationalPrograms;