import { RiCodeSSlashLine } from "react-icons/ri";
import { MdFileCopy } from "react-icons/md";
import { GoClockFill } from "react-icons/go";
import { FaChartColumn } from "react-icons/fa6";
import i18next from "i18next";
const SubjectModal = ({ show, handleClose, subjectDetails, currentLang }) => {
  if (!subjectDetails || !show) return null;
  return (
    <div className={`modal fade ${show ? 'show' : ''}`} tabIndex="-1" style={{ display: show ? 'block' : 'none' }} aria-labelledby="exampleModalLabel" >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header justify-content-between">
            <div className="modal-title fs-5 fw-bold" id="exampleModalLabel">
              {currentLang === 'ar' ? subjectDetails.name : subjectDetails.nameEn}
            </div>
            <div className="m-0 text-white Close" onClick={handleClose} aria-label="Close">X</div>
            {/* <button type="button" className="btn-close m-0 text-white " onClick={handleClose} aria-label="Close"></button> */}
          </div>
          <div className="modal-body">
            <div className="fs-3 mb-2"> {i18next.t('basic information')} : </div>
            <div className="mb-3">{currentLang === 'ar' ? 'المحتوى العلمي للمقرر:' : 'Course Content:'} {subjectDetails.content}</div>
            <div className="row justify-content-around">
              <div className="code col-md-4 d-flex align-items-center flex-column p-4">
                <RiCodeSSlashLine />
                <div className="mt-3">
                  <strong>{currentLang === 'ar' ? 'كود المقرر : ' : 'Course Code :'}</strong>
                  {currentLang == "ar" ? subjectDetails.code : subjectDetails.codeEn}
                </div>
              </div>
              <div className="kinde col-md-4 d-flex align-items-center flex-column p-4">
                <MdFileCopy />
                <div className="mt-3">
                  <strong>{currentLang === 'ar' ? 'نوع المقرر : ' : 'Course Type : '}</strong>
                  {/* {subjectDetails.type} */}
                  {subjectDetails.term === '0' ? 'ممتدة' : subjectDetails.term === '1' ? 'ترم أول' : 'ترم ثاني'}
                </div>
              </div>
            </div>
            {
              (subjectDetails.term === '0' || subjectDetails.term === '1') &&
              <>
                <div className="fs-3 my-3 "> {currentLang === 'ar' ? ' بيانات الترم الأول : ' : 'First Term Details :'} </div>
                <div className="row justify-content-around">
                  <div className="code col-md-4 d-flex align-items-center flex-column p-4">
                    <GoClockFill />

                    <div className="mt-3">
                      <strong>{currentLang === 'ar' ? 'عدد الساعات:' : 'Hours:'}</strong> {subjectDetails.hours}
                    </div>
                  </div>
                  <div className="kinde col-md-4 d-flex align-items-center flex-column p-4">
                    <FaChartColumn />
                    <div className="mt-3">
                      <strong>{currentLang === 'ar' ? 'الدرجات:' : 'Grades:'}</strong> {subjectDetails.sum}
                    </div>
                  </div>
                </div>
              </>
            }
            {
              (subjectDetails.term === '0' || subjectDetails.term === '2') &&
              <>
                <div className="fs-3 my-3"> {currentLang === 'ar' ? ' بيانات الترم الثاني : ' : 'Second Term Details :'} </div>
                <div className="row justify-content-around">
                  <div className="code col-md-4 d-flex align-items-center flex-column p-4">
                    <GoClockFill />
                    <div className="mt-3">
                      <strong>{currentLang === 'ar' ? 'عدد الساعات:' : 'Hours:'}</strong> {subjectDetails.hours2}
                    </div>
                  </div>
                  <div className="kinde col-md-4 d-flex align-items-center flex-column p-4">
                    <FaChartColumn />
                    <div className="mt-3">
                      <strong>{currentLang === 'ar' ? 'الدرجات:' : 'Grades:'}</strong> {subjectDetails.sum}
                    </div>
                  </div>
                </div>
              </>
            }
            {/* Add more details as needed */}
          </div>
          {/* <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
              {currentLang === 'ar' ? 'إغلاق' : 'Close'}
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default SubjectModal