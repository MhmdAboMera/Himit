import { useTranslation } from 'react-i18next';
import { BsCalendar2Date } from 'react-icons/bs'
import React from "react";
const Research = ({ searches }) => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    return (
        <div className="research">
            <div className="container">
                <div className="row">
                    {
                        searches.map((item, index) => {
                            return (
                                <div className="search-contant" key={index}>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-8">
                                            <div className="search-name mb-2">
                                                {
                                                    currentLanguage == "ar" ? item.name_ar : item.name_en
                                                }
                                            </div>
                                            <div className="search-outher">
                                                {item.authors}
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex justify-content-end">
                                            <div className="date d-flex gap-2 align-items-center">
                                                <span> {item.yearOfPublication}</span>
                                                <BsCalendar2Date />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Research