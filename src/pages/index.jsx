import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import '../styles/home/home.css'
import SEO from "../components/SEO";
import Landing from "../components/home/Landing";
import HomeSiteInfo from "../components/home/HomeSiteInfo";
import { RxAvatar, RxClipboardCopy } from "react-icons/rx";
import { FaGraduationCap } from "react-icons/fa";
import { MdBorderColor } from "react-icons/md";
import Professors from "../components/home/Professors";
import Features from "../components/home/Features";
import EducationalPrograms from "../components/home/EducationalPrograms";
import Prof from "../components/home/Prof";
import Statistics from "../components/home/Statistics";
import Departments from "../components/home/Departments";
import News from "../components/home/News";
import Units from "../components/home/Units";
import StudentFeedback from "../components/home/StudentFeedback";
import MyCalendar from "../components/MyCalendar";
import Suggestions_Complaints from "../components/Suggestions_Complaints";
const HomePage = () => {
  const profile = <RxAvatar className='icon-info text-white' />
  const Graduation = <FaGraduationCap className='icon-info text-white' />
  const order = <MdBorderColor className='icon-info text-white' />
  const result = <RxClipboardCopy className='icon-info text-white' />
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [langClass, setLangClass] = useState("en");
  useEffect(() => {
    setLangClass(currentLanguage);
  }, []);
  return (
    <>
      <SEO
        title="Home - Himit"
        description="lorem lorem lorem lorem lorem"
        name="Himit"
        keywords="Himit"
        ogImage={window.location.href + "src/assets/images/himit-logo.png"}
      />
      <Landing />
      <div className="home-site-info mb-3 mt-5 mt-md-2">
        <div className="container">
          <div className="row">
            <HomeSiteInfo name={profile} title={t("Student/Graduate Login")} route={'https://mis.himit-kfs.edu.eg/student'} />
            <HomeSiteInfo name={Graduation} title={t("Employment application form")} route={''} />
            <HomeSiteInfo name={order} title={t("Faculty member login")} route={'https://mis.himit-kfs.edu.eg/doctor/login'} />
            <HomeSiteInfo name={result} title={t("Employee login")} route={'https://mis.himit-kfs.edu.eg/employee/login'} />

          </div>
        </div>
      </div>
      <Prof />
      <Professors />
      <div className="statistics py-5">
        <div className="container">
          <div className="row">
            <Statistics />
          </div>
        </div>
      </div>
      <EducationalPrograms />
      {/* <Message /> */}
      <StudentFeedback />
      <Features />
      <News />
      <Departments />
      <Units />
      <MyCalendar />
      <Suggestions_Complaints />
    </>
  );
};

export default HomePage;
