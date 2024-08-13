import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
import '../styles/students/students.css'
import man from '../assets/images/girl.png'
import StudentLanding from "../components/StudentLanding";
import React from "react";
const EducationStudents = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const [langClass, setLangClass] = useState("en");
    useEffect(() => {
        setLangClass(currentLanguage);
    }, []);

    return (
        <>
            <SEO
                title="service - Himit"
                description="lorem lorem lorem lorem lorem"
        name="Himit"
        keywords="Himit"
        ogImage={window.location.href + "src/assets/images/himit-logo.png"}
            />
            <StudentLanding man={man} name={' التعليم والطلاب'} des={`يضم الجهاز الأكاديمي للمعهد نخبه من الأساتذة وأعضاء هيئه التدريس ذوي خبره عالية في مجالات التخصص والإدارة منهم المعينين بالمعهد وأخرين من جامعات حكومية -كما يتولى انجاز الاعمال الإدارية بالمعهد مجموعة متميزة تضم افراد ذوى مؤهلات علمية - دورات تخصصية تخدم المجالات المختلفة.`} />
            {/* <div className="land-student">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-md-5">
                            <p className="fs-1 fw-bold mb-sm-1  mb-md-5 heed text-center">
                                التعليم والطلاب
                            </p>
                            <p className="fs-5">
                                يضم الجهاز الأكاديمي للمعهد نخبه من الأساتذة وأعضاء هيئه التدريس ذوي خبره عالية في مجالات التخصص والإدارة منهم المعينين بالمعهد وأخرين من جامعات حكومية -كما يتولى انجاز الاعمال الإدارية بالمعهد مجموعة متميزة تضم افراد ذوى مؤهلات علمية - دورات تخصصية تخدم المجالات المختلفة.
                            </p>
                        </div>
                        <div className="col-md-6 position-relative">
                            <div className="img-box">
                                <img src={man} alt="img land" className='img-landing' />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="kfs-kafrElSheikh py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="heed fs-1 fw-bold mb-sm-3">
                                المعهد العالي للهندسة والتكنولوجيا بكفر الشيخ..
                            </div>
                            <p className="m-0">يلتزم المعهد باعداد خريج مؤهل طبقاً للمعايير القومية والأكاديمية المرجعية محلياً ودولياً فى العلوم الهندسية يلبى احتياجات سوق العمل وقادر على البحث العلمى لخدمة المجتمع </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EducationStudents;
