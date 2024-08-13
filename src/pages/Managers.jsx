import { useEffect, useState } from 'react'
import avater from '../assets/images/avater.jpg'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useGlobalState } from '../Context';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { ImageFun } from '../components/ImageFun';
import SocialIcons from '../components/SocialIcons';
import '../styles/managers/manager.css'
import { FaFile, FaWhatsapp } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import Professors from '../components/home/Professors';
const Managers = () => {
    const { t, i18n } = useTranslation();
    const currantLang = i18n.language;
    const { apiUrl } = useGlobalState()
    let { manager } = useParams();
    let [managerData, setManagerData] = useState(null);
    useEffect(() => {
        mangData();
    }, [manager]);

    const mangData = async () => {
        const response = await axios.get(
            `${apiUrl}/api/website/personsSittings`
        );
        const manID = response.data[manager].id;
        const dataManager = await axios.get(
            `${apiUrl}/api/website/doctor/${manID}`
        );
        setManagerData(dataManager.data)
    }
    return (
        <>
            <div className="prof-section py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <p className="fs-2">
                                {
                                    currantLang == "ar" ? managerData?.name_job : managerData?.name_job
                                }
                            </p>
                            <p className="fs-2 fw-bold dean-name">
                                {
                                    currantLang == "ar" ? `أ.د/ ${managerData?.name_ar ? managerData?.name_ar : ""}` : `${managerData?.name_en ? managerData?.name_en : ""}`
                                }
                            </p>
                            <p>
                                {
                                    currantLang == "ar" ? managerData?.websiteWords : managerData?.websiteWords
                                }
                            </p>
                            <SocialIcons tel1={managerData?.tel} twitter={managerData?.twitter} linkedin={managerData?.linkedIn} youtube={managerData?.youtube} instagram={managerData?.instagram} />

                        </div>
                        <div className="col-sm-12 col-md-6 d-flex justify-content-center mt-3" >
                            <NavLink to={`/doctor/${managerData?.name_en.split(' ').join("-")}`}>
                                <div className="img-landing-box">
                                    <img src={managerData ? ImageFun(managerData?.photo) : avater} alt="img land" width="100%" height="100%" className="img-landing" />
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="info-manager my-4">
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="fs-2 fw-bold mb-4 heed"> {t('information...')} </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="contact_col rounded p-4">
                                <div className="my-4 fs-2 text-white">{t('Connect with us ....')} </div>
                                <div className="d-flex m-0 my-4">
                                    <Link to={`https://wa.me/${managerData?.tel}`} className="text-white d-flex align-items-center d-flex gap-2 text-decoration-none">
                                        <FaWhatsapp />
                                        <span>
                                            {managerData?.tel}
                                        </span>
                                    </Link>
                                </div>
                                <div className="d-flex m-0 my-4">
                                    <Link to={`mailto:${managerData?.email}`} className="text-white d-flex align-items-center  d-flex gap-2 text-decoration-none" >
                                        <MdMailOutline />
                                        <span>
                                            {managerData?.email}
                                        </span>
                                    </Link>
                                </div>
                                <div className="d-flex m-0 my-4">
                                    <Link to={'#'} aria-current="page" className="text-white d-flex align-items-center d-flex gap-2 text-decoration-none">
                                        <FaLocationDot />
                                        <span>
                                            {managerData?.address}
                                        </span>
                                    </Link>
                                </div>
                                <div className="d-flex m-0 my-4">
                                    <Link to={ImageFun(managerData?.cv)} download aria-current="page" className="text-white d-flex align-items-center d-flex gap-2 text-decoration-none" >
                                        <FaFile />
                                        <span> {t('CV')}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-8">
                            {managerData && <iframe width="100%" height="800px" src={ImageFun(managerData?.cv)} />}
                        </div>
                    </div>
                </div>
            </div>
            <Professors />
        </>
    )
}

export default Managers