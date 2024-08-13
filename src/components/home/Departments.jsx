import CustomButton from '../CustomButton';
import departmentsImg from '../../assets/images/departments-img.png'
import logo from "../../assets/images/himit-white.png";
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ImageFun } from '../ImageFun';
import { useGlobalState } from '../../Context';
import i18next from 'i18next';
import React from "react";
const Departments = () => {
    const { apiUrl, departments, departmentsError, isLoadingDepartments, } = useGlobalState()
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    if (isLoadingDepartments) {
        return <p>Loading...</p>;
    }
    if (departmentsError) {
        return <p>Error loading data</p>;
    }
    return (
        <div className="departments">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <div className="row">
                            <div className="col-12">
                                <p className="fs-4 fw-bold departments-heed pb-5">
                                    {i18next.t('Promoting the use of technology to improve teaching and learning processes')}
                                </p>
                            </div>
                            <div className="col-12">
                                <Link to="/" aria-label="logo">
                                    {" "}
                                    <img src={logo} className='log-departments' width={"100%"} height={"100%"} alt="log-departments " />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-9">
                        <div className="row">
                            {
                                departments.map((depart) => {
                                    const departmentName = depart.name_en.replace(/\s+/g, '-');
                                    return (
                                        <div className="col-sm-12 col-md-6 col-lg-4 mb-3" key={depart.id}>
                                            <NavLink to={`/department/${departmentName}`} className={`text-decoration-none`}>
                                                <div className="img-departments-box">
                                                    <img src={depart.photo ? ImageFun(depart?.photo) : departmentsImg} alt="departments img" width={"100%"} height={"100%"} className='img-fluid' />
                                                    <p className='ovarlay-des'>
                                                        {
                                                            currentLanguage == "ar" ? depart.name_ar : depart.name_en
                                                        }
                                                    </p>
                                                </div>
                                            </NavLink>
                                        </div>
                                    )
                                })
                            }
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-3 custom-col">
                                <div className="box-buttom">
                                    {/* {i18next.t('For More')} */}
                                    {/* <CustomButton text={i18next.t('sections')} color={'#fff'} routeTo={'#'} /> */}
                                    <div className='text-white fs-4 fw-bold'>
                                        {i18next.t('sections')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Departments;