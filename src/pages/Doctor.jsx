
import React from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
import axios from "axios";
import avater from "../assets/images/avater.jpg"
import { NavLink, useParams } from "react-router-dom";
import { useGlobalState } from "../Context";
import { FaFile } from "react-icons/fa";
import SocialIcons from "../components/SocialIcons";
import { ImageFun } from "../components/ImageFun";
import BasicInformation from "../components/BasicInformation";
import Research from "../components/Research";
const Doctor = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const { apiUrl } = useGlobalState()
    const { doctorName } = useParams();
    const [activeTab, setActiveTab] = useState(t('basic information'));
    const [doctor, setDoctor] = useState(null)
    const [qulification, setQulification] = useState(null)
    const [experience, setExperience] = useState(null)
    const [searches, setSearches] = useState(null)
    const [department, setDepartment] = useState(null)
    useEffect(() => {
        getDoctor()
    }, [doctorName]);
    const renderContent = () => {
        switch (activeTab) {
            case t('basic information'):
                return <BasicInformation data={qulification} experience={experience} />;
            case t('Research'):
                return <Research searches={searches} />;
            case t('CV'):
                return <>{doctor && <iframe width="100%" height="800px" src={ImageFun(doctor?.cv)} />}</>;
            default:
                return null;
        }
    };
    const getDoctor = async () => {
        try {
            const AllDoctors = await axios.get(
                `${apiUrl}/api/website/doctors`
            );
            const foundedDoctor = AllDoctors.data.find(
                (doctor) => doctor.name_en.split("-").join(" ") === doctorName.split("-").join(" ")
            );
            setDoctor(foundedDoctor)
            const doctorID = foundedDoctor?.id;
            const DepartmentID = foundedDoctor?.department_id;
            const Qulification = await axios.get(
                `${apiUrl}/api/website/staff/Qulification/${doctorID}`
            );
            setQulification(Qulification.data);
            const Experience = await axios.get(
                `${apiUrl}/api/website/staff/Experience/${doctorID}`
            );
            setExperience(Experience.data);
            const Searches = await axios.get(
                `${apiUrl}/api/website/staff/Searches/${doctorID}`
            );
            setSearches(Searches.data);
            const Department = await axios.get(
                `${apiUrl}/api/website/departments`
            );
            const foundedDepartment = Department.data.find(
                (Department) => Department.id === DepartmentID
            );
            setDepartment(foundedDepartment);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    return (
        <>
            <SEO
                title="service - NajezSoft Web Solutions"
                description="NajezSoft offers comprehensive web solutions including web design, development, hosting, SEO, and online marketing. Established in 2013, serving numerous clients and institutions."
                name="NajezSoft"
                keywords="web design, web development, SEO, online marketing, e-commerce, web hosting, NajezSoft"

            />
            <div className="doctor">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-3">
                            <div className="card p-2 mb-2">
                                <img
                                    src={doctor ? ImageFun(doctor?.photo) : avater}
                                    alt={currentLanguage == "ar" ? `أ.د/ ${doctor?.name_ar}` : doctor?.name_en}
                                    title={currentLanguage == "ar" ? `أ.د/ ${doctor?.name_ar}` : doctor?.name_en}
                                    className="InfoDoctor_img_doctor m-auto w-100 object-fit-contain"
                                />
                                <div className="my-3">
                                    <h5 className="text-center">
                                        {currentLanguage == "ar" ? `أ.د/ ${doctor?.name_ar}` : doctor?.name_en}
                                    </h5>
                                    <p className="text-secondary text-center mb-1">
                                        {currentLanguage == "ar" ? department?.name_ar : department?.name_en}
                                    </p>
                                </div>
                            </div>
                            <div className="card p-2 mb-2">
                                <p className="text-dark mb-1">
                                    {currentLanguage == "ar" ? doctor?.websiteWords : doctor?.websiteWords}
                                </p>
                            </div>
                            <div className="card p-2 mb-2">
                                <div className="p-chip p-component w-auto mb-2">
                                    <span className="p-chip-text">{t('information...')} </span>
                                </div>
                                <SocialIcons tel1={doctor?.tel} twitter={doctor?.twitter} linkedin={doctor?.linkedIn} youtube={doctor?.youtube} instagram={doctor?.instagram} />
                            </div>
                            <div className="card p-2 mb-2">
                                <div className="p-chip p-component w-auto">
                                    <NavLink to={ImageFun(doctor?.cv)} className={`text-decoration-none text-dark`}>
                                        <FaFile />
                                        <span className="p-chip-text"> {t('CV')}  </span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-9">
                            <div>
                                <ul className="nav-tabs list-unstyled d-flex gap-3">
                                    <li className={activeTab === t('basic information') ? 'active' : ''} onClick={() => setActiveTab(t('basic information'))}>{t('basic information')} </li>
                                    <li className={activeTab === t('Research') ? 'active' : ''} onClick={() => setActiveTab(t('Research'))}> {t('Research')} </li>
                                    <li className={activeTab === t('CV') ? 'active' : ''} onClick={() => setActiveTab(t('CV'))}>{t('CV')}</li>
                                </ul>
                                <div className="tab-content">
                                    {renderContent()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Doctor;