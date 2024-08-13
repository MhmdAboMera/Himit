import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import logo from "../assets/images/himit-logo.png";
import phone from "../assets/images/phone.png";
import { FaLanguage } from "react-icons/fa";
import { useGlobalState } from "../Context";
import axios from "axios";
import { useQuery } from "react-query";
import { ImageFun } from "./ImageFun";
import i18next from "i18next";
import { Ri24HoursLine } from "react-icons/ri";
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { apiUrl, seeting, seetingError, isLoadingSeeting, departments, departmentsError, isLoadingDepartments } = useGlobalState();
  const [isSticky, setSticky] = useState(false);
  // changeLanguage funcation
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  // get currentLanguage
  const currentLanguage = i18n.language;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  useEffect(() => {
    currentLanguage === "ar" ? "ar" : "en";
    if (currentLanguage === "ar") {
      document.documentElement.setAttribute("lang", "ar");
      document.documentElement.setAttribute("dir", "rtl");
      document.body.className = "ar";
    } else {
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.setAttribute("dir", "ltr");
      document.body.className = "en";
    }

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentLanguage]);
  const getNewsCat = async () => {
    const response = await axios.get(
      `${apiUrl}/api/website/newsClassification`
    );
    return response.data;
  };
  const {
    data: newsCat,
    error: newsCatError,
    isLoading: isLoadingNewsCat,
  } = useQuery("newsCat", getNewsCat);
  const getUnits = async () => {
    const response = await axios.get(`${apiUrl}/api/website/units`);
    return response.data;
  };
  const {
    data: units,
    error: unitsError,
    isLoading: isLoadingUnits,
  } = useQuery("units", getUnits);
  const pdfs = [
    {
      id: "webStudentGuides",
      name_ar: " دليل الطالب  ",
      name_en: " Student Guide ",
    },
    {
      id: "webActivitiesAchievements",
      name_ar: "   الانشطة والانجازات  ",
      name_en: "  Activities and achievements  ",
    },
    {
      id: "webExamRules",
      name_ar: "   قواعد الامتحانات  ",
      name_en: " Exam rules  ",
    },
    {
      id: "webUniversityStudentCharters",
      name_ar: "   ميثاق الطالب الجامعي ",
      name_en: " University student charter  ",
    },
    {
      id: "webAccreditations",
      name_ar: "  الاعتماد",
      name_en: " Accreditation ",
    },
    {
      id: "webCommonQuestions",
      name_ar: "  الأسئلة الشائعة  ",
      name_en: " common questions ",
    },
    {
      id: "webStudentsUnions",
      name_ar: " اتحاد الطلاب ",
      name_en: " students Union  ",
    },
    {
      id: "webStudyTimePlans",
      name_ar: "  الخطة الزمنية الدراسية  ",
      name_en: " Study time plan ",
    },
    {
      id: "webStudentGuideQualitys",
      name_ar: "  دليل الطالب للجودة ",
      name_en: " Student guide to quality ",
    },
  ];
  const Research = [
    {
      id: "WebScientificConferences",
      name_ar: " المؤتمرات العلمية  ",
      name_en: " Scientific conferences ",
    },
    {
      id: "WebCooperationProtocols",
      name_ar: " بروتوكولات التعاون ",
      name_en: " Cooperation protocols ",
    },
    {
      id: "importantSites",
      name_ar: " مواقع مهمة ",
      name_en: " Important sites ",
    },
  ];

  return (
    <>
      <header className={`header ${isSticky ? "sticky" : ""}`}>
        <div className="d-flex container justify-content-between align-items-center d-none d-md-none d-lg-flex ">
          <Link to="/" aria-label="logo">
            <img
              src={seeting ? ImageFun(seeting.logo) : logo}
              className="logo"
              width={"60px"}
              height={"60px"}
              alt="logo"
              title="logo"
              loading="lazy"
            />
          </Link>
          <div className="d-flex gap-2 justify-content-start align-items-center nav_contact">
            {/* <img
              src={phone}
              alt="phone"
              title="phone"
              loading="lazy"
              width={"60px"}
              height={"60px"}
              className="phone logo"
            /> */}
            <Ri24HoursLine className="HoursLine" />
            <div className="d-flex flex-column justify-content-start">
              <div className="d-flex gap-2 align-items-center ">
                {isLoadingSeeting ? <div className="Nav-loader"></div> : null}
                {seetingError ? <div className="Nav-loader"></div> : null}
                <Link to={`tel:${seeting?.tel1}`} className="phone">
                  {seeting?.tel1}
                </Link>
              </div>
              <div className="d-flex gap-2 align-items-center ">
                <Link to={`mailto:${seeting?.email}`} className="mailto">
                  {seeting?.email}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg py-0">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="d-block d-md-block d-lg-none" to="/">
              <img
                src={seeting ? ImageFun(seeting.logo) : logo}
                className="logo"
                width={"60px"}
                height={"60px"}
                alt="logo"
                title="logo"
                loading="lazy"
              />
            </Link>
            <div
              className={`collapse navbar-collapse`}
              id="navbarSupportedContent"
            >
              <ul className={`navbar-nav m-auto mb-2 mb-lg-0 ulBg`}>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/">
                    {t("home")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/about"
                  >
                    {t("about us")}
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <div
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className={` nav-link dropdown-toggle 
                      ${location.pathname.includes(`/manager/`)
                        || location.pathname.includes(`/InstituteBoardDirectors`)
                        || location.pathname.includes(`/OrganizationalChart`)
                        || location.pathname.includes(`/Evidence_and_policy`)
                        || location.pathname.includes(`/AdministrativeApparatus`)
                        ? "active" : ""}`}
                    aria-current="page"
                  >
                    {t("management")}
                  </div>
                  <ul
                    className={`dropdown-menu`}
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={`/InstituteBoardDirectors`}
                      >
                        {i18next.t('Institute Board of Directors')}
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to={`/manager/dean_of_the__institutes`}
                      >
                        {i18next.t('Dean of the Institute')}
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to={`/manager/institute_agents`}
                      >
                        {i18next.t('Vice Dean of the Institute for Education and Student Affairs')}
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to={`/manager/acting__institute_agents`}
                      >
                        {i18next.t('Vice Dean of the Institute for Community Service and Research Affairs')}
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to={`/manager/graduate__studies__coordinators`}
                      >
                        {i18next.t('Graduate Studies Coordinator')}
                      </NavLink>
                      {/* <Link className="dropdown-item" to={`/AcademicCouncils`}>
                        المجلس الأكاديمي
                      </Link> */}
                      <NavLink
                        className="dropdown-item"
                        to={`/OrganizationalChart`}
                      >
                        {i18next.t('Organizational Chart')}
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to={`/AdministrativeApparatus`}
                      >
                        {i18next.t('Administrative apparatus')}
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to={`/Evidence_and_policy`}
                      >
                        {i18next.t('Policy documents and mechanisms')}
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className={`nav-link dropdown-toggle ${location.pathname.includes(`/department/`) ? "active" : ""}`}
                    aria-current="page"
                    to="/sections"
                  >
                    {t("sections")}
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {departments?.map((depart) => {
                      const departmentName = depart.name_en.replace(
                        /\s+/g,
                        "-"
                      );
                      const isActive = location.pathname.includes(`/department/${departmentName}`);
                      return (
                        <li key={depart.id}>
                          <Link
                            className={`dropdown-item ${isActive ? "active" : ""}`}
                            to={`/department/${departmentName}`}
                          >
                            {currentLanguage == "ar"
                              ? depart.name_ar
                              : depart.name_en}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <div
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className={`nav-link dropdown-toggle ${location.pathname.includes(`/student/`) ? "active" : ""}`}
                    aria-current="page"
                  >
                    {t("Education and students")}
                  </div>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {pdfs?.map((pdf) => {
                      const isActive = location.pathname.includes(`/student/${pdf.id}`);
                      return (
                        <li key={pdf.id}>
                          <NavLink
                            className={`dropdown-item ${isActive ? "active" : ""}`}
                            to={`/student/${pdf.id}`}
                          >
                            {currentLanguage == "ar"
                              ? pdf.name_ar
                              : pdf.name_en}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <div
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className={`nav-link dropdown-toggle ${location.pathname.includes(`/news/`) ? "active" : ""}`}
                    aria-current="page"
                  >
                    {t("News")}
                  </div>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {newsCat?.map((newsCat) => {
                      const newsCatName = newsCat.name_en.split(" ").join("-");
                      const isActive = location.pathname.includes(`/news/${newsCatName}`);
                      return (
                        <li key={newsCat.id}>
                          <NavLink
                            className={`dropdown-item ${isActive ? "active" : ""}`}
                            to={`/news/${newsCatName}`}
                          >
                            {currentLanguage == "ar"
                              ? newsCat.name_ar
                              : newsCat.name_en}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  {/* <NavLink className="nav-link " aria-current="page" to="/units">
                    {t("Units")}
                  </NavLink> */}
                  <div
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className={`nav-link dropdown-toggle ${location.pathname.includes(`/units/`) ? "active" : ""}`}
                    aria-current="page"
                  >
                    {t("Units")}
                  </div>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <NavLink className="dropdown-item" to={`/units`}>
                      {t("Units")}
                    </NavLink>
                    {units?.map((unit) => {
                      const newsUnitName = unit.name_en.replace(/\s+/g, "-");
                      const isActive = location.pathname.includes(`/units/${newsUnitName}`);
                      return (
                        <li key={unit.id}>
                          <Link
                            className={`dropdown-item ${isActive ? "active" : ""}`}
                            to={`/units/${newsUnitName}`}
                          >
                            {currentLanguage == "ar"
                              ? unit.name_ar
                              : unit.name_en}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <div
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className={`nav-link dropdown-toggle ${location.pathname.includes(`/research/`) ? "active" : ""}`}
                    aria-current="page"
                  >
                    {t("Research")}
                  </div>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={`https://jiet.journals.ekb.eg/`}
                        target="_blank"
                      >
                        {i18next.t('Scientific journal')}
                      </NavLink>
                    </li>
                    {Research?.map((research) => {
                      return (
                        <li key={research.id}>
                          <NavLink
                            className="dropdown-item"
                            to={`/research/${research.id}`}
                          >
                            {currentLanguage == "ar"
                              ? research.name_ar
                              : research.name_en}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <div
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className={`nav-link dropdown-toggle ${location.pathname.includes(`/Services/`) ? "active" : ""}`}
                    aria-current="page"
                  >
                    {t("secvice")}
                  </div>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <NavLink className="dropdown-item" to={`/Services/Suggestions_Complaints`}>
                        {t("Suggestions and complaints")}
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to={`/Services/MilitaryEducation`}
                      >
                        {t("Military Education")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to={`/Services/survey`}>
                        {t("Survey")}
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        target="_blank"
                        to={`https://mis.himit-kfs.edu.eg/student`}
                      >
                        {t("Result")}
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/contact"
                  >
                    {t("contact us")}
                  </NavLink>
                </li>
                <li className="nav-link">
                  {currentLanguage == "ar" ? (
                    <FaLanguage
                      className="fs-2 text-white cursor-pointer lang-icon"
                      onClick={() => changeLanguage("en")}
                    />
                  ) : (
                    <FaLanguage
                      className="fs-2 text-white cursor-pointer lang-icon"
                      onClick={() => changeLanguage("ar")}
                    />
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
