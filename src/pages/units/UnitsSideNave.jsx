import { t } from "i18next";
import logo from "../../assets/images/himit-logo.png";
import { NavLink, useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import React from "react";
const UnitsSideNave = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    const { unitName } = useParams()
    const links = [
        { text: t("home"), href: `/units/${unitName}` },
        { text: t('Director and Deputy Unit'), href: `/units/${unitName}/ManagerDeputy` },
        { text: t('Unit Board of Directors'), href: `/units/${unitName}/BoardStructure` },
        { text: t('Internal Regulation'), href: `/units/${unitName}/InternalRegulationFile` },
        { text: t('The administrative structure of the unit'), href: `/units/${unitName}/administrativeStructureFile` },
        { text: t('training courses'), href: `/units/${unitName}/TrainingCourses` },
    ];
    return (
        <div className="col-sm-12 col-lg-3 mb-5 aside-Graduates">
            <div className="list-group" id="list-tab" role="tablist">
                <div className="aside  rounded px-3 mt-2">
                    <img className="img w-100" src={logo} alt="logo" />
                    <ul className="list-unstyled p-0">
                        {links.map((link, index) => (
                            <li key={index} className="my-2">
                                <NavLink className={`aside_btn__odCRK btn  p-2 w-100 ${index == 0 ? "rounded-0 mb-2" : ""} ${currentLang == 'en' ? 'text-start' : ''}`} to={link.href}>
                                    {link.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UnitsSideNave;