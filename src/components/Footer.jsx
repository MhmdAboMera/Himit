import '../styles/footer/footer.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/himit-logo.png'
import footer from '../assets/images/footer-bg-2.png'
import { FaAngleRight, FaEnvelope, FaPhoneSquareAlt } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'
import { useTranslation } from 'react-i18next'
import BackToTopButton from './BackToTopButton'
import SocialIcons from './SocialIcons'
import { useGlobalState } from '../Context'
import { ImageFun } from './ImageFun'
import React from "react";
const Footer = () => {
    const { seeting, seetingError, isLoadingSeeting ,departments , departmentsError ,isLoadingDepartments} = useGlobalState();
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    return (
        <>
            <footer>
                <div className="img-box-footer">
                    <img src={footer} alt="footer" loading="lazy" title='footer-iamge' width={"100%"} height={"100%"} className='img-footer' />
                </div>
                <div className="container">
                    <div className="row pb-2">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
                            <div className="p-3 d-flex justify-content-center">

                                <img className="img_footer" width={"140px"} height={"140px"} src={seeting ? ImageFun(seeting.logo) : logo}
                                    title="himit_logo" alt="himit_logo" loading="lazy" />
                            </div>
                            <div className="footer-text mb-2 pb-2">
                                {isLoadingSeeting ? <div className="Nav-loader"></div> : null}
                                {seetingError ? <div className="Nav-loader"></div> : null}
                                {seeting ? seeting?.vision : t("footerPara")}
                                {/* {t("footerPara")} */}
                            </div>
                            <SocialIcons tel1={seeting?.tel1} twitter={seeting?.twitter} linkedin={seeting?.linkedin} youtube={seeting?.youtube} instagram={seeting?.instagram} />
                        </div>
                        <div className="col-6 col-sm-12 col-md-6 col-lg-3">
                            <div className="bord_side">
                                <p className="text-da  fs-2">{t("sections")}</p>
                                <div className="d-flex mt-2 service flex-column gap-3 m-0 p-0">
                                {departments?.map((depart) => {
                      const departmentName = depart.name_en.replace(
                        /\s+/g,
                        "-"
                      );
                      return (
                             <Link key={depart.id}  to={`/department/${departmentName}`}
                                        className="d-flex gap-2 align-items-center text-decoration-none text-dark service-link ">
                                        <FaAngleRight />
                                        <span>{currentLanguage == "ar"? depart.name_ar: depart.name_en}</span>
                            </Link>
                      );
                    })}                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-12 col-md-6 col-lg-3">
                            <div className="bord_side">
                                <p className="text-dark  fs-2">{t("Links")}</p>
                                <div className="d-flex mt-2 flex-column gap-2 p-0">
                                    <NavLink className="d-flex gap-2 align-items-center text-decoration-none text-dark foot-link" to="/">
                                        <FaAngleRight />
                                        <span>{t("home")}</span>
                                    </NavLink>
                                    <NavLink className="d-flex gap-2 align-items-center text-decoration-none text-dark foot-link" to="/about">
                                        <FaAngleRight />
                                        <span>{t("about us")}</span>
                                    </NavLink>
                                    <NavLink className="d-flex gap-2 align-items-center text-decoration-none text-dark foot-link" to="/units/QAU">
                                        <FaAngleRight />
                                        <span> {t("Units")}</span>
                                    </NavLink>
                                    <NavLink className="d-flex gap-2 align-items-center text-decoration-none text-dark foot-link" to="/news/Student-Activities">
                                        <FaAngleRight />
                                        <span>{t("News")} </span>
                                    </NavLink>
                                    <NavLink className="d-flex gap-2 align-items-center text-decoration-none text-dark foot-link" to="/InstituteBoardDirectors">
                                        <FaAngleRight />
                                        <span>{t("management")}</span>
                                    </NavLink>
                                    <NavLink className="d-flex gap-2 align-items-center text-decoration-none text-dark foot-link" to="/contact">
                                        <FaAngleRight />
                                        <span>{t("contact us")}</span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="bord_side">
                                <p className="text-dark  fs-2">{t("contact us")}</p>
                                <div className="d-flex mt-2 flex-column gap-2 footer-text py-2 p-0">
                                    <Link className="d-flex gap-2 align-items-center text-decoration-none text-dark " to={`tel:${seeting?.tel1}`} rel="nofollow">
                                        <div className="contact_icon px-2 py-1">
                                            <FaPhoneSquareAlt />
                                        </div>
                                        <span>
                                            {isLoadingSeeting ? <div className="Nav-loader"></div> : null}
                                            {seetingError ? <div className="Nav-loader"></div> : null}
                                            {seeting?.tel1}
                                            {/* 01098755465 */}
                                        </span>
                                    </Link>
                                    <Link className="d-flex gap-2 align-items-center text-decoration-none text-dark " to={`mailto:${seeting?.email}`} rel="nofollow">
                                        <div className="contact_icon px-2 py-1">
                                            <FaEnvelope />
                                        </div>
                                        {isLoadingSeeting ? <div className="Nav-loader"></div> : null}
                                        {seetingError ? <div className="Nav-loader"></div> : null}
                                        <span>{seeting?.email}</span>
                                    </Link>
                                    <Link className="d-flex gap-2 align-items-center text-decoration-none text-dark " to="" rel="nofollow">
                                        <div className="contact_icon px-2 py-1">
                                            <ImLocation />
                                        </div>
                                        {isLoadingSeeting ? <div className="Nav-loader"></div> : null}
                                        {seetingError ? <div className="Nav-loader"></div> : null}
                                        <span>{seeting?.address}</span>

                                    </Link>

                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                {/* <div className='footer-bottom'></div> */}
                <BackToTopButton />
            </footer>

        </>
    )
}

export default Footer