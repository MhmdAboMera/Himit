import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import SubjectModal from "./SubjectModal"; // Adjust the import path as necessary
import { useGlobalState } from "../../Context";
import { t } from "i18next";
import React from "react";
const CoursesPage = () => {
  const { apiUrl } = useGlobalState()
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [courses, setCourses] = useState([]);
  const [activeTab, setActiveTab] = useState("2018");
  const { name } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);

  useEffect(() => {
    getCoursesData();
  }, []);

  const getCoursesData = async () => {
    try {
      const depResponse = await axios.get(`${apiUrl}/api/website/departments`);
      const info = depResponse.data.find((dep) => dep.name_en === name.replace("-", " "));

      if (info) {
        const coursesResponse = await axios.get(`${apiUrl}/api/website/departmentSubjects/${info.id}`);
        setCourses(coursesResponse.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getCardColor = (index) => {
    return index % 2 === 0 ? "bg-info bg-opacity-25" : "bg-primary bg-opacity-25";
  };

  const filteredCourses = courses.filter(course =>
    (activeTab === "2018" && course.total_subject_estimate_id === 1) ||
    (activeTab === "2010" && course.total_subject_estimate_id === 2)
  );

  const handleShowMore = async (subjectId) => {
    try {
      const response = await axios.get(`${apiUrl}/api/website/subject/${subjectId}`);
      setSelectedSubject(response.data);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching subject details:", error);
    }
  };

  return (
    <div className="container mt-4">
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "2018" ? "active" : ""}`}
            onClick={() => setActiveTab("2018")}
          >
            {t('2018 semester list')}
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "2010" ? "active" : ""}`}
            onClick={() => setActiveTab("2010")}
          >
            {t('List of 2010 classes')}
          </button>
        </li>
      </ul>

      <div className="tab-content">
        <div className={`tab-pane fade ${activeTab === "2018" ? "show active" : ""}`} id="tab2018">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {filteredCourses.map((course, index) => (
              <div key={course.id} className="col">
                <div className={`card h-100 ${getCardColor(index)}`}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="fs-4 fw-bold">{course.hours}</span>
                      <i className="bi bi-book fs-4"></i>
                    </div>
                    <h5 className="card-title">
                      {currentLang === 'ar' ? course.name : course.nameEn}
                    </h5>
                    <button
                      className="btn btn-outline-primary mt-2"
                      onClick={() => handleShowMore(course.id)}
                    >
                      {currentLang === 'ar' ? 'عرض المزيد' : 'Show More'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`tab-pane fade ${activeTab === "2010" ? "show active" : ""}`} id="tab2010">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {filteredCourses.map((course, index) => (
              <div key={course.id} className="col">
                <div className={`card h-100 ${getCardColor(index)}`}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="fs-4 fw-bold">{course.hours}</span>
                      <i className="bi bi-book fs-4"></i>
                    </div>
                    <h5 className="card-title">
                      {currentLang === 'ar' ? course.name : course.nameEn}
                    </h5>
                    <button
                      className="btn btn-outline-primary mt-2"
                      onClick={() => handleShowMore(course.id)}
                    >
                      {currentLang === 'ar' ? 'عرض المزيد' : 'Show More'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SubjectModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        subjectDetails={selectedSubject}
        currentLang={currentLang}
      />
    </div>
  );
};

export default CoursesPage;
